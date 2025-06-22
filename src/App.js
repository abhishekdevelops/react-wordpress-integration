import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import BlogsPage from "./pages/BlogsPage";
import BlogDetail from "./pages/BlogDetail";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <nav
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          padding: "1rem",
          background: "#f5f5f5",
        }}
      >
        <Link to="/" style={{ marginRight: "1rem", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/projects"
          style={{ marginRight: "1rem", textDecoration: "none" }}
        >
          Projects
        </Link>
        <Link
          to="/blogs"
          style={{ marginRight: "1rem", textDecoration: "none" }}
        >
          Blogs
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
export default App;
