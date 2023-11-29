import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, text }) => (
  <div className="project-card">
    <div className="text-container">
      <h2 className="project-title">{title}</h2>
      <hr className="project-divider" />
      <p className="project-text">{text}</p>
    </div>
    <img className="project-image" src={image} alt={title} />
  </div>
);

export default ProjectCard;