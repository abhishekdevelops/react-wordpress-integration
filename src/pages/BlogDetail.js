import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://cms.digitalwebtrends.in/wp-json/wp/v2/posts/${id}?_embed`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching blog posts:", err));
  }, [id]);

  if (!post) return <p style={{ padding: "2rem" }}>Loading...</p>;

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const authorName = post._embedded?.author?.[0]?.name || "Unknown Author";
  const publishedDate = new Date(post.date).toDateString();

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
        lineHeight: 1.6,
      }}
    >
      <h2
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        style={{ marginBottom: "0.5rem" }}
      />

      <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        Published on <strong>{publishedDate}</strong> by{" "}
        <strong>{authorName}</strong>
      </p>

      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "6px",
            marginBottom: "1.5rem",
          }}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default BlogDetail;
