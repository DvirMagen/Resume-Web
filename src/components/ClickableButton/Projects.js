import ProjectsSection from "./ProjectsSection.js"
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
    return <ProjectsSection ref={ref} />
});

export default Projects;