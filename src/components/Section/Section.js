import React from 'react';
import './Section.css';

/**
 * Reusable Section component for consistent resume sections
 * @param {string} id - Section ID for navigation
 * @param {string} title - Section title
 * @param {React.ReactNode} children - Section content
 * @param {React.Ref} ref - Forward ref for scroll navigation
 */
const Section = React.forwardRef(({ id, title, children, className = '' }, ref) => {
  return (
    <section id={id} ref={ref} className={`resume-section ${className}`.trim()}>
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;