import React from 'react';
import "./Contact.css"


const Contact = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center">Contact us </h1>
            <div class="input-center">
                 <div className=" ">
                 <input className="input-size" placeholder="name" type="text"  />
                 <br />
                <input className="input-size" placeholder="Email" type="email" />
                <br />
                <textarea className="inp" placeholder="Comment" name="" id="" cols="10" rows="5"></textarea>
                <br />
                <input type="submit" value="submit" />
            </div>
            
            </div>

        
        </div>
    );
};

export default Contact;