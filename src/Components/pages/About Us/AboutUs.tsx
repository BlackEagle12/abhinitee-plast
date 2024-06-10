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
            Name : "Jitendra",
            Image : jitu,
            Education : "B.E. Mechanical, D.M.E.",
            Designation : "Director",
            Achievements : "Having sound knowledge inSales & Marketing of Dies like LPDC, HPDC, GDC, Injection Molds, Sand Casting Foundry toolings..etc"
        },
        {
            Name : "Amit sali",
            Image : amit,
            Education : "B.tech",
            Designation : "Director",
            Achievements : "Updating soon.."
        },
        {
            Name : "Mangesh sorath",
            Image : mangu,
            Education : "D.M.E.",
            Designation : "Director",
            Achievements : "Having sound knowledge in Design & Manufacturing of Dies like LPDC, HPDC, GDC, Injection Molds, Sand Casting Foundry toolings..etc"
        },
        {
            Name : "Nitin",
            Image : nitin,
            Education : "B.E. Mechanical, D.M.E., M-CAD/CAM (CITD HYD)",
            Designation : "Founder member",
            Achievements : "Having sound knowledge in Design & Manufacturing of Dies like LPDC, HPDC, GDC, Injection Molds, Sand Casting Foundry toolings..etc"
        },
        {
            Name : "harish",
            Image : harish,
            Education : "B.tech",
            Designation : "D.M.E.",
            Achievements : "Having sound knowledge in Manufacturing of Dies like LPDC, HPDC, GDC,Injection Molds, Sand Casting Foundry toolings..etc"
        },        
        {
            Name : "Vidhula ahir",
            Image : vidhu,
            Education : "B.E. Mechanical, D.M.E.",
            Designation : "Director",
            Achievements : "Having sound knowledge in Design & Manufacturing of Dies like LPDC, HPDC, GDC, Injection Molds, Sand Casting Foundry toolings..etc"
        },
    ]

    return (
        <>
            <div className="section-heading-container">
                <SectionHeading
                    backgroundText="Plast"
                    headingText1="What we"
                    headingText2="Stands for"
                />
            </div>
            <div className="about-what-we-do-container">
                <p className='what-we-do-text'>
                Hey there! Just wanted to remind you about the importance of our top-notch quality management system. It's all about ensuring that our processes and procedures are always improving to guarantee the best product quality for our awesome customers. We're dedicated to maintaining the highest standards, especially for our friends in the aviation industry. Plus, we're totally used to having our customers drop by for regular check-ins.
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