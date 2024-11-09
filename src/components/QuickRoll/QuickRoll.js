
export default function QuickRoll({scrollToSection}){

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