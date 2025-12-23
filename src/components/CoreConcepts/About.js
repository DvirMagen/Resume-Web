import React from 'react';
import Section from '../Section/Section';
import './About.css';

/**
 * About section component with Slash-in information
 */
const About = React.forwardRef((props, ref) => {
    return (
        <Section id="about" title="About" ref={ref}>
            <div className="about-content">
                <p>
                    I hold a Bachelor's degree in Computer Science from the Academic College of Tel Aviv–Yafo.
                </p>
                <p>
                    I currently work as a Full Stack Developer at{' '}
                    <a 
                        href="https://slash-in.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="slash-in-link"
                        aria-label="Visit Slash-in website"
                    >
                        Slash-in
                    </a>, where I design, develop, and maintain scalable, cloud-based web applications.
                </p>
                <p>
                    My work spans the full development lifecycle, from building modern, responsive user interfaces with React, Next.js, and TypeScript 
                    to implementing secure, serverless backend solutions using AWS Amplify.
                </p>
                <p>
                    I focus on creating modular, reusable components and complex form-driven flows while ensuring performance, security, and maintainability.
                </p>
                <p>
                    I am a motivated team player who enjoys solving challenging problems and contributing to impactful products.
                </p>
            </div>
        </Section>
    );
});

About.displayName = 'About';

export default About;