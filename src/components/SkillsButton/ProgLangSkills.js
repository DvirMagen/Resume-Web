import SkillsSection from "./SkillsSection"
import { forwardRef } from "react";

const ProgLangSkills = forwardRef((props, ref) => {
    return <SkillsSection ref={ref} />
});

ProgLangSkills.displayName = 'ProgLangSkills';

export default ProgLangSkills;