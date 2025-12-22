import React from 'react';
import './SkillGroup.css';

/**
 * SkillGroup component for displaying grouped skills
 * @param {string} title - Group title (e.g., "Frontend", "Backend")
 * @param {Array<string>} skills - Array of skill names
 */
const SkillGroup = ({ title, skills = [] }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="skill-group">
      <h3 className="skill-group-title">{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;

