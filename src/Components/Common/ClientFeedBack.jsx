import React from 'react'

function ClientFeedBack(props) {
    return (
        <div className="client-feedback-content">
            <p className='client-feedback'>
                {props.FeedBack}
            </p>
            <div className="client-pointer"></div>

            <div className="client-info">
                <div className="client-image-parent">
                    <div className="client-image">
                        <img src={props.Image} alt="" />
                    </div>
                </div>
                <div className='client-data'>
                    <div className="client-name">{props.Name}</div>
                    <div className="client-designation">{props.Designation}</div>
                </div>
            </div>
        </div>
    )
}   

export default ClientFeedBack;