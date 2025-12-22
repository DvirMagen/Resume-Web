import React, {useEffect, useState, useRef} from "react";
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function NavbarA({logo, scrollToSection, onRef}) {

    const navbarRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (sectionName) => {
        setIsMenuOpen(false);
        scrollToSection(sectionName);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 1200) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useEffect(() => {
        // Prevent body scroll when menu is open
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        // Close menu on Escape key press
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    useEffect(() => {
        if (onRef) {
            onRef(navbarRef);
        }
    }, [onRef]);

    return (
        <nav ref={navbarRef} className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Dvir Magen Logo" onClick={() => handleClick('topLine')}/>
            </div>

            <div 
                className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}
            >
                <ul>
                    <li>
                        <p onClick={() => handleClick('about')} aria-label="Navigate to About section">About</p>
                    </li>
                    <li>
                        <p onClick={() => handleClick('experience')} aria-label="Navigate to Experience section">
                            <span className="nav-text-full">Experience</span>
                            <span className="nav-text-short">Exp</span>
                        </p>
                    </li>
                    <li>
                        <p onClick={() => handleClick('education')} aria-label="Navigate to Education section">
                            <span className="nav-text-full">Education</span>
                            <span className="nav-text-short">Edu</span>
                        </p>
                    </li>
                    <li>
                        <p onClick={() => handleClick('projects')} aria-label="Navigate to Projects section">Projects</p>
                    </li>
                    <li>
                        <p onClick={() => handleClick('skills')} aria-label="Navigate to Skills section">Skills</p>
                    </li>
                </ul>
            </div>
            <div className="navbar-actions">
                <ThemeToggle />
                <div 
                    className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
}