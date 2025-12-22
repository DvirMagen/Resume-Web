import ExperienceSection from "./ExperienceSection.js";
import { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
    return <ExperienceSection ref={ref} />
});

Experience.displayName = 'Experience';

export default Experience;