import React, { useState } from 'react';
import icon1 from '../../../../assets/numbers/icon1.webp'
import icon2 from '../../../../assets/numbers/icon2.webp'
import icon3 from '../../../../assets/numbers/icon3.webp'
import icon4 from '../../../../assets/numbers/icon4.webp'

function Numbers(props) {

    const [numbers, setNumbers] = useState([
        {
            Image: icon1,
            Number: 20,
            Description: "Molding Machine"
        },
        {
            Image: icon2,
            Number: 10,
            Description: "POWDER COATING Tools"
        },
        {
            Image: icon3,
            Number: 25,
            Description: "PAINTING Tools"
        },
        {
            Image: icon4,
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