import React from 'react';
import PropTypes from 'prop-types';
import TechStackItem from './TechStackItem';

const TechStack = ({ languages, frontEnd, backEnd, dataBases }) => {
  const languageEls = techStackElCreator(languages);
  const frontEndEls = techStackElCreator(frontEnd);
  const backEndEls = techStackElCreator(backEnd);
  const dataBasesEls = techStackElCreator(dataBases);

  return (
    <ul>
      Languages:
      {languageEls}
      Front-end:
      {frontEndEls}
      Back-end:
      {backEndEls}
      Databases:
      {dataBasesEls}
    </ul>
  );
};

TechStack.propTypes = {
  languages: PropTypes.array.isRequired,
  frontEnd: PropTypes.array.isRequired,
  backEnd: PropTypes.array.isRequired,
  dataBases: PropTypes.array.isRequired
};

function techStackElCreator(arr){
  return arr.map((item, i) => {
    return (
      <li key={`${i}+${item}`}>
        <TechStackItem item={item} />
      </li>
    );
  });
}

export default TechStack;
