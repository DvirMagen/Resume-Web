import React, {useEffect, useState, useRef} from "react";
import './Navbar.css';

export default function Navbar_A({logo, scrollToSection, onRef}) {

    const navbarRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hadleClick = (sectionName) => {
        console.log('hadleClick:',sectionName);
        setIsMenuOpen(false);
        scrollToSection(sectionName);
        
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useEffect(() => {
        const handleScroll = () => {
            
            if(isMenuOpen) {
                document.body.style.overflow = 'hidden';
            }
            else {
                document.body.style.overflow = 'visible';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.body.style.overflow = 'visible';
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    useEffect(() => onRef(navbarRef), [onRef, navbarRef]);

    return (
        <nav ref={navbarRef} className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" onClick={() => hadleClick('topLine')}/>
            </div>

            <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li >
                        <p onClick={() => hadleClick('about')}>About</p>
                    </li>
                    <li>
                        <p onClick={() => hadleClick('skills')}>Skills</p>
                    </li>
                    <li>
                        <p onClick={() => hadleClick('projects')}>Projects</p>
                    </li>
                    <li>
                        <p onClick={() => hadleClick('experience')}> Education & Experience</p>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}