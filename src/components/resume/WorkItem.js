import React from 'react';
import PropTypes from 'prop-types';

const WorkItem = ({ business, titleWithDates, didWhat }) => {
  const didWhatEls = didWhat.map((item, i) => {
    return (
      <li key={i}>
        {item}
      </li>
    );
  });

  return (
    <section>
      <h4>{business}</h4>
      <p>{titleWithDates}</p>
      <ul>
        {didWhatEls}
      </ul>
    </section>
  );
};

WorkItem.propTypes = {
  business: PropTypes.string.isRequired,
  titleWithDates: PropTypes.string.isRequired,
  didWhat: PropTypes.array.isRequired
};

export default WorkItem;
