import { faEnvelope, faMobile, faPhone, faPhoneVolume } from '@fortawesome/fontawesome-free-solid';
import { faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function ContactUsContactCards(props) {

    const [contactMethodList, setContactMethodList] = useState([
        {
            Icon: faMobile,
            Heading: "TALK TO US",
            text1: "+91 96578 10049",
            text2: "+91 95031 86868"
        },
        {
            Icon: faEnvelope,
            Heading: "MAIL US",
            text1: "marketing@abhiniteeplast.com",
            text2: "abhiniteeplastIndia@gmail.com"
        },
        {
            Icon: faLocationDot,
            Heading: "OUR LOCATION",
            text1: "Plot No - PAP B-16, M.I.D.C. Chakan, Opp Mahindra & Mahindra Gate No -10, Pune-411501, Maharastra,India",
            text2: ""
        }
    ])

    return (
        <div className='contact-us-contect-cards-content'>
            {contactMethodList.map((contactMethod) => (
                <div className='contect-card'>
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={contactMethod.Icon} />
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-heading">
                            {contactMethod.Heading}
                        </div>
                        <div className="contact-info-text">{contactMethod.text1}</div>
                        <div className="contact-info-text">{contactMethod.text2}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactUsContactCards;