import React from 'react';
const services=[
    {
        id:"01",
        img:"https://www.nicepng.com/png/detail/229-2296288_web-design-denver-website-design-icon-png.png",
        servicename:"Web Design",
        description:"As a web designer, you'll plan, create and code web pages, using both technical and non-technical skills to produce websites that fit your customers' requirements. Being involved in the technical and graphical aspects of pages, you'll determine not only the look of the website but how it works as well.",
        rathing:"4.5"
    },
    {
        id:"02",
        img: "https://nugortech.com/wp-content/uploads/2020/04/Web-Development.jpg",
        servicename: "Web Development",
        description: " web development, you'll plan, create and code web pages, using both technical and non-technical skills to produce websites that fit your customers' requirements. Being involved in the technical and graphical aspects of pages, you'll determine not only the look of the website but how it works as well.",
        rathing: "5"
    },
    {
        id:"03",
        img: "https://previews.123rf.com/images/yapanda/yapanda1603/yapanda160300030/53561719-programming-code-web-software-developer-programmer-and-monitors-with-computer-languages-.jpg",
        servicename: "Software Development",
        description: "Software, you'll plan, create and code web pages, using both technical and non-technical skills to produce websites that fit your customers' requirements. Being involved in the technical and graphical aspects of pages, you'll determine not only the look of the website but how it works as well.",
        rathing: "4"
    }
]
const Services = () => {
    return (
        <div className="container">
            <div className="my-5 row">
                {
                    services.map(service =><div className="col-lg-4 col-sm-12" >
                        <img className="im-size" src={service?.img} alt="" />
                        <h3>{service?.servicename}</h3>
                        <h4>Rating:{service?.rathing}</h4>
                        <p>{service?.description.slice(0,150)}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;