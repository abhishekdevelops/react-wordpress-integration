import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  if (!project || !project.acf || !project.title) {
    return null;
  }

  const { title, acf, id } = project;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1.5rem",
        marginBottom: "1.5rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        maxWidth: "700px",
        margin: "1.5rem auto",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h3
        dangerouslySetInnerHTML={{ __html: title.rendered }}
        style={{ marginBottom: "0.5rem" }}
      />
      <p style={{ marginBottom: "0.75rem" }}>{acf.project_description}</p>

      {acf.project_image && (
        <img
          src={acf.project_image}
          alt={title.rendered}
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        />
      )}

      <p style={{ marginBottom: "0.75rem" }}>
        <strong>Technologies:</strong> {acf.technologies_used}
      </p>

      <p style={{ marginBottom: "0.75rem" }}>
        <strong>Year Completed: </strong> {acf.project_year}
      </p>

      {acf.key_features ? (
        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Key Features:</strong>
          <ul style={{ paddingLeft: "1.2rem", marginTop: "0.3rem" }}>
            {acf.key_features.split("\n").map((feature, index) => (
              <li key={index}>{feature.trim()}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ marginBottom: "0.75rem" }}>
          <strong>Key Features:</strong> —
        </p>
      )}

      <p>
        <Link
          to={`/projects/${id}`}
          style={{
            display: "inline-block",
            padding: "0.4rem 0.8rem",
            backgroundColor: "#28a745",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
          }}
        >
          View Details
        </Link>
      </p>
    </div>
  );
}

export default ProjectCard;
