import React, { useState } from 'react';

function Numbers(props) {

    const [numbers, setNumbers] = useState([
        {
            Image: "src/assets/numbers/icon1.webp",
            Number: 20,
            Description: "Molding Machine"
        },
        {
            Image: "src/assets/numbers/icon2.webp",
            Number: 10,
            Description: "POWDER COATING Tools"
        },
        {
            Image: "src/assets/numbers/icon3.webp",
            Number: 25,
            Description: "PAINTING Tools"
        },
        {
            Image: "src/assets/numbers/icon4.webp",
            Number: 100,
            Description: "TOOL DESIGN"
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