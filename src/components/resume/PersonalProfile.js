import React from 'react';
import PropTypes from 'prop-types';

const PersonalProfile = ({ personalProfile }) => {
  return (
    <p>
      {personalProfile}
    </p>
  );
};

PersonalProfile.propTypes = {
  personalProfile: PropTypes.string.isRequired
};

export default PersonalProfile;
