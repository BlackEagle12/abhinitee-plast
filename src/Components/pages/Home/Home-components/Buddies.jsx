import React, { useState } from 'react';
import BuddyCardOne from '../../../Common/BuddyCardOne';

function Buddies(props) {
    const [buddies, setBuddies] = useState([
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Mitchell Tucker",
            Designation: "Director"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Stuart Wise",
            Designation: "Production Manager"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Nicholas Hanson",
            Designation: "Chief Engineer"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Melvin Jensen",
            Designation: "Chief Engineer"
        }
    ])

    return (

        <div className='buddy-team-cards-content'>
            {buddies.map((buddy) => (
                <div className='buddy-card-one-container'>
                    <BuddyCardOne Image={buddy.Image} Name={buddy.Name} Designation={buddy.Designation}/>
                </div>
            ))}
        </div>
    );
}

export default Buddies;