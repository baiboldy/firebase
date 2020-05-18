import React from 'react';

const ProjectDetails = (props) => {
    const {
        id
    } = props.match.params;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            Project Title - {id}
                        </span>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ea et ab adipisci rem commodi nesciunt accusantium, amet consequatur maiores non assumenda, magni, impedit quos sint nostrum quidem omnis consequuntur.
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Disa</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;