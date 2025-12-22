import React, { useState } from 'react';
import Section from '../Section/Section';
import { CORE_PROJECTS } from '../../assets/ProjectsData';
import './ProjectsSection.css';

/**
 * Projects section component with improved layout
 */
const ProjectsSection = React.forwardRef((props, ref) => {
    const [selectedProj, setSelectedProj] = useState(null);

    const handleSelect = (projectKey) => {
        setSelectedProj(selectedProj === projectKey ? null : projectKey);
    };

    const projectKeys = ['abs', 'cr', 'nlp', 'weetbis'];
    const projectLabels = {
        'abs': 'Alternative Banking System',
        'cr': 'Cosmic Race',
        'nlp': 'NLP Clustering Project',
        'weetbis': 'Weet&Bis'
    };

    const selectedProject = selectedProj ? CORE_PROJECTS[selectedProj] : null;

    return (
        <Section id="projects" title="Projects" ref={ref}>
            <div className="projects-container">
                <div className="project-buttons">
                    {projectKeys.map((key) => (
                        <button
                            key={key}
                            className={`project-button ${selectedProj === key ? 'active' : ''}`}
                            onClick={() => handleSelect(key)}
                            aria-pressed={selectedProj === key}
                            aria-label={`Select ${projectLabels[key]} project`}
                        >
                            {projectLabels[key]}
                        </button>
                    ))}
                </div>

                {selectedProject ? (
                    <div className="project-details" role="region" aria-label="Project details">
                        <h3 className="project-title">{selectedProject.title}</h3>
                        <p className="project-description">{selectedProject.description}</p>
                        
                        {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                            <div className="project-achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                    {selectedProject.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedProject.stack && selectedProject.stack.length > 0 && (
                            <div className="project-stack">
                                <h4>Tech Stack:</h4>
                                <div className="stack-tags">
                                    {selectedProject.stack.map((tech, index) => (
                                        <span key={index} className="stack-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedProject.url && (
                            <a
                                href={selectedProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`View ${selectedProject.title} on GitHub`}
                            >
                                View on GitHub →
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="project-placeholder">
                        <p>Select a project above to view details</p>
                    </div>
                )}
            </div>
        </Section>
    );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;

