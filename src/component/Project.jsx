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
  {id: 4,
    title: "Project 4",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image4.jpg",
  },
  {id: 5,
    title: "Project 5",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image5.jpg",
  },
  {id: 6,
    title: "Project 6",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image6.jpg",
  },
  {id: 7,
    title: "Project 7",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image7.jpg",
  },
  {id: 8,
    title: "Project 8",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image8.jpg",
  },  
  {id: 9,
    title: "Project 9",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image9.jpg",
  },
  {id: 10,
    title: "Project 10",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image10.jpg",
  },
  {id: 11,
    title: "Project 11",
    deployedLink: "http://example.com",
    githubLink: "http://github.com",
    image: "http://example.com/image11.jpg",
  }
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