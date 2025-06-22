import React from "react";

function HomePage() {
  return (
    <div
      style={{
        padding: "3rem 2rem",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "3rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
        Welcome to My React + WordPress Integration
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.7" }}>
        This project showcases how I’ve integrated a modern React frontend with
        WordPress as a headless CMS. Projects and blogs are fetched dynamically
        using the WP REST API and custom ACF fields.
      </p>

      <p style={{ marginTop: "2rem", fontSize: "1rem", color: "#007BFF" }}>
        Explore the <strong>Projects</strong> and <strong>Blogs</strong>{" "}
        sections from the menu.
      </p>
    </div>
  );
}

export default HomePage;
