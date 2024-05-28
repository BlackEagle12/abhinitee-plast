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
            Number: 7,
            Description: "Bi-metallic barrel machine"
        },
        {
            Image: "src/assets/numbers/icon3.webp",
            Number: 7,
            Description: "eight zone HRS controller"
        },
        {
            Image: "src/assets/numbers/icon4.webp",
            Number: 100,
            Description: "TOOL Room"
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