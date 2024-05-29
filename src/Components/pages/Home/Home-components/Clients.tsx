import React from 'react';
import Motherson from '../../../../assets/Clients/Mother son.webp'
import TheMetalsCompany from '../../../../assets/Clients/TheMetalsCompany.webp'
import UNOMinda from '../../../../assets/Clients/UNO Minda.webp'

function Clients(props) {
    return (
        <div className='home-our-clients-content'>
            <div className="client-image">
                <img src={TheMetalsCompany} alt="" />
            </div>
            <div className="client-image">
                <img src={Motherson} alt="" />
            </div>
            <div className="client-image">
                <img src={UNOMinda} alt="" />
            </div>
        </div>
    );
}

export default Clients;