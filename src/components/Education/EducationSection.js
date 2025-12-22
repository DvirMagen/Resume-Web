import React from 'react';
import Section from '../Section/Section';
import TimelineItem from '../TimelineItem/TimelineItem';
import { EDUCATION_DATA } from './EducationData';

/**
 * Education section component - styled identically to Experience section
 */
const EducationSection = React.forwardRef((props, ref) => {
    return (
        <Section id="education" title="Education" ref={ref}>
            {EDUCATION_DATA.map((edu, index) => (
                <TimelineItem
                    key={index}
                    title={edu.title}
                    organization={edu.academy}
                    period={edu.years}
                />
            ))}
        </Section>
    );
});

EducationSection.displayName = 'EducationSection';

export default EducationSection;

