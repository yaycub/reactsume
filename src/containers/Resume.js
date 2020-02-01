import React, { Component } from 'react';
import data from '../resume.json';
import Header from '../components/resume/Header.js';
import PersonalProfile from '../components/resume/PersonalProfile.js';

export default class Resume extends Component{

  render(){
    const { header, personalProfile } = data;

    return (
      <>
        <Header {...header} />
        <section>
          <PersonalProfile {...personalProfile} />
        </section>
      </>
    );
  }
}
