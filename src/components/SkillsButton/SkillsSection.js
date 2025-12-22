import React from 'react';
import Section from '../Section/Section';
import SkillGroup from '../SkillGroup/SkillGroup';
import './SkillsSection.css';

/**
 * Skills section component with grouped skills
 */
const SkillsSection = React.forwardRef((props, ref) => {
    const programmingLanguages = [
        'C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'SQL'
    ];

    const frameworks = [
        'React', 'Node.js', 'Express.js', 'Spring Boot', 'Unity', 'PostgreSQL', 
        'MongoDB', 'Postman', 'Flask', 'Django', '.NET'
    ];

    const tools = [
        'Git', 'Azure', 'RESTful APIs', 'Sockets', 'JavaFX', 'HTTP'
    ];

    return (
        <Section id="skills" title="Skills" ref={ref}>
            <SkillGroup title="Programming Languages" skills={programmingLanguages} />
            <SkillGroup title="Frameworks & Libraries" skills={frameworks} />
            <SkillGroup title="Tools & Technologies" skills={tools} />
        </Section>
    );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;

