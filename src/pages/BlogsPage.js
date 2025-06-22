import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const postsPerPage = 3;

  useEffect(() => {
    fetch("https://cms.digitalwebtrends.in/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = `https://cms.digitalwebtrends.in/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=${postsPerPage}`;
    if (selectedCategory) {
      url += `&categories=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => {
        const total = res.headers.get("X-WP-TotalPages");
        if (total) setTotalPages(parseInt(total));
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [selectedCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>All Blog Posts</h2>

      <label style={{ display: "block", marginBottom: "1rem" }}>
        Filter by Category:{" "}
        <select
          value={selectedCategory || ""}
          onChange={(e) =>
            setSelectedCategory(e.target.value === "" ? null : e.target.value)
          }
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1.5rem",
              backgroundColor: "#fff",
            }}
          >
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              style={{ color: "#555" }}
            />
            <Link
              to={`/blogs/${post.id}`}
              style={{
                fontSize: "0.9rem",
                color: "#007bFF",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Read More →
            </Link>
          </div>
        ))
      )}

      {!loading && posts.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogsPage;
