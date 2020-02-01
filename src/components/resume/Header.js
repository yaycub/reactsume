import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, title }) => {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
