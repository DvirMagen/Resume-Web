import React, { useState, useRef, useEffect } from 'react';
import './ResumeHeader.css';
import { CONNECTION_DATA } from '../../constants';
import profileImage from '../../assets/profile-page.JPG';
import ContactButton from '../ContactButton/ContactButton';
import '../ContactButton/ContactButton.css';
import { MessageCircle, Download } from 'lucide-react';

/**
 * ResumeHeader component - Professional header with name, title, contact info
 * @param {string} name - Full name
 * @param {string} title - Job title
 * @param {string} location - Location (optional)
 * @param {string} email - Email address
 * @param {Object} links - Object with github, linkedin, etc.
 */
const ResumeHeader = ({ name, title, location, email, links = {} }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // Ensure image is not draggable via DOM manipulation
    if (imageRef.current) {
      imageRef.current.setAttribute('draggable', 'false');
      imageRef.current.ondragstart = () => false;
      imageRef.current.ondrag = () => false;
      imageRef.current.ondragend = () => false;
    }
  }, [imageLoading]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleMouseDown = (e) => {
    // Prevent image selection
    e.preventDefault();
    return false;
  };

  const handleSelectStart = (e) => {
    e.preventDefault();
    return false;
  };

  const handleEmailClick = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  return (
    <header className="resume-header">
      <div className="resume-header-content">
        <div 
          className="profile-image-container"
          onDragStart={(e) => e.preventDefault()}
          onDrag={(e) => e.preventDefault()}
          onDragEnd={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          {imageLoading && (
            <div className="image-loader">
              <div className="loader-spinner"></div>
            </div>
          )}
          <img 
            ref={imageRef}
            src={profileImage} 
            alt={name}
            className={`profile-image ${imageLoading ? 'image-loading' : ''}`}
            draggable={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onContextMenu={handleContextMenu}
            onMouseDown={handleMouseDown}
            onSelectStart={handleSelectStart}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        <h1 className="resume-name">{name}</h1>
        <p className="resume-title">{title}</p>
        <div className="resume-contact">
          <ContactButton
            label="Send me message"
            buttonClassName="contact-link contact-message"
            icon={<MessageCircle size={20} />}
          />
          {email && (
            <div className="email-button-wrapper">
              <button
                onClick={handleEmailClick}
                className="contact-link contact-email"
                aria-label={`Copy email ${email}`}
                type="button"
              >
                <img 
                  src={CONNECTION_DATA.email.logo} 
                  alt="Email icon" 
                  className="contact-icon-img"
                />
                <span className="contact-text">{email}</span>
              </button>
              {emailCopied && <span className="copy-tooltip">Copied!</span>}
            </div>
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
          <a
            href={CONNECTION_DATA.cv.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-cv"
            aria-label="View CV"
          >
            <span className="contact-button-icon">
              <Download size={20} />
            </span>
            <span className="contact-text">{CONNECTION_DATA.cv.title}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;