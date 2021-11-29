import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import bicycle from "../../../src/image/Bicycle.png"
import travel from "../../../src/image/rd travel.png"
import book from "../../../src/image/book.png"
import ema from "../../../src/image/ema-jhon.png"
import show from "../../../src/image/nike show.png"
import panda from "../../../src/image/back.png"
const projects=[
    {
       "id":"01",
       "img":bicycle,
       "projectname":"Bicycle Ride",
       "technology":"React.js,React-router-dom,AuthContext,Material UI,JavaScript,Firebase,Heroku,others Technology",
        "description": "A bicycle (or bike) is a small, human powered land vehicle with a seat, two wheels, two pedals, and a metal chain connected to cogs on the pedals and rear wheel. ... Riding bicycles, which is also called cycling, is an important way to travel in several parts of the worldbicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider's feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. The rider sits on a saddle and steers by leaning and turning handlebars that are attached to the for."
    },
    {
        "id": "02",
        "img": travel,
        "projectname": "RD Travel Agency",
        "technology": "React.js,React-router-dom,React Bootstrap,JavaScript,Firebase,Heroku,others Technology",
        "description": "A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination Online ticketing solutions for your employees and contracted suppliers, optimized for increasing margins and employee satisfactionInterline platform to enable flight crew commuting and contract management of reciprocal agreements. ."
    },
    {
        "id": "03",
        "img": book,
        "projectname": "Online Book Sales",
        "technology": "HTML5,CSS3,,others Technology",
        "description": "An effective website—one that consistently produces measurable results—is often the online front door of an institution. It's usually the first point of encounter for patients, prospective patients, families and friends.Important features of a Best Bookcare website are accessibility, engaging content and imagery, a curated user experience, easy navigation, and useful website features.There are a lot of examples that we like, but some of our favorite Best Bookcare websites are Centura Best Book with its clean design and simple navigation and Rest Assured with its fantastic website accessibility."
    },
    {
        "id": "04",
        "img": ema,
        "projectname": "Ema-jhon",
        "technology": "React.js,React-router-dom,JavaScript,Firebase,React hook form others Technology",
        "description": "A product description is a form of marketing copy used to describe and explain the benefits of your product.In other words, it provides all the information and details of your product on your ecommerce site.These product details can be one sentence, a short paragraph or bulleted.Product description not showing on my products only the product features are visible.Have you checked the Product Description field is completed, Manage Inventory > Edit Product > Description Tab - The Field should show the product description you have entered You can find the full list of Pandda e-commance's product description rules in Seller Central. There is also a word count for the product description, which is ."
    },
    {
        "id": "05",
        "img":show,
        "projectname": "Nike Show",
        "technology": "HTML,CSS,Netlify Deploy,others Technology",
        "description": "A product description is a form of marketing copy used to describe and explain the benefits of your product.In other words, it provides all the information and details of your product on your ecommerce site.These product details can be one sentence, a short paragraph or bulleted.Product description not showing on my products only the product features are visible.Have you checked the Product Description field is completed, Manage  show the product description you have entered You can find the full list of Pandda e-commance's product description rules in Seller Central. There is also a word count for the product description, which is ."
    },
    {
        "id": "06",
        "img": panda,
        "projectname": "Panda E-commace ",
        "technology": "Html,Css,Netlify,others Technology",
        "description": " Panda e-commance is a form of marketing copy used to describe and explain the benefits of your product.In other words, it provides all the information and details of your product on your ecommerce site.These product details can be one sentence, a short paragraph or bulleted.Product description not showing on my products only the product features are visible.Have you checked the Product Description field is completed, Manage  show the product description you have entered You can find the full list of Pandda e-commance's product description rules in Seller Central. There is also a word count for the product description, which is."
    }
]


const Projects = () => {
    
    return (
        <div>
            <div className="row my-5 mx-3">
                {
                    projects.map(project=><Project  project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;