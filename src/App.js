import React, { useRef, useCallback } from 'react';
import './App.css';
import resumeLogo from "./assets/Dvir_Magen_Resume_Logo.png";
import Navbar_A from './components/Navbar/Navbar_A.js';
import ProgLangSkills from './components/SkillsButton/ProgLangSkills.js';
import Experience from './components/Education/Experience.js';
import Projects from './components/ClickableButton/Projects.js';
import CoreConcepts from './components/CoreConcepts/CoreConceptss.js';
import Edu from './components/Education/Edu.js';
import Header from './components/Header/Header.js'; // Import the Header component
import CodeFeature from './components/CodeFeature/CodeFeature.js';
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
    education: useRef(null),
    experience: useRef(null)
  }

  const scrollToSection = (elementRef) => {
    // Validate elementRef exists in sectionRefs
    if (!elementRef || !sectionRefs[elementRef]) {
      console.warn(`Invalid section reference: ${elementRef}`);
      return;
    }

    // Check if refs are available
    const targetRef = sectionRefs[elementRef].current;
    const navbarRef = sectionRefs.navbar.current;

    if (!targetRef) {
      console.warn(`Section ref not available: ${elementRef}`);
      return;
    }

    const navbarHeight = navbarRef ? navbarRef.offsetHeight : 0;
    const targetTop = targetRef.offsetTop;

    window.scrollTo({
      top: targetTop - navbarHeight - 10,
      behavior: "smooth"
    });
  }

  const handleNavbarRef = useCallback((navbarRef) => {
    sectionRefs.navbar.current = navbarRef.current;
  }, []);

  return (
    <div className="App">
      <Navbar_A onRef={handleNavbarRef} logo={resumeLogo} scrollToSection={scrollToSection}/>
      <Header ref={sectionRefs.topLine} />
      <main>
        <CoreConcepts ref={sectionRefs.about}/>
        <Experience ref={sectionRefs.experience}/>
        <Edu ref={sectionRefs.education}/>
        <Projects ref={sectionRefs.projects}/>
        <ProgLangSkills ref={sectionRefs.skills} />
        <CodeFeature />
        <SeperateLine />
        <Links scrollToSection={scrollToSection}/>
        <SeperateLine />
        <Rights />
      </main>
    </div>
  );
}

export default App;
