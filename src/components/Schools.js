import React from 'react';
import PropTypes from 'prop-types';

const Schools = ({ school }) => {
  const schoolElements = school.map((item, i) => {
    return (
      <li key={i}>
        <h4>{item.name}</h4>
        <p>{item.cert}</p>
      </li>
    );
  });

  return (
    <ul>
      <h3>Academic Background</h3>
      {schoolElements}
    </ul>
  );
};

Schools.propTypes = {
  school: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cert: PropTypes.string.isRequired
  })).isRequired
};

export default Schools;
