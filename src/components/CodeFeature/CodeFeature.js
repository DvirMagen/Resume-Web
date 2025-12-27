import React, { useState, useEffect } from 'react';
import { sendContact } from '../../utils/sendEmail';
import './CodeFeature.css';
import '../ContactButton/ContactButton.css';

const CodeFeature = () => {
    const [lookingForDedicatedProgrammer, setLookingForDedicatedProgrammer] = useState(true);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');
    const [fromName, setFromName] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [website, setWebsite] = useState(''); // Honeypot field
    const [errors, setErrors] = useState({ fromName: '', messageContent: '' });
    const [touched, setTouched] = useState({ fromName: false, messageContent: false });

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isMessageModalOpen) {
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
    }, [isMessageModalOpen]);

    const toggleValue = () => {
        setLookingForDedicatedProgrammer(!lookingForDedicatedProgrammer);
    };

    const handleOpenMessageModal = () => {
        if (!lookingForDedicatedProgrammer) return;
        setIsMessageModalOpen(true);
        setStatus('idle');
        setErrorMsg('');
        // Reset errors and touched when opening
        setErrors({ fromName: '', messageContent: '' });
        setTouched({ fromName: false, messageContent: false });
    };

    const handleCloseMessageModal = () => {
        setIsMessageModalOpen(false);
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

    const handleSubmitMessage = async (event) => {
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
                // Close modal after a short delay
                setTimeout(() => {
                    setIsMessageModalOpen(false);
                    setStatus('idle');
                }, 2000);
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
        <div className="code-feature-container">
            <pre className="code-block">
                <code>
                    <span className="code-keyword">boolean</span>{' '}
                    <span className="code-variable">lookingForDedicatedProgrammer</span>{' '}
                    ={' '}
                    <button
                        className={`code-value-button ${lookingForDedicatedProgrammer ? 'value-true' : 'value-false'}`}
                        onClick={toggleValue}
                        aria-label={`Toggle lookingForDedicatedProgrammer to ${!lookingForDedicatedProgrammer}`}
                    >
                        {String(lookingForDedicatedProgrammer)}
                    </button>;
                    {'\n'}
                    <span className="code-keyword">if</span> (
                    <span className="code-variable">lookingForDedicatedProgrammer</span>
                    ) {'{'}
                    {'\n'}
                    {'  '}
                    <button
                        className="code-send-button"
                        onClick={handleOpenMessageModal}
                        disabled={!lookingForDedicatedProgrammer}
                        aria-label="Open send message form"
                    >
                        send me message
                    </button>
                    {'\n'}
                    {'}'}
                </code>
            </pre>

            {isMessageModalOpen && (
                <div className="message-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby={status === 'success' ? "message-sent-title" : "send-message-title"}>
                    <div className="message-modal">
                        {status === 'success' ? (
                            <div className="message-modal-success">
                                <div className="message-modal-success-content">
                                    <h3 id="message-sent-title" className="message-modal-success-title">
                                        Thank you!
                                    </h3>
                                    <p className="message-modal-success-message">
                                        Your message has been sent successfully!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="message-modal-header">
                                    <h3 id="send-message-title" className="message-modal-title">
                                        Send me a message
                                    </h3>
                                    <button
                                        type="button"
                                        className="message-modal-close"
                                        onClick={handleCloseMessageModal}
                                        aria-label="Close message form"
                                        disabled={status === 'sending'}
                                    >
                                        ×
                                    </button>
                                </div>
                                <form className="message-modal-form" onSubmit={handleSubmitMessage} noValidate>
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
                                            onClick={handleCloseMessageModal}
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
        </div>
    );
};

export default CodeFeature;