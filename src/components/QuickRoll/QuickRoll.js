import './QuickRoll.css';
import { User, Zap, Rocket, GraduationCap, Briefcase } from 'lucide-react';

export default function QuickRoll({scrollToSection}){

    const handleClick = (sectionName) => {
        scrollToSection(sectionName);
    }
    
    return(
        <section className="quick-links-section">
            <h2>Quick Links</h2>
            <ul className="quick-links-list">
                <li className="quick-link-item">
                    <button 
                        className="quick-link-button"
                        onClick={() => handleClick('about')}
                        aria-label="Navigate to About section"
                    >
                        <span className="quick-link-icon"><User size={24} /></span>
                        <span className="quick-link-text">About</span>
                    </button>
                </li>
                <li className="quick-link-item">
                    <button 
                        className="quick-link-button"
                        onClick={() => handleClick('experience')}
                        aria-label="Navigate to Experience section"
                    >
                        <span className="quick-link-icon"><Briefcase size={24} /></span>
                        <span className="quick-link-text">Experience</span>
                    </button>
                </li>
                <li className="quick-link-item">
                    <button 
                        className="quick-link-button"
                        onClick={() => handleClick('education')}
                        aria-label="Navigate to Education section"
                    >
                        <span className="quick-link-icon"><GraduationCap size={24} /></span>
                        <span className="quick-link-text">Education</span>
                    </button>
                </li>
                <li className="quick-link-item">
                    <button 
                        className="quick-link-button"
                        onClick={() => handleClick('projects')}
                        aria-label="Navigate to Projects section"
                    >
                        <span className="quick-link-icon"><Rocket size={24} /></span>
                        <span className="quick-link-text">Projects</span>
                    </button>
                </li>
                <li className="quick-link-item">
                    <button 
                        className="quick-link-button"
                        onClick={() => handleClick('skills')}
                        aria-label="Navigate to Skills section"
                    >
                        <span className="quick-link-icon"><Zap size={24} /></span>
                        <span className="quick-link-text">Skills</span>
                    </button>
                </li>
            </ul>
        </section>
    )
}