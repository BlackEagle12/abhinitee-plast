import React, { useState } from 'react';

function WhatWeDoBoxes(props) {

    const [boxContentList, setBoxContentList] =useState([
        {
            Heading: "Research & ESTIMATE",
            Description: "At our plastic manufacturing facility, we prioritize research and accurate estimation to ensure efficient production processes. Our dedicated team conducts thorough research to identify innovative solutions and optimize manufacturing techniques. With precise estimation methods, we deliver cost-effective solutions tailored to meet the specific needs of our clients, resulting in high-quality products and satisfied customers"
        },
        {
            Heading: "EXECUTE & COMPLETE",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        },
        {
            Heading: "EXCEEDING EXPECTATIONS",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
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