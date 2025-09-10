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

  const loadPostContent = async (url) => {
    setLoadingContent(true);
    try {
      const res = await fetch(url);
      const data = await res.json(); // giả sử API trả về { title, content, image, date, category }
      setSelectedPost(data);
    } catch (err) {
      console.error("Lỗi load nội dung:", err);
    }
    setLoadingContent(false);
  };

  return (
    <div className="blog-wrapper">
      <div className="blog-content">
        {/* Main */}
        <div className="blog-main">
          {!selectedPost && (
            <>
              <h2 className="blog-title">Tất cả bài viết</h2>
              {loading && <p>Đang tải...</p>}

              <div id="blog-container" className="blog-grid">
                {posts.map((post, idx) => (
                  <div className="blog-col" key={idx}>
                    <div className="blog-card">
                      <img src={post.image} alt={post.title} />
                      <div className="blog-body">
                        <h5>{post.title}</h5>
                        <p className="meta">
                          <small>
                            {post.category} • {post.date} • {post.reading_time}
                          </small>
                        </p>
                        <p className="excerpt">{post.excerpt}</p>
                        <button
                          className="read-more"
                          onClick={() => setSelectedPost(post)}
                        >
                          Đọc thêm
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav className="pagination-wrapper">
  <ul className="pagination">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
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
    ))}
  </ul>
</nav>
            </>
          )}

          {/* Post detail */}
          {selectedPost && (
            <div className="post-detail">
              {loadingContent ? (
                <p>Đang tải nội dung...</p>
              ) : (
                <>
                  <h2>{selectedPost.title}</h2>
                  <p className="meta">
                    {selectedPost.category} • {selectedPost.date}
                  </p>
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
                    ← Quay lại danh sách
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Sidebar giữ nguyên */}
        <div className="sidebar">
  {categories.length > 0 && (
    <div className="sidebar-block">
      <h5>Danh mục</h5>
      <ul className="list">
        {categories.map((c, i) => (
          <li key={i} className="list-item">
            {c.name}
            <span className="badge">{c.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )}

  {latestPosts.length > 0 && (
    <div className="sidebar-block">
      <h5>Bài viết mới nhất</h5>
      <ul className="list">
        {latestPosts.map((title, i) => (
          <li key={i} className="list-item">
            {title}
          </li>
        ))}
      </ul>
    </div>
  )}

  {tags.length > 0 && (
    <div className="sidebar-block">
      <h5>Tags phổ biến</h5>
      <div className="tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default Blog;