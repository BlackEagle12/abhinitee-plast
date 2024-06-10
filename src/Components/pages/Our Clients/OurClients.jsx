import React from 'react';
import Clients from '../Home/Home-components/Clients';
import Footer from '../../Common/Footer';

function OurClients(props) {
    return (
        <>
            <div className="home-our-clients-container" style={{height : 'calc(100vh - 100px)'}}>
                <Clients />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </>
        
        
    );
}

export default OurClients;