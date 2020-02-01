import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Contacts.css';

const Contacts = ({ phoneNumber, email, github, linkedIn }) => {
  return (
    <ul className={styles.Contacts}>
      <h3>Contact Info</h3>
      <li><span>Phone Number:</span> {phoneNumber}</li>
      <li><span>Email:</span> {email}</li>
      <li><span>Github:</span> {github}</li>
      <li><span>LinkedIn:</span> {linkedIn}</li>
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
