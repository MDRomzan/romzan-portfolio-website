import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';




const Projects = () => {
    const [projects,setProjects]=useState([]);
    console.log(projects);
    useEffect(()=>{
        fetch("./projects.json")
        .then(res=>res.json())
        .then(data =>setProjects(data))
    },[])
    
    return (
        <div>
            <div className="row my-5 mx-3">
                {
                    projects.map(project=><Project key={project.id} project={project}>

                    </Project>)
                }
            </div>
        </div>
    );
};

export default Projects;