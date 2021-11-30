import React from 'react';
import { useParams } from 'react-router-dom';
import useProtfolio from '../../Hooks/useProtfolio';

const Details = () => {
    const {detailsId}=useParams();
    const {projects}=useProtfolio();
    //console.log(projects);
    const matchProject = projects.find((project) => project.id ===(detailsId));
    console.log(matchProject);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <img src={matchProject?.img} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2>{matchProject?.projectname}</h2>
                    <h5><b>Technology:</b> {matchProject?.technology}</h5>
                    <p>{matchProject?.description}</p>
                </div>
            </div>
           
            
        </div>
    );
};

export default Details;