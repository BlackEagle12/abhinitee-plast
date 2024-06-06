import React, { useState } from 'react';
import BuddyCardOne from '../../../Common/BuddyCardOne';
import amit from '../../../../assets/Buddy/amit sali.webp'
import harish from '../../../../assets/Buddy/Mr.HarishShrirao.webp'
import jitu from '../../../../assets/Buddy/Mr.JitendraIngale.webp'
import nitin from '../../../../assets/Buddy/Mr.NiteenJadhav.webp'
import vidhu from '../../../../assets/Buddy/vidhulaaahir.webp'
import mangu from '../../../../assets/Buddy/Mr.MangeshThorat2.webp'

function Buddies(props) {
    const [buddies, setBuddies] = useState([
        {
            Image : jitu,
            Name: "Jitendra Ingale",
            Designation: "Director (DME,BE Mech, M-CADCAM-CITD )"
        },
        {
            Image : amit,
            Name: "Amit Sali",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : mangu,
            Name: "Mangesh Thorat",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : nitin,
            Name: "Niteen Jadhav",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : harish,
            Name: "Harish Shrirao",
            Designation: "Technical Director (DME,BE Mech)"
        },
        {
            Image : vidhu,
            Name: "Vidula Aher",
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