import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const Projects = ({ projects }) => {
  const projectsElement = projects.map((project, i) => {
    return (
      <li key={i}>
        <ProjectItem {...project} />
      </li>
    );
  });

  return (
    <ul>
      {projectsElement}
    </ul>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    tech: PropTypes.string,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Projects;
