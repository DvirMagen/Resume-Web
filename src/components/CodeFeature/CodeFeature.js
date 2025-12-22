import React, { useState } from 'react';
import './CodeFeature.css';

const CodeFeature = () => {
    const [lookingForDedicatedProgrammer, setLookingForDedicatedProgrammer] = useState(true);

    const toggleValue = () => {
        setLookingForDedicatedProgrammer(!lookingForDedicatedProgrammer);
    };

    const handleSendMessage = () => {
        const email = 'Dvirmagen@gmail.com';
        const subject = 'Regarding Dedicated Programmer';
        const body = 'Dear Dvir, \n\nI am interested in discussing further about the dedicated programmer position. Could you please provide more details? \n\nBest regards,';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
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
                        onClick={handleSendMessage}
                        disabled={!lookingForDedicatedProgrammer}
                        aria-label="Send email message"
                    >
                        send me message
                    </button>
                    {'\n'}
                    {'}'}
                </code>
            </pre>
        </div>
    );
};

export default CodeFeature;
