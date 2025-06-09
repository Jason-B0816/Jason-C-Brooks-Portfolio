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
      deployedLink:
        "https://github.com/Jason-B0816/Always-Watching-Employee-Tracker",
      githubLink:
        "https://github.com/Jason-B0816/Always-Watching-Employee-Tracker",
      image: "/images/growtika-yGQmjh2uOTg-unsplash.jpg",
    },
    {
      id: 4,
      title: "Project # 4 My Portfolio",
      deployedLink: "https://github.com/Jason-B0816/Jason-C-Brooks-Portfolio",
      githubLink: "https://github.com/Jason-B0816/Jason-C-Brooks-Portfolio",
      image: "/images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg",
    },
    {
      id: 5,
      title: "Project # 5 Toe Mater Builder of Vehicles",
      deployedLink:
        "https://github.com/Jason-B0816/Toe-Mater-Builder-of-Vehicles",
      githubLink:
        "https://github.com/Jason-B0816/Toe-Mater-Builder-of-Vehicles",
      image: "/images/giulia-lorenzon-frM8c6-639s-unsplash.jpg",
    },
    {
      id: 6,
      title: "Project # 6 Pro README Generator CoPilot",
      deployedLink: "https://github.com/Jason-B0816/ProReadMeCopilot",
      githubLink: "https://github.com/Jason-B0816/ProReadMeCopilot",
      image: "/images/nhn-a8BO-4VLau0-unsplash.jpg",
    },
    {
      id: 7,
      title: "Project # 7 (my favorite) Transcarrency",
      deployedLink: "https://transcarrency.onrender.com/",
      githubLink: "https://github.com/Jason-B0816/Transcarrency",
      image: "/images/tclogo_transparent-BVG4_Uij.jpg",
    },
    {
      id: 8,
      title: "Project # 8 Social Network API",
      image: "/images/Screenshot Social Network API.png",
      deployedLink: "https://app.screencastify.com/v3/watch/tpdmLMDqL1ZGbmDsVcps",
      githubLink: "https://github.com/Jason-B0816/Social-Network-API"
    },
    {
      id: 9,
      title: "Project # 9 Open Your Mind Book Search Engine",
      image: "/images/Open Your Mind Book Search Engine.png",
      deployedLink: "https://open-your-mind-book-search-engine.onrender.com/",
      githubLink: "https://github.com/Jason-B0816/Open-your-Mind-Book-Search-Engine"
    },
    {
      id: 10,
      title: "Project # 10 Everybody Loves Testing Tech Quiz Test Suite",
      image: "/images/Screenshot Everybody Loves Testing.png",
      deployedLink: "https://drive.google.com/file/d/1M6KGDzplpJprbHdckdnRcfIbsfPBKFpU/view?usp=sharing",
      githubLink: "https://github.com/Jason-B0816/Everybody-Loves-Testing-Tech-Quiz-Test-Suite"
    },
    {
      id: 11,
      title: "Project # 11 The Tricky GitHub Actions CI-CD Setup",
      image: "/images/Screenshot Github Actions.png",
      deployedLink: "https://the-tricky-github-actions-ci-cd-setup.onrender.com/",
      githubLink: "https://github.com/Jason-B0816/The-Tricky-GitHub-Actions-CI-CD-Setup"
    }
    ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the Portfolio page.</p>
      <p>Here are some of my projects:</p>

      <h2>My Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
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
