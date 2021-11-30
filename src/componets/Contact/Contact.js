import React from 'react';
import "./Contact.css"
import emailjs from 'emailjs-com';



const Contact = () => {
   
    const sendEmail=(e)=>{
         e.preventDefault();

    emailjs.sendForm('service_4z6pmm3', 'template_z7r43ol', e.target, 'user_oqGUxdWwHgc8kJRAyb2S2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Send Message Successfully");
      e.target.reset();
    }
    return (
        <div>       
        <div className="container my-5">
            
            
            <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
                
                <div className="px-4 py-4 my-4 shadow-lg col-lg-8">
                <div className="col-8 form-group pt-2">
                    <input type="text"className="form-control"placeholder="name" name="name" required />
                </div>
                
                <div className="col-8 form-group pt-2 ">
                    <input type="email"className="form-control"placeholder="your email" name="name" required />
                </div>
                <div className="col-8 form-group pt-2 ">
                    <input type="text"className="form-control"placeholder="Subject" name="subject" required />
                </div>
                <div className="col-8 form-group pt-2 ">
                    <textarea className="form-control" name="message"placeholder="Your Message" id="" cols="30" required rows="5"></textarea>
                </div>
                <div className="col-8 form-group pt-2 ">
                    <input type="submit"className="input-btn" value="Send" />
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h3>This comming soon</h3>
            </div>
                
            </div>
            </form>

        
        </div>
    </div>
    );
};

export default Contact;