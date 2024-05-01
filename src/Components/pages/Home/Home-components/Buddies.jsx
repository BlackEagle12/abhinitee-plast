import React, { useState } from 'react';
import BuddyCardOne from '../../../Common/BuddyCardOne';

function Buddies(props) {
    const [buddies, setBuddies] = useState([
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Jitendra Ingale",
            Designation: "CEO & Director (DME,BE Mech, M-CADCAM-CITD )"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Amit Sali",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Mangesh Thorat",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Niteen Jadhav",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Vidula Aher",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : "src/assets/Buddy/buddy.webp",
            Name: "Harish Shrirao",
            Designation: "Technical Director (DME,BE Mech)"
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