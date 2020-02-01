import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ phoneNumber, email, github, linkedIn }) => {
  return (
    <ul>
      <h3>Contact Info</h3>
      <li>Phone Number: {phoneNumber}</li>
      <li>Email: {email}</li>
      <li>Github: {github}</li>
      <li>LinkedIn: {linkedIn}</li>
    </ul>
  );
};

Contacts.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired
};

export default Contacts;
