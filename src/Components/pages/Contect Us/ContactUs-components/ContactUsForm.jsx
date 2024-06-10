import { faEnvelope, faUserTie } from '@fortawesome/fontawesome-free-solid';
import { faPenToSquare, faPencil, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ContactUsForm(props) {
    return (
        <div className='contact-us-contect-form-content'>
            <div className="user-action-message">
                <div className='action-message-heading'>Get in Touch…</div>
                <div className='action-message'>Have questions or need assistance? Get in touch with us today! We're here to help and provide the best support.</div>
            </div>
            <div className="user-contect-form">
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <input type='text' placeholder='First Name'></input>
                </div>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faPencil} />
                    </div>
                    <input type='text' placeholder='Last Name'></input>
                </div>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input type='email' placeholder='E-mail'></input>
                </div>
                <div className="input-field">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faSquarePhone} />
                    </div>
                    <input type='tel' placeholder='Phone'></input>
                </div>
                <div className="input-field-textarea">
                    <div className="input-field-icon">
                        <FontAwesomeIcon icon={faPenToSquare} />                        
                    </div>
                    <textarea rows="7" placeholder='Your Message'></textarea>
                </div>
                <div className="submit-button">
                    <button className='common-button'>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;