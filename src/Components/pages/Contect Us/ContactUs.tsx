import React from 'react';
import ContactUsContactCards from './ContactUs-components/ContactUsContactCards';
import ContactUsForm from './ContactUs-components/ContactUsForm';
import Footer from '../../Common/Footer';

function ContactUs(props) {
    return (
        <>
            <div className='contact-us-map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.6060430817215!2d73.80818007465695!3d18.7264477628542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70028427eed%3A0x51e5db003870356b!2sAbhinitee%20plast%20india%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717924921391!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="contact-us-contect-cards-container">
                <ContactUsContactCards />
            </div>

            <div className="contact-us-contect-form-container">
                <ContactUsForm />
            </div>
        
            <div className="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default ContactUs;