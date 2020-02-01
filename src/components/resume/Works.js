import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';

const Works = ({ work }) => {
  const workElements = work.map((item, i) => {
    return (
      <li key={i}>
        <WorkItem {...item} />
      </li>
    );
  });

  return (
    <ul>
      {workElements}
    </ul>
  );
};

Works.propTypes = {
  work: PropTypes.array.isRequired
};

export default Works;
