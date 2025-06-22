import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cms.digitalwebtrends.in/wp-json/wp/v2/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Project Details:", data);
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading project details...</p>;
  if (!project || !project.acf || !project.title)
    return <p>Project not found.</p>;

  const { title, acf } = project;

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />

      <p style={{ marginBottom: "0.75rem" }}>{acf.project_description}</p>

      {acf.project_image && (
        <img
          src={acf.project_image}
          alt={title.rendered}
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
      )}

      <p>
        <strong>Technologies:</strong> {acf.technologies_used}
      </p>

      <p>
        <strong>Year Completed:</strong> {acf.project_year}
      </p>

      {acf.key_features ? (
        <div style={{ marginTop: "1rem" }}>
          <strong>Key Features:</strong>
          <ul>
            {acf.key_features.split("\n").map((feature, idx) => (
              <li key={idx}>{feature.trim()}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>
          <strong>Key Features:</strong> —
        </p>
      )}

      <p style={{ marginTop: "2rem", textAlign: "center" }}>
        <a
          href="/projects"
          style={{
            color: "#007BFF",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "0.95rem",
            padding: "0.5rem 1rem",
            border: "1px solid #007BFF",
            borderRadius: "4px",
            transition: "all 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#007BFF"),
            (e.target.style.color = "#fff")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "transparent"),
            (e.target.style.color = "#007BFF")
          )}
        >
          ← Back to Projects
        </a>
      </p>
    </div>
  );
}

export default ProjectDetailsPage;
