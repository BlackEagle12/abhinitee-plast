import React from 'react';
import ContactUsContactCards from './ContactUs-components/ContactUsContactCards';
import ContactUsForm from './ContactUs-components/ContactUsForm';
import Footer from '../../Common/Footer';

function ContactUs(props) {
    return (
        <>
            <div className='contact-us-map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340439!3d18.524870610788835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714438245200!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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