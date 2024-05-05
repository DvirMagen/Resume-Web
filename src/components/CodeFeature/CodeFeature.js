import React, { useState } from 'react';
import './CodeFeature.css';

const CodeSnippet = () => {
    const [lookingForDedicatedProgrammer, setLookingForDedicatedProgrammer] = useState(true);

    const toggleValue = () => {
        setLookingForDedicatedProgrammer(!lookingForDedicatedProgrammer);
    };

    const handleSendMessage = () => {
        // Handle sending message logic here
        const email = 'Dvirmagen@gmail.com';
        const subject = 'Regarding Dedicated Programmer';
        const body = 'Dear Dvir, \n\nI am interested in discussing further about the dedicated programmer position. Could you please provide more details? \n\nBest regards,';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="code-snippet">
            <pre style={{ fontSize: 'inherit' }}>
                <code style={{ fontSize: 'inherit' }}>
                    <span className="keyword">boolean</span> <span className="variable">lookingForDedicatedProgrammer</span> = {''}
                    <button
                        className="value-button"
                        onClick={toggleValue}
                        style={{
                            color: lookingForDedicatedProgrammer ? 'green' : 'red',
                            fontSize: '17px',
                            fontWeight: '670',
                            border: '1px solid #ffffff',
                            borderRadius: '5px',
                            padding: '5px'
                        }}
                    >
                        {String(lookingForDedicatedProgrammer)}
                    </button>;
                    <br />
                    <span className="if">if</span> (<span className="variable">lookingForDedicatedProgrammer</span>) {'{'}
                    <br />
                    &nbsp;&nbsp;<button
                        className="send-message-button"
                        onClick={handleSendMessage}
                        disabled={!lookingForDedicatedProgrammer}
                        style={{
                            fontSize: '17px',
                            border: '2px solid #ffffff',
                            color: 'White',
                            borderRadius: '5px',
                            padding: '5px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            margin: '4px 0',
                            backgroundColor: '#2f1d43',
                            cursor: lookingForDedicatedProgrammer ? 'pointer' : 'not-allowed',
                            disabled: lookingForDedicatedProgrammer ? '' : 'disabled'
                        }}>
                        send me message
                    </button>
                    <br />
                    {'}'}
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippet;
