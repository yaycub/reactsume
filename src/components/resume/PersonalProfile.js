import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/PersonalProfile.css';

const PersonalProfile = ({ personalProfile }) => {
  return (
    <div className={styles.Profile}>
      <h3>Summary</h3>
      <p>
        {personalProfile}
      </p>
    </div>
  );
};

PersonalProfile.propTypes = {
  personalProfile: PropTypes.string.isRequired
};

export default PersonalProfile;
