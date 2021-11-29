import React from 'react';

const Project = ({project}) => {
    const {projectname,img,description}=project;
    return (
        <div className="col-lg-4">
            <img className="w-100" src={img} alt="" srcset="" />
            <h2>{projectname}</h2>
            <p className="">{description.slice(0,150)}</p>
            <button className="btn-design">Details</button>
        </div>
    );
};

export default Project;