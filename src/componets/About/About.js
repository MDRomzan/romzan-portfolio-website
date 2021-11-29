import React from 'react';
import romzan from "../../../src/image/romzan.png"
const About = () => {
    return (
    <div className="row">
    <div className="col-lg-6 col-sm-12">
    <img src={romzan} alt="" />
        </div>
    <div className="text-design px-4 col-lg-6 col-sm-12">
        <button className="btn-design">About me</button>
        <br />
        <p >I am a Web Developer with a passion for fostering learning and analytical thinking. I prepare lesson plans that productively 
        challenge my clients. </p>
        <h3>My Skills</h3>
        <ul className="">
            <li><b>Language:</b> HTML5, CSS3, JavaScript</li>
            <li><b> Framework / Library:</b>Material UI, Bootstrap, React Js, React Router.</li>
            <li><b> Backend:</b> Node Js, Express js</li>
            <li><b>Database:</b>MongoDB, Firebase.</li>
            <li><b>Basic Skills:</b>
    Data Structure, React Native, TypeScript</li>
        </ul>
.
 


    </div>
     </div>
    );
};

export default About;