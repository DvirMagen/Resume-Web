import { CONNECTION_DATA } from "./ConnectionData";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './Connect.css';

export default function Connect(){
    return(
        <section className="connect-section">
            <h2>Connect</h2>
            <div className="connect-items">
                <a 
                    href={CONNECTION_DATA.github.url} 
                    rel="noreferrer" 
                    target="_blank"
                    className="connect-link"
                    aria-label="GitHub profile"
                >
                    <span className="connect-icon">
                        <GitHub fontSize="small" />
                    </span>
                    <span className="connect-text">{CONNECTION_DATA.github.title}</span>
                </a>
                <a 
                    href={CONNECTION_DATA.linkedin.url} 
                    rel="noreferrer" 
                    target="_blank"
                    className="connect-link"
                    aria-label="LinkedIn profile"
                >
                    <span className="connect-icon">
                        <LinkedIn fontSize="small" />
                    </span>
                    <span className="connect-text">{CONNECTION_DATA.linkedin.title}</span>
                </a>
                <a 
                    href={CONNECTION_DATA.email.url}
                    className="connect-link"
                    aria-label="Email contact"
                >
                    <span className="connect-icon">
                        <Email fontSize="small" />
                    </span>
                    <span className="connect-text">{CONNECTION_DATA.email.title}</span>
                </a>
            </div>
        </section>
    )
}