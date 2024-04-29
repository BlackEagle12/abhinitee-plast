import React from 'react';

function SectionHeading(props) {
    return (
        <div className='section-heading-content'>
            <div className="background-text">
                {props.backgroundText}
            </div>
            <div className="heading-text">
                <div className="heading-text-1">{props.headingText1}</div>
                <div className="heading-text-2">{props.headingText2}</div>
            </div>
        </div>
    );
}

export default SectionHeading;