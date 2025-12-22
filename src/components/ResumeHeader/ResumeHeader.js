import React from 'react';
import './ResumeHeader.css';
import { CONNECTION_DATA } from '../Connect/ConnectionData';
import profileImage from '../../assets/profile-page.JPG';

/**
 * ResumeHeader component - Professional header with name, title, contact info
 * @param {string} name - Full name
 * @param {string} title - Job title
 * @param {string} location - Location (optional)
 * @param {string} email - Email address
 * @param {Object} links - Object with github, linkedin, etc.
 */
const ResumeHeader = ({ name, title, location, email, links = {} }) => {
  return (
    <header className="resume-header">
      <div className="resume-header-content">
        <div className="profile-image-container">
          <img 
            src={profileImage} 
            alt={`${name} profile picture`}
            className="profile-image"
          />
        </div>
        <h1 className="resume-name">{name}</h1>
        <p className="resume-title">{title}</p>
        <div className="resume-contact">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="contact-link contact-email" 
              aria-label={`Email ${name}`}
            >
              <img 
                src={CONNECTION_DATA.email.logo} 
                alt="Email icon" 
                className="contact-icon-img"
              />
              <span className="contact-text">{email}</span>
            </a>
          )}
          {links.github && (
            <a 
              href={links.github.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link contact-github"
              aria-label="GitHub profile"
            >
              <img 
                src={links.github.logo} 
                alt="GitHub icon" 
                className="contact-icon-img"
              />
              <span className="contact-text">GitHub</span>
            </a>
          )}
          {links.linkedin && (
            <a 
              href={links.linkedin.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link contact-linkedin"
              aria-label="LinkedIn profile"
            >
              <img 
                src={links.linkedin.logo} 
                alt="LinkedIn icon" 
                className="contact-icon-img"
              />
              <span className="contact-text">LinkedIn</span>
            </a>
          )}
          {location && (
            <span className="contact-link contact-location">
              <span className="contact-icon">📍</span>
              <span className="contact-text">{location}</span>
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;

