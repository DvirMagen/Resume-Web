import React from 'react';
import Section from '../Section/Section';
import TimelineItem from '../TimelineItem/TimelineItem';
import { EXPERIENCE_DATA } from '../../constants';

/**
 * Experience section component
 */
const ExperienceSection = React.forwardRef((props, ref) => {
    return (
        <Section id="experience" title="Experience" ref={ref}>
            {EXPERIENCE_DATA.map((exp, index) => (
                <TimelineItem
                    key={index}
                    title={exp.title}
                    organization={exp.organization}
                    period={exp.period}
                    achievements={exp.achievements}
                    stack={exp.stack}
                    url={exp.url}
                />
            ))}
        </Section>
    );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;