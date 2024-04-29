import React, { useState } from 'react';

function Numbers(props) {

    const [numbers, setNumbers] = useState([
        {
            Image: "src/assets/numbers/icon1.webp",
            Number: 250,
            Description: "APARTments"
        },
        {
            Image: "src/assets/numbers/icon2.webp",
            Number: 350,
            Description: "COMMERCIAL PROJECTS"
        },
        {
            Image: "src/assets/numbers/icon3.webp",
            Number: 25,
            Description: "SPORTS COMPLEX"
        },
        {
            Image: "src/assets/numbers/icon4.webp",
            Number: 200,
            Description: "RESORTS & ENCLOSURES"
        }
    ])

    return (
        <div className='home-numbers-content'>

            {numbers.map((number) => (
                <div className="number-card">
                    <img src={number.Image} alt="" />
                    <div className="number">{number.Number}+</div>
                    <div className="description">{number.Description}</div>
                </div>
            ))}
        </div>
    );
}

export default Numbers;