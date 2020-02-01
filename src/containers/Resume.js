import React, { Component } from 'react';
import data from '../resume.json';
import Header from '../components/resume/Header.js';
import PersonalProfile from '../components/resume/PersonalProfile.js';
import Contacts from '../components/resume/Contacts.js';
import TechStack from '../components/resume/TechStack.js';

export default class Resume extends Component{

  render(){
    const { header, contacts, techStack } = data;

    return (
      <>
        <Header {...header} />
        <section>
          <PersonalProfile {...data} />
          <Contacts {...contacts} />
          <TechStack {...techStack} />
        </section>
      </>
    );
  }
}
