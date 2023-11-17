import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, text, color }) => (
  <div className={`project-card ${color}`}>
    <div className="text-container">
      <h2 className="project-title">{title}</h2>
      <hr></hr>
      <p className="project-text">{text}</p>
    </div>
    <img className="project-image" src={image} alt={title} />
  </div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ProjectCard;
