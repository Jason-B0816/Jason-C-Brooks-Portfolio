import React from "react";
import Project from "../component/Project";

function Portfolio() {
  const projects = [
    {
      id: 1, // Add a unique ID for each project
      title: "Project # 1 Grocery Tracker--Group",
      deployedLink: "https://johnman0615.github.io/grocery-guardians/",
      githubLink: "https://github.com/johnman0615/grocery-guardians",
      image: "/images/jaime-handley-elaijFnaBMg-unsplash.jpg",
    },
    {
      id: 2,
      title: "Project # 2 Pro ReadMe Co-Pilot",
      deployedLink: "https://github.com/Jason-B0816/ProReadMeCopilot",
      githubLink: "https://github.com/Jason-B0816/ProReadMeCopilot",
      image: "/images/vite.svg",
    },
    {
      id: 3,
      title: "Project 3",
      deployedLink: "http://google.com",
      githubLink: "http://github.com",
      image: "/images/vite.svg",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the Portfolio page.</p>
      <p>Here are some of my projects:</p>

      <h2>My Projects</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {projects.map((project) => (
          <Project
            key={project.id} // Use a unique key here
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;