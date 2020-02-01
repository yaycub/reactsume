import React, { Component } from 'react';
import data from '../resume.json';
import Header from '../components/resume/Header.js';
import PersonalProfile from '../components/resume/PersonalProfile.js';
import Contacts from '../components/resume/Contacts.js';
import TechStack from '../components/resume/TechStack.js';
import Projects from '../components/resume/Projects.js';
import Works from '../components/resume/Works.js';
import Schools from '../components/resume/Schools.js';
import styles from './Resume.css';

export default class Resume extends Component{

  render(){
    const { header, contacts, techStack } = data;

    return (
      <article className={styles.Article}>
        <Header {...header} />
        <main className={styles.Main}>
          <section className={styles.sectionOne}>
            <PersonalProfile {...data} />
            <Contacts {...contacts} />
            <TechStack {...techStack} />
          </section>
          <section className={styles.sectionTwo}>
            <Projects {...data} />
            <Works {...data} />
            <Schools {...data} />
          </section>
        </main>
      </article>
    );
  }
}
