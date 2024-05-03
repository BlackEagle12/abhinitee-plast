import React, { useState } from 'react';

function WhatWeDoBoxes(props) {

    const [boxContentList, setBoxContentList] =useState([
        {
            Heading: "Research & ESTIMATE",
            Description: "At our plastic manufacturing facility, we focus on thorough research and precise estimation. By staying informed about industry trends, we provide accurate project estimates, optimizing resource allocation and delivering tailored solutions for our clients"
        },
        {
            Heading: "EXECUTE & COMPLETE",
            Description: "We excel in executing and completing plastic manufacturing projects efficiently and on schedule. Our dedicated team ensures that every aspect of the project is handled with precision and attention to detail, resulting in high-quality outcomes and satisfied clients."
        },
        {
            Heading: "EXCEEDING EXPECTATIONS",
            Description: "We consistently exceed expectations in plastic manufacturing, delivering superior results with meticulous attention to detail and a focus on quality and service."
        }
    ])
    return (
        <div className='about-us-what-we-do-boxes-content'>
            {boxContentList.map((boxContent) => (
                <div className="what-we-do-box">
                    <div className="what-we-do-box-heading">{boxContent.Heading}</div>
                    <p className="what-we-do-box-description">{boxContent.Description}</p>
                </div>
            ))}
        </div>
    );
}

export default WhatWeDoBoxes;