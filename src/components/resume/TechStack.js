import React from 'react';
import PropTypes from 'prop-types';
import TechStackItem from './TechStackItem';
import styles from './styles/TechStack.css';

const TechStack = ({ languages, frontEnd, backEnd, dataBases }) => {
  const languageEls = techStackElCreator(languages);
  const frontEndEls = techStackElCreator(frontEnd);
  const backEndEls = techStackElCreator(backEnd);
  const dataBasesEls = techStackElCreator(dataBases);

  return (
    <ul className={styles.TechStack}>
      <h3>Tech Stack</h3>
      <h4>Languages:</h4>
      {languageEls}
      <h4>Front-end:</h4>
      {frontEndEls}
      <h4>Back-end:</h4>
      {backEndEls}
      <h4>Databases:</h4>
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
