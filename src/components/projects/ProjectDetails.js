import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima aliquam corrupti explicabo reprehenderit ex voluptatibus eligendi est ipsum assumenda autem inventore ab non quis at consequatur dolore, sint doloremque.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Batman</div>
                    <div>11th may, 6.30 pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
