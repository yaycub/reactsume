import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ title, tech = '', description }) => {
  return (
    <section>
      <h4>{title}</h4>
      <p>{tech}</p>
      <p>{description}</p>
    </section>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default ProjectItem;
