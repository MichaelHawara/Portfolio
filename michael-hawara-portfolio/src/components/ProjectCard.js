import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProjectCard.css";

function ProjectCard(props) {
    const { projTitle, gitLink, vidPath, desc } = props;

    return (
        <>
            <div className="card">
                <div className="proj-title">
                    <Link to={gitLink} target="_blank" className="proj-link">
                        <b>{projTitle}</b>
                    </Link>
                </div>

                <div className="video-container">
                    <video className="project-video" src={vidPath} autoPlay muted loop />
                </div>

                <div className="description">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard