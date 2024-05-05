import ClickableButton from "./ClickableButton.js"
import { CORE_PROJECTS } from "../../assets/ProjectsData";
import { forwardRef, useState } from "react";

const Projects = forwardRef((props, ref) => {
    const [ selectedProj, setSelectedProj ] = useState();
    function handleSelect(selectedButton){
        // selectedButton => 'abs', 'cr', 'nlp' 
        setSelectedProj(selectedButton);
        console.log('Button clicked ', selectedButton);
    }

    let projectContent = <p id='project-content'> Please selecct a project </p>;
    if (selectedProj){
        projectContent = <div id='project-content'>
        <h2>{CORE_PROJECTS[selectedProj].title}</h2>
        <p>{CORE_PROJECTS[selectedProj].description}</p>
        <a href={CORE_PROJECTS[selectedProj].url} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
        </div>;
    }
    return(
        <section ref={ref} id="clickable">
            <h1>Projects</h1>
            <menu>
                <ClickableButton isSelected={selectedProj === 'abs'} 
                label='Alternative Banking System' 
                onSelect={() => handleSelect('abs')} />
                <ClickableButton isSelected={selectedProj === 'cr'} 
                label='Cosmic Race' 
                onSelect={() => handleSelect('cr')}/>
                <ClickableButton isSelected={selectedProj === 'nlp'} 
                label='NLP-clustering-project' 
                onSelect={() => handleSelect('nlp')}/>
            </menu>
            {projectContent}
        </section>

    )
});

export default Projects;