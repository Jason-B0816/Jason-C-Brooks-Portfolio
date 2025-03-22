import React from "react";
import Project from "../component/Project";

function Portfolio() {
  const projects = [
    {
      id: 1, // Add a unique ID for each project
      title: "Project # 1 Grocery Tracker--Group",
      deployedLink: "https://johnman0615.github.io/grocery-guardians/",
      githubLink: "https://github.com/johnman0615/grocery-guardians",
      image: "/images/project 1 Grocery Tracker.jpg",
    },
    {
      id: 2,
      title: "Project # 2 My Weather App Genie",
      deployedLink: "https://github.com/Jason-B0816/My-Weather-App-Genie",
      githubLink: "https://github.com/Jason-B0816/My-Weather-App-Genie",
      image: "/images/brian-mcgowan-7kU-BMYARQs-unsplash.jpg",
    },
    {
      id: 3,
      title: "Project # 3 Always Watching Employee Tracker",
      deployedLink: "https://github.com/Jason-B0816/Always-Watching-Employee-Tracker",
      githubLink: "https://github.com/Jason-B0816/Always-Watching-Employee-Tracker",
      image: "/images/growtika-yGQmjh2uOTg-unsplash.jpg",
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