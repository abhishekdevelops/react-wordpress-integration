import React from "react";

function AboutPage() {
  return (
    <div
      style={{
        padding: "3rem 2rem",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "3rem",
        lineHeight: "1.7",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        About Me
      </h2>

      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Hi, I'm <strong>Abhishek</strong> — a frontend-focused developer
        passionate about building modern web applications using React and
        WordPress. I specialize in creating clean UI with dynamic data from
        headless CMS backends.
      </p>

      <p style={{ fontSize: "1.1rem", marginTop: "1rem", color: "#555" }}>
        In this project, I’ve built an integration between a React frontend and
        a WordPress backend using the WP REST API and Advanced Custom Fields
        (ACF). It’s scalable, professional, and ready to grow with more
        features.
      </p>
    </div>
  );
}

export default AboutPage;
