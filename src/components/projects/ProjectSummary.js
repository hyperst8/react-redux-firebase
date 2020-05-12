import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-dept-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Batman</p>
                <p className="grey-text">11th may, 6.30 pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary