import React, { useRef } from 'react';
import './App.css';
import CodeFeature from'./components/CodeFeature/CodeFeature.js';
import resumeLogo from "./assets/Dvir_Magen_Resume_Logo.png";
import Navbar_A from './components/Navbar/Navbar_A.js';
import './components/ClickableButton/ClickableButton.css';
import FrameWorksSkills from './components/SkillsButton/FrameWorksSkills.js';
import ProgLangSkills from './components/SkillsButton/ProgLangSkills.js';
import Experience from './components/Education/Experience.js';
import Projects from './components/ClickableButton/Projects.js';
import CoreConcepts from './components/CoreConcepts/CoreConceptss.js';
import Edu from './components/Education/Edu.js';
import Header from './components/Header/Header.js'; // Import the Header component
import SeperateLine from './components/SeperateLine.js';
import Links from './components/Links/Links.js';
import Rights from './components/Rights/Rights.js';

// 'cr'  => Cosmic Race
// 'abs' => Alternative Banking System
// 'nlp' => NLP-clustering-project

function App() {

  const sectionRefs = {
    topLine: useRef(null),
    navbar: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null)
  }

  const scrollToSection = (elementRef) => {
    console.log('scrollToSection:',elementRef);
    const navbarHeight = sectionRefs.navbar.current.offsetHeight;
    window.scrollTo({
        top: sectionRefs[elementRef].current.offsetTop - navbarHeight - 10,
        behavior: "smooth"
    });
  }

  const handleNavbarRef = (navbarRef) => {
    sectionRefs.navbar.current = navbarRef.current;
  }

  return (
    <div className="App">
      <Navbar_A onRef={handleNavbarRef} logo= {resumeLogo} scrollToSection={scrollToSection}/>
      <Header ref={sectionRefs.topLine} />
      <main>
        <CodeFeature />
        <CoreConcepts  ref={sectionRefs.about}/>
        <ProgLangSkills ref={sectionRefs.skills} />
        <FrameWorksSkills />
        <Projects ref={sectionRefs.projects}/>
        <Edu ref={sectionRefs.experience}/>
        <Experience />
        <SeperateLine />
        <Links scrollToSection={scrollToSection}/>
        <SeperateLine />
        <Rights />
        </main>
    </div>
  );
}

export default App;
