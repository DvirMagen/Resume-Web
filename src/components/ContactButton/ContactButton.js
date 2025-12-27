import React, { useState, useEffect } from 'react';
import { sendContact } from '../../utils/sendEmail';
import './ContactButton.css';

/**
 * Reusable contact button + popup form that sends messages via Vercel API.
 * Uses the same configuration/format as the CodeFeature component.
 */
const ContactButton = ({ label = 'Send me message', buttonClassName = '', icon = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [fromName, setFromName] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot field
  const [errors, setErrors] = useState({ fromName: '', messageContent: '' });
  const [touched, setTouched] = useState({ fromName: false, messageContent: false });

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Save current overflow values
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyTop = document.body.style.top;
      const originalBodyWidth = document.body.style.width;
      
      // Prevent scrolling on both body and html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Prevent scroll events
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('scroll', preventScroll, { passive: false });
      
      // Cleanup: restore scrolling when modal closes
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.top = originalBodyTop;
        document.body.style.width = originalBodyWidth;
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        // Remove event listeners
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('scroll', preventScroll);
      };
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setStatus('idle');
    setErrorMsg('');
    // Reset errors and touched when opening
    setErrors({ fromName: '', messageContent: '' });
    setTouched({ fromName: false, messageContent: false });
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatus('idle');
    setErrorMsg('');
    // Reset form state when closing
    setFromName('');
    setMessageContent('');
    setWebsite('');
    setErrors({ fromName: '', messageContent: '' });
    setTouched({ fromName: false, messageContent: false });
  };

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      if (name === 'fromName') return 'Name is required';
      if (name === 'messageContent') return 'Message is required';
    }
    return '';
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    const value = fieldName === 'fromName' ? fromName : messageContent;
    const error = validateField(fieldName, value);
    setErrors({ ...errors, [fieldName]: error });
  };

  const handleChange = (fieldName, value) => {
    if (fieldName === 'fromName') {
      setFromName(value);
    } else if (fieldName === 'messageContent') {
      setMessageContent(value);
    }
    // Clear error when user starts typing
    if (touched[fieldName] && errors[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors({ ...errors, [fieldName]: error });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Mark all fields as touched
    setTouched({ fromName: true, messageContent: true });

    // Validate all fields
    const fromNameError = validateField('fromName', fromName);
    const messageContentError = validateField('messageContent', messageContent);

    setErrors({
      fromName: fromNameError,
      messageContent: messageContentError,
    });

    // If there are errors, don't submit
    if (fromNameError || messageContentError) {
      setStatus('error');
      setErrorMsg('Please fix the errors above before submitting.');
      return;
    }

    // Set sending status
    setStatus('sending');
    setErrorMsg('');

    try {
      const result = await sendContact(fromName, messageContent, website);

      if (result.success) {
        // Show success message
        setStatus('success');
        // Clear form fields
        setFromName('');
        setMessageContent('');
        setWebsite('');
      } else {
        // Show error message
        setStatus('error');
        setErrorMsg(result.error || 'There was a problem sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to send contact:', error);
      setStatus('error');
      setErrorMsg('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassName || 'contact-button'}
        onClick={handleOpen}
      >
        {icon && <span className="contact-button-icon">{icon}</span>}
        <span className="contact-button-label">{label}</span>
      </button>

      {isOpen && (
        <div
          className="message-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby={status === 'success' ? "message-sent-title" : "contact-send-message-title"}
        >
          <div className="message-modal">
            {status === 'success' ? (
              <div className="message-modal-success">
                <div className="message-modal-success-content">
                  <h3 id="message-sent-title" className="message-modal-success-title">
                    Thank you!
                  </h3>
                  <p className="message-modal-success-message">
                    I'll get back to you soon!
                  </p>
                </div>
                <div className="message-modal-actions message-modal-actions-center">
                  <button
                    type="button"
                    className="message-modal-primary"
                    onClick={handleClose}
                  >
                    Got it
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="message-modal-header">
                  <h3 id="contact-send-message-title" className="message-modal-title">
                    Send me a message
                  </h3>
                  <button
                    type="button"
                    className="message-modal-close"
                    onClick={handleClose}
                    aria-label="Close message form"
                    disabled={status === 'sending'}
                  >
                    ×
                  </button>
                </div>
                <form className="message-modal-form" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    style={{ display: 'none' }}
                    autoComplete="off"
                    tabIndex="-1"
                    aria-hidden="true"
                  />
                  <label className="message-modal-label">
                    Name
                    <input
                      type="text"
                      className={`message-modal-input ${touched.fromName && errors.fromName ? 'message-modal-input-error' : ''}`}
                      placeholder="Your name"
                      value={fromName}
                      onChange={(e) => handleChange('fromName', e.target.value)}
                      onBlur={() => handleBlur('fromName')}
                      disabled={status === 'sending'}
                      required
                    />
                    {touched.fromName && errors.fromName && (
                      <span className="message-modal-help-text">{errors.fromName}</span>
                    )}
                  </label>
                  <label className="message-modal-label">
                    Message
                    <textarea
                      className={`message-modal-textarea ${touched.messageContent && errors.messageContent ? 'message-modal-textarea-error' : ''}`}
                      placeholder="Write your message here..."
                      value={messageContent}
                      onChange={(e) => handleChange('messageContent', e.target.value)}
                      onBlur={() => handleBlur('messageContent')}
                      rows={6}
                      disabled={status === 'sending'}
                      required
                    />
                    {touched.messageContent && errors.messageContent && (
                      <span className="message-modal-help-text">{errors.messageContent}</span>
                    )}
                  </label>
                  {status === 'error' && errorMsg && (
                    <div className="message-modal-error" role="alert">
                      {errorMsg}
                    </div>
                  )}
                  <div className="message-modal-actions">
                    <button
                      type="button"
                      className="message-modal-secondary"
                      onClick={handleClose}
                      disabled={status === 'sending'}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="message-modal-primary"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;


