import React, { Component } from 'react';
import data from '../resume.json';
import Header from '../components/resume/Header.js';

export default class Resume extends Component{

  render(){
    const { header } = data;

    return (
      <>
        <Header {...header} />
      </>
    );
  }
}
