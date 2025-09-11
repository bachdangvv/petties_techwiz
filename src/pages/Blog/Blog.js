import React, { useEffect, useState } from "react";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loadingContent, setLoadingContent] = useState(false);

  useEffect(() => {
    loadPosts(1);
  }, []);

  const loadPosts = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`/data/page${page}.json`);
      if (!res.ok) throw new Error("Không tìm thấy file JSON");
      const data = await res.json();

      setPosts(data.all_posts || []);

      // Chỉ load sidebar khi là trang 1
      if (page === 1) {
        setCategories(data.categories || []);
        setLatestPosts(data.latest_posts || []);
        setTags(data.popular_tags || []);
      }
    } catch (err) {
      console.error("Lỗi load JSON:", err);
    }
    setLoading(false);
  };

  // const loadPostContent = async (url) => {
  //   setLoadingContent(true);
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setSelectedPost(data);
  //   } catch (err) {
  //     console.error("Lỗi load nội dung:", err);
  //   }
  //   setLoadingContent(false);
  // };

  // Lọc bài viết theo category
  const filteredPosts = posts.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchTag = selectedTag ? p.tags?.includes(selectedTag) : true;
    return matchCategory && matchTag;
  });

  return (
    <div className="blog-wrapper">
      <div className="blog-content">
        {/* Main */}
        <div className="blog-main">
          {!selectedPost && (
            <>
              <h2 className="blog-title">
                {selectedCategory
                  ? `Category: ${selectedCategory}`
                  : "All Post"}
              </h2>
              {loading && <p>Đang tải...</p>}



              <div id="blog-container" className="blog-grid">
                {filteredPosts.map((post, idx) => (
                  <div className="blog-card" key={idx}>
                    <div className="blog-image-wrapper">
                      <img style={{
                        WebkitMaskImage: "url(/images/shape/blog_post_mask.svg)",
                        maskImage: "url(/images/shape/blog_post_mask.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} onClick={() => setSelectedPost(post)} src={post.image} alt={post.title} />
                      <div className="blog-tags">
                        <span className="blog-tag">{post.category}</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <p className="meta">
                        <span className="author">{post.reading_time}</span>
                        <span className="date">{post.date}</span>
                      </p>
                      <h5 onClick={() => setSelectedPost(post)}>{post.title}</h5>
                    </div>
                  </div>
                ))}
              </div>

              {!selectedCategory && (
                <nav className="pagination-wrapper">
                  <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <li key={p}>
                          <button
                            className={p === currentPage ? "active" : ""}
                            onClick={() => {
                              loadPosts(p);
                              setCurrentPage(p);
                            }}
                          >
                            {p}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              )}
            </>
          )}

          {/* Post detail */}
          {selectedPost && (
            <div className="post-detail">
              {loadingContent ? (
                <p>Loading content...</p>
              ) : (
                <>
                  <h2>{selectedPost.title}</h2>
                  <p className="meta">
                    {selectedPost.category} • {selectedPost.date}
                  </p>
                  <button
                    className="back-btn"
                    onClick={() => setSelectedPost(null)}
                  >
                    ← Back to post list
                  </button>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    style={{ width: "100%", marginBottom: "20px" }}
                  />
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                  <button
                    className="back-btn"
                    onClick={() => setSelectedPost(null)}
                  >
                    ← Back to post list
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          {categories.length > 0 && (
            <div className="sidebar-block">
              <h5>Category</h5>
              <ul className="list">
                {/* Tất cả danh mục */}
                <li
                  className={`list-item ${selectedCategory === null ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPost(null);
                  }}
                >
                  All categories
                  <span className="badge">{posts.length}</span>
                </li>

                {/* Danh mục riêng */}
                {categories.map((c, i) => (
                  <li
                    key={i}
                    className={`list-item ${c.name === selectedCategory ? "active" : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(c.name);
                      setSelectedPost(null);
                    }}
                  >
                    {c.name}
                    <span className="badge">{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}



          {latestPosts.length > 0 && (
            <div className="sidebar-block">
              <h5>Latest posts</h5>
              <ul className="list">
                {latestPosts.map((post, i) => (
                  <li
                    key={i}
                    className="list-item"
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags.length > 0 && (
            <div className="sidebar-block">
              <h5>Popular Tags</h5>
              <ul className="list">
                {/* Tất cả tags */}
                <li
                  className={`list-item ${selectedTag === null ? "active" : ""}`}
                  onClick={() => {
                    setSelectedTag(null);
                    setSelectedPost(null);
                  }}
                >
                  All tags
                </li>

                {/* Các tag */}
                {tags.map((tag, i) => (
                  <li
                    key={i}
                    className={`list-item ${tag === selectedTag ? "active" : ""}`}
                    onClick={() => {
                      setSelectedTag(tag);
                      setSelectedPost(null);
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
