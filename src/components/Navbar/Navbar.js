export default function Navbar({logo, scrollToSection}){

    const hadleClick = (sectionName) => {
        console.log('hadleClick:',sectionName);
        scrollToSection(sectionName);
    }
    
    return(
        <section id="navbar">
            <ul>
                <li >
                    <img src={logo} onClick={() => scrollToSection('topLine')}/>
                </li>
                <li >
                    <p onClick={() => scrollToSection('about')}>About</p>
                </li>
                <li>
                    <p onClick={() => scrollToSection('skills')}>Skills</p>
                </li>
                <li>
                    <p onClick={() => hadleClick('projects')}>Projects</p>
                </li>
                <li>
                    <p onClick={() => scrollToSection('experience')}>Experience & Education</p>
                </li>
            </ul>
        </section>
    )
}