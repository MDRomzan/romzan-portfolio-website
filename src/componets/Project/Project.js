import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Project.css"
const Project = ({project}) => {
    
    const {id,projectname,img,description}=project;
    const history=useNavigate();
    const handleDetails=(id)=>{
        const uri=`/details/${id}`
        history(uri);
    }
    return (
        <div className="shadow-lg col-lg-4">
            <img className="im-size" src={img} alt="" srcset="" />
            <h2>{projectname}</h2>
            <p className="">{description.slice(0,150)}</p>
           
            <button onClick={()=>handleDetails(id)} className="btn-design">Details</button>
           

        </div>
    );
};

export default Project;