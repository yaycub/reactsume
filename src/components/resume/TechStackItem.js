import React from 'react';
import PropTypes from 'prop-types';

const TechStackItem = ({ item }) => {
  return (
    <p>
      {item}
    </p>
  );
};

TechStackItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default TechStackItem;
