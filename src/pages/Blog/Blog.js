import React, { useEffect, useState } from "react";

// CSS có thể giữ nguyên trong file .css riêng
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css"; // bạn tạo file Blog.css để chứa phần style .blog-card, .sidebar, .tag

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load posts theo page
  const loadPosts = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`data/page${page}.json`);
      const data = await res.json();
      setPosts(data.all_posts);

      // chỉ load sidebar khi page 1
      if (page === 1) {
        setCategories(data.categories || []);
        setLatestPosts(data.latest_posts || []);
        setTags(data.popular_tags || []);
      }
    } catch (err) {
      console.error("Lỗi khi load dữ liệu:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts(1);
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Blog posts */}
        <div className="col-md-8">
          <h2 className="mb-4 fw-bold">Tất cả bài viết</h2>


          {loading && <p>Đang tải...</p>}
          <div id="blog-container" className="row g-4 blog-container">
            {posts.map((post, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card blog-card h-100 shadow-sm">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="text-muted mb-1">
                      <small>
                        {post.category} • {post.date} • {post.reading_time}
                      </small>
                    </p>
                    <p className="card-text">{post.excerpt}</p>
                    <a
                      href={post.content_url}
                      className="mt-auto btn btn-sm btn-primary"
                    >
                      Đọc thêm
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => loadPosts(1)}
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => loadPosts(2)}
                >
                  2
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar */}
        <div className="col-md-4 sidebar">
          {categories.length > 0 && (
            <div id="categories" className="mb-4">
              <h5>Danh mục</h5>
              <ul className="list-group">
                {categories.map((c, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {c.name}
                    <span className="badge bg-primary rounded-pill">
                      {c.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {latestPosts.length > 0 && (
            <div id="latest-posts" className="mb-4">
              <h5>Bài viết mới nhất</h5>
              <ul className="list-group">
                {latestPosts.map((title, i) => (
                  <li key={i} className="list-group-item">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tags.length > 0 && (
            <div id="tags" className="mb-4">
              <h5>Tags phổ biến</h5>
              <div>
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
