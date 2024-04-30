import React from 'react';
import SectionHeading from '../../Common/SectionHeading';
import WhatWeDoBoxes from './About-components/WhatWeDoBoxes';
import { Link } from 'react-router-dom';
import WhoWeAre from './About-components/WhoWeAre';
import Footer from '../../Common/Footer';
import OurFlagshipProducts from './About-components/OurFlagshipProducts';

function AboutUs(props) {
    return (
        <>
            <div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="What"
					headingText2="WE do"
				/>
			</div>
            <div className="about-what-we-do-container">
                <p className='what-we-do-text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            <div className="about-us-what-we-do-boxes-container">
                <WhatWeDoBoxes />
            </div>

            <div className="about-us-contact-button-container">
                <Link to="/contact">
                    <button className='about-us-contact-button'> Contact us </button>
                </Link>
            </div>

            <div className="about-us-who-we-are-container">
                <WhoWeAre />
            </div>

            <div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="OUR FLAGSHIP"
					headingText2="PRODUCTS"
				/>
			</div>

            <div className="about-us-our-flagship-products-container">
                <OurFlagshipProducts />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default AboutUs;