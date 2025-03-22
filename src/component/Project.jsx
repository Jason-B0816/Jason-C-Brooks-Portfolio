import React from "react";
import PropTypes from "prop-types";

const projects = [
  {
    id: 1,
    title: "Project 1",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "/image2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image3.jpg",
  },
];

function Project({ title, deployedLink, githubLink, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        View Live Link
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View Github Repo
      </a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};



export default Project;