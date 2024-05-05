// import { useRef } from "react";


export default function QuickRoll({scrollToSection}){
    // console.log('QuickRoll scrollToSection:',scrollToSection);
    // const about = useRef(null);
    // const skills = useRef(null);
    // const projects = refs.projectRef;
    // const experience = useRef(null);

    const hadleClick = (sectionName) => {
        console.log('hadleClick:',sectionName);
        scrollToSection(sectionName);
    }
    
    return(
        <section id="quick-links">
            <h2>Quick Links</h2>
            <li onClick={() => scrollToSection('about')}>
                <p>About</p>
            </li>
            <li onClick={() => scrollToSection('skills')}>
                <p>Skills</p>
            </li>
            <li onClick={() => hadleClick('projects')}>
                <p>Projects</p>
            </li>
            <li onClick={() => scrollToSection('experience')}>
                <p>Education & Experience</p>
            </li>
        </section>
    )
}