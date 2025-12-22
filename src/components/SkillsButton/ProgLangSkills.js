import SkillsSection from "./SkillsSection"
import { forwardRef } from "react";

const ProgLangSkills = forwardRef((props, ref) => {
    return <SkillsSection ref={ref} />
});

export default ProgLangSkills;