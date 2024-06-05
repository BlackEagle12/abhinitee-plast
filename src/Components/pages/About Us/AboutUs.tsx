import React from 'react';
import SectionHeading from '../../Common/SectionHeading';
import WhatWeDoBoxes from './About-components/WhatWeDoBoxes';
import { Link } from 'react-router-dom';
import WhoWeAre from './About-components/WhoWeAre';
import Footer from '../../Common/Footer';
import BuddyCardTwo from '../../Common/BuddyCardTwo';

import amit from '../../../assets/Buddy/amit sali.webp'
import harish from '../../../assets/Buddy/Mr.HarishShrirao.webp'
import jitu from '../../../assets/Buddy/Mr.JitendraIngale.webp'
import nitin from '../../../assets/Buddy/Mr.NiteenJadhav.webp'
import vidhu from '../../../assets/Buddy/vidhulaaahir.webp'
import mangu from '../../../assets/Buddy/Mr.MangeshThorat2.webp'

function AboutUs(props) {

    const buddies = [
        {
            Name : "Amit sali",
            Image : amit,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
        {
            Name : "harish",
            Image : harish,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
        {
            Name : "Jitendra",
            Image : jitu,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
        {
            Name : "Nitin",
            Image : nitin,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
        {
            Name : "Mangesh sorath",
            Image : mangu,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
        {
            Name : "Vidhula ahir",
            Image : vidhu,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Ha Ha!!"
        },
    ]

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
                    <button className='common-button'> Contact us </button>
                </Link>
            </div>

            <div className="about-us-who-we-are-container">
                <WhoWeAre />
            </div>

            {/* <div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="OUR"
					headingText2="Expertise"
				/>
			</div>

            <div className="about-us-our-flagship-products-container">
                <OurFlagshipProducts />
            </div> */}

            <div className="section-heading-container">
                <SectionHeading
                    backgroundText="Plast"
                    headingText1="OUR"
                    headingText2="Team"
                />
            </div>
            
            <div className="about-us-our-team-container">
                <div className="about-us-our-team-content">
                    {
                        buddies.map(buddy => (
                            <div className='about-us-team-card'>
                                <BuddyCardTwo 
                                    Name = {buddy.Name}
                                    Image = {buddy.Image}
                                    Education = {buddy.Education}
                                    Designation = {buddy.Designation}
                                    Achievements = {buddy.Achievements}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default AboutUs;