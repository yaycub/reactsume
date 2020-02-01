import React from 'react';
import PropTypes from 'prop-types';

const PersonalProfile = ({ personalProfile }) => {
  return (
    <>
      <h3>Summary</h3>
      <p>
        {personalProfile}
      </p>
    </>
  );
};

PersonalProfile.propTypes = {
  personalProfile: PropTypes.string.isRequired
};

export default PersonalProfile;
