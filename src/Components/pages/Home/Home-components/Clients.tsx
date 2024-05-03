import React from 'react';
import client1 from '../../../../assets/Clients/client-1.webp'
import client2 from '../../../../assets/Clients/client-2.webp'
import client3 from '../../../../assets/Clients/client-3.webp'
import client4 from '../../../../assets/Clients/client-4.webp'
import client5 from '../../../../assets/Clients/client-5.webp'

function Clients(props) {
    return (
        <div className='home-our-clients-content'>
            <div className="client-image">
                <img src={client1} alt="" />
            </div>
            <div className="client-image">
                <img src={client2} alt="" />
            </div>
            <div className="client-image">
                <img src={client3} alt="" />
            </div>
            <div className="client-image">
                <img src={client4} alt="" />
            </div>
            <div className="client-image">
                <img src={client5} alt="" />
            </div>
        </div>
    );
}

export default Clients;