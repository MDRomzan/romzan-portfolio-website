import React from 'react';
import romzan from "../../../src/image/romzan.png"
import"./About.css";
const About = () => {
    return (
    <div className="row d-flex align-items-center">
    <div className="px-4 col-lg-4 col-sm-12">
        <button className="btn-design">About me</button>
        <br />
        <p >I am a Web Developer with a passion for fostering learning and analytical thinking. I prepare lesson plans that productively 
        challenge my clients. </p>
    <img src={romzan} alt="" />
        </div>
    <div className="text-design px-4 col-lg-8 col-sm-12">
       
        <div className="skill">
        <h1 className="text-center">My Skills</h1>
        <li><h3>HTML</h3>
            <span className="bar"><span className="html"></span></span>
        </li>
        <li><h3>CSS</h3>
            <span className="bar"><span className="css"></span></span>
        </li>
        <li><h3>Bootstrap</h3>
            <span className="bar"><span className="bootstrap"></span></span>
        </li>
        <li><h3>Tailwind</h3>
            <span className="bar"><span className="tailwind"></span></span>
        </li>
        <li><h3>React.js</h3>
            <span className="bar"><span className="react"></span></span>
        </li>
        <li><h3>Metarial UI</h3>
            <span className="bar"><span className="metarial"></span></span>
        </li>
        <li><h3>Node.js</h3>
            <span className="bar"><span className="node"></span></span>
        </li>
        <li><h3>JavaScript</h3>
            <span className="bar"><span className="javascript"></span></span>
        </li>
    </div>
</div>
</div>
    );
};

export default About;
{/* <ul className="">
            <li><b>Language:</b> HTML5, CSS3, JavaScript</li>
            <li><b> Framework / Library:</b>Material UI, Bootstrap, React Js, React Router.</li>
            <li><b> Backend:</b> Node Js, Express js</li>
            <li><b>Database:</b>MongoDB, Firebase.</li>
            <li><b>Basic Skills:</b>
    Data Structure, React Native, TypeScript</li>
        </ul> */}