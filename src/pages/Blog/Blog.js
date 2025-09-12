import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";

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
    <div className={styles.blogWrapper}>
      <div className={styles.blogContent}>
        {/* Main */}
        <div className={styles.blogMain}>
          {!selectedPost && (
            <>
              <h2 className={styles.blogTitle}>
                {selectedCategory
                  ? `Category: ${selectedCategory}`
                  : "Pet Care"}
              </h2>
              {loading && <p>Đang tải...</p>}

              <div id="blog-container" className={styles.blogGrid}>
                {filteredPosts.map((post, idx) => (
                  <div className={styles.blogCard} key={idx}>
                    <div className={styles.blogImageWrapper}>
                      <img style={{
                        WebkitMaskImage: "url(/images/shape/blog_post_mask.svg)",
                        maskImage: "url(/images/shape/blog_post_mask.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} onClick={() => setSelectedPost(post)} src={post.image} alt={post.title} />
                      <div className={styles.blogTags}>
                        <span className={styles.blogTag}>{post.category}</span>
                      </div>
                    </div>
                    <div className={styles.blogBody}>
                      <p className={styles.meta}>
                        <span className={styles.author}>{post.reading_time}</span>
                        <span className={styles.date}>{post.date}</span>
                      </p>
                      <h5 onClick={() => setSelectedPost(post)}>{post.title}</h5>
                    </div>
                  </div>
                ))}
              </div>

              {!selectedCategory && (
                <nav className={styles.paginationWrapper}>
                  <ul className={styles.pagination}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <li key={p}>
                          <button
                            className={p === currentPage ? styles.active : ""}
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
            <div className={styles.postDetail}>
              {loadingContent ? (
                <p>Loading content...</p>
              ) : (
                <>
                  <h2>{selectedPost.title}</h2>
                  <p className={styles.meta}>
                    {selectedPost.category} • {selectedPost.date}
                  </p>
                  <button
                    className={styles.backBtn}
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
                    className={styles.postContent}
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                  <button
                    className={styles.backBtn}
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
        <div className={styles.sidebar}>
          {categories.length > 0 && (
            <div className={styles.sidebarBlock}>
              <h5>Category</h5>
              <ul className={styles.list}>
                {/* Tất cả danh mục */}
                <li
                  className={`${styles.listItem} ${selectedCategory === null ? styles.active : ""}`}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPost(null);
                  }}
                >
                  All categories
                  <span className={styles.badge}>{posts.length}</span>
                </li>

                {/* Danh mục riêng */}
                {categories.map((c, i) => (
                  <li
                    key={i}
                    className={`${styles.listItem} ${c.name === selectedCategory ? styles.active : ""
                      }`}
                    onClick={() => {
                      setSelectedCategory(c.name);
                      setSelectedPost(null);
                    }}
                  >
                    {c.name}
                    <span className={styles.badge}>{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {latestPosts.length > 0 && (
            <div className={styles.sidebarBlock}>
              <h5>Latest posts</h5>
              <ul className={styles.list}>
                {latestPosts.map((post, i) => (
                  <li
                    key={i}
                    className={styles.listItem}
                    onClick={() => setSelectedPost(post)}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags.length > 0 && (
            <div className={styles.sidebarBlock}>
              <h5>Popular Tags</h5>
              <ul className={styles.list}>
                {/* Tất cả tags */}
                <li
                  className={`${styles.listItem} ${selectedTag === null ? styles.active : ""}`}
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
                    className={`${styles.listItem} ${tag === selectedTag ? styles.active : ""}`}
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