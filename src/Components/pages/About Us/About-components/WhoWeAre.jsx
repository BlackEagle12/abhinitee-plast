import React from 'react';
import SectionHeading from '../../../Common/SectionHeading';
import WhoWeAreImage from '../../../../assets/machine/WhoWeAre.webp';
import logo from '../../../../assets/logo/abhinidhi-logo.webp';

function WhoWeAre(props) {
    const style = {fontSize: "20px"}
    return (
        <div className='about-us-who-we-are-content'>
            <div className="who-we-are-image">
                <img src={WhoWeAreImage} alt="" />
            </div>
            <div className="who-we-are">
                <div className="who-we-are-heading">
                    <div className="section-heading-container">
                        <SectionHeading style={style}
                            backgroundText=""
                            headingText1="WHO"
                            headingText2="WE ARE"
                        />
                    </div>
                </div>
                <div className="who-we-are-description">
                    <p>We specialize in manufacturing, supplying, and exporting automotive molded products and components from our facility located in Pune, Maharashtra, India. Our products, including automotive sensors, lighting, electronics, switches, and TPE rubber replacements, find applications in various automotive industries. With a total of nine reliable injection molding machines, we process technical and high-performance materials to ensure exceptional quality. At our facility, we prioritize in-house toolmaking, believing that the quality of an injection-molded part is directly linked to the quality of its tooling.</p>
                </div>
                <div className="abhinitee-plast-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;