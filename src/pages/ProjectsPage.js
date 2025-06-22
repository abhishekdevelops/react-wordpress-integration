import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cms.digitalwebtrends.in/wp-json/wp/v2/projects?_embed")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projects Fetched:", data);
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Featured Projects
      </h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) =>
          project && project.acf && project.title ? (
            <ProjectCard key={project.id} project={project} />
          ) : null
        )
      )}
    </div>
  );
}

export default ProjectsPage;
