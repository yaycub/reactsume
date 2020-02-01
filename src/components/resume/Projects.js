import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import styles from './styles/Projects.css';

const Projects = ({ projects }) => {
  const projectsElement = projects.map((project, i) => {
    return (
      <li key={i}>
        <ProjectItem {...project} />
      </li>
    );
  });

  return (
    <ul className={styles.Projects}>
      <h3>
      Projects
      </h3>
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
