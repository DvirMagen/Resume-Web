import React from 'react';
import './TimelineItem.css';

/**
 * TimelineItem component for displaying experience/education entries
 * @param {string} title - Job title or degree name
 * @param {string} organization - Company or institution name
 * @param {string} period - Date range (e.g., "2020 - 2024")
 * @param {string|React.ReactNode} description - Description or list of achievements
 * @param {Array<string>} achievements - Array of achievement bullet points
 * @param {Array<string>} stack - Array of technology/skill tags
 * @param {string} url - Website URL for the organization
 */
const TimelineItem = ({ title, organization, period, description, achievements = [], stack = [], url }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-header">
        <div className="timeline-title-row">
          <h3 className="timeline-title">{title}</h3>
          {period && <span className="timeline-period">{period}</span>}
        </div>
        {organization && (
          <p className="timeline-organization">{organization}</p>
        )}
      </div>
      {description && (
        <div className="timeline-description">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}
      {achievements && achievements.length > 0 && (
        <ul className="timeline-achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
      {stack && stack.length > 0 && (
        <div className="timeline-stack">
          <h4 className="timeline-stack-title">Tech Stack:</h4>
          <div className="timeline-stack-tags">
            {stack.map((tech, index) => (
              <span key={index} className="timeline-stack-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="timeline-link"
          aria-label={`Visit ${organization} website`}
        >
          Visit {organization} →
        </a>
      )}
    </div>
  );
};

export default TimelineItem;

