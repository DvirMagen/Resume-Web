import SkillButton from "./SkillButton"
import { forwardRef } from "react";
const ProgLangSkills= forwardRef((props, ref) => {
    return(
        <section id="skills" ref={ref}>
        <h2>Programming Languages:</h2>
            <menu>
                <SkillButton label='C'/>
                <SkillButton label='C++'/>
                <SkillButton label='C#'/>
                <SkillButton label='Java'/>
                <SkillButton label='Python'/>
                <SkillButton label='JavaScript'/>
                <SkillButton label='CSS'/>
                <SkillButton label='HTML'/>
                <SkillButton label='SQL'/>
            </menu>
        </section>
    )
});

export default ProgLangSkills;