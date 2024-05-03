import React, { useState } from 'react';
import BuddyCardOne from '../../../Common/BuddyCardOne';
import buddy from '../../../../assets/Buddy/buddy.webp'

function Buddies(props) {
    const [buddies, setBuddies] = useState([
        {
            Image : buddy,
            Name: "Jitendra Ingale",
            Designation: "CEO & Director (DME,BE Mech, M-CADCAM-CITD )"
        },
        {
            Image : buddy,
            Name: "Amit Sali",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : buddy,
            Name: "Mangesh Thorat",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : buddy,
            Name: "Niteen Jadhav",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : buddy,
            Name: "Vidula Aher",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : buddy,
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