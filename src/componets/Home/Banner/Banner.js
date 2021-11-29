import React from 'react';
import romzan from "../../../image/romzan.png" 
import "./Banner.css"
import resume from "../../../fills/romzan dawan resume .pdf"
const Banner = () => {
    return (
        <div className="design mb-5">
            <div className=" container  row d-flex align-items-center ">
                <div className="text-design my-5 px-5 col-lg-6 col-sm-12">
                    <h1 className=" font-design text-white">I am<br/> Full Stack<span> Web Developer</span></h1>
                    <br />
                    <p className="text-white">I'm Romzan Dawan , Im from a small city call Native, Since 1years I’m completed as web developer in Company programming hero and Dhaka,Bangladesh. have developed many website and apart from the I have been part of web design project, office work and as learner</p>
                    <br />
                <a href={resume} download className="resume-download" >Download Resume</a>
                </div>
                <div className=" my-5 col-lg-6 col-sm-12">
                    <img className="w-75" src={romzan} alt="romzan"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;