import React from 'react';
import Section from '../Section/Section';
import SkillGroup from '../SkillGroup/SkillGroup';
import './SkillsSection.css';

/**
 * Skills section component with grouped skills
 */
const SkillsSection = React.forwardRef((props, ref) => {
    const programmingLanguages = [
        'C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'SQL', 'Bash / Shell'
    ];

    const frameworks = [
        'React', 'MUI', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Unity', 'PostgreSQL', 
        'MongoDB', 'DynamoDB', 'Postman', 'Flask', 'Django', '.NET', 'AWS Amplify', 'FastAPI'
    ];

    const tools = [
        'Git', 'GitHub', 'Azure', 'REST APIs', 'Sockets', 'JavaFX', 'HTTP', 
        'CI/CD', 'JSON', 'Cursor', 'Vibe Coding', 'Object-Oriented Programming (OOP)', 
        'Asynchronous Programming', 'VS Code', 'PyCharm', 'IntelliJ', 'Claude', 'Docker', 
        'Linux', 'Data Structures', 'Algorithms', 'Cloud Fundamentals', 'DevOps Principles', 
        'System Design Basics', 'Networking Basics', 'Testing & Automation', 'Debugging & Troubleshooting'
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

