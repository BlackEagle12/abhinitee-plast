import React, { useState } from 'react'
import ClientFeedBack from '../../../Common/ClientFeedBack';
import { faArrowLeftLong, faArrowRightLong, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ClientFeedBackCorisal() {

    const [index, setCurrentIndex] = useState(0);

    const [feedbacks, setfeedbacks] = useState([
        {
            FeedBack: '"From a service standpoint I cannot find fault with Abhinitee Plast. They are just very good and very thorough. Our parts are all to spec and there’s nothing to do or worry about."',
            Image: "https://cdn.create.vista.com/api/media/small/336192706/stock-photo-close-front-portrait-beautiful-young-woman-curly-hair-smiling-gray",
            Name: "Gaspare Bianco",
            Designation: "Purchasing Manager" 
        },
        {
            FeedBack: '"Great Company to work with."',
            Image: "https://cdn.create.vista.com/api/media/small/336192706/stock-photo-close-front-portrait-beautiful-young-woman-curly-hair-smiling-gray",
            Name: "Dan Kenner",
            Designation: "Owner" 
        },
        {
            FeedBack: '"I find Abhinitee Plast to be a very reliable, professional and customer focused company to work with. The limited number of issues has been dealt with swiftly."',
            Image: "https://cdn.create.vista.com/api/media/small/336192706/stock-photo-close-front-portrait-beautiful-young-woman-curly-hair-smiling-gray",
            Name: "Mark Corsino",
            Designation: "Purchasing Manager" 
        },
        {
            FeedBack: '"Seamless experience working with Abhinitee Plast. We appreciate that you work with us on the development process, and of course the day to day business always works as expected."',
            Image: "https://cdn.create.vista.com/api/media/small/336192706/stock-photo-close-front-portrait-beautiful-young-woman-curly-hair-smiling-gray",
            Name: "Brett Maxwell",
            Designation: "Purchasing Analyst" 
        },
        {
            FeedBack: '"It goes a long way when you call up and they are always so willing to help. We really do appreciate their loyalty and the excellent customer service."',
            Image: "https://cdn.create.vista.com/api/media/small/336192706/stock-photo-close-front-portrait-beautiful-young-woman-curly-hair-smiling-gray",
            Name: "Bob Evenson",
            Designation: "Sales & Purchasing Director" 
        }
    ])

    const handelLeftClick = () => {
        if(index === 0)
            setCurrentIndex(3)
        else
            setCurrentIndex(index - 1)
    }

    const handelRightClick = () => {
        if(index === 3)
            setCurrentIndex(0)
        else
            setCurrentIndex(index + 1)
    }
    
    const styles = { 
        transform: `translateX(${index*(-100)}%)` 
    };

  return (
    <div className="client-feedback-corisal-content">
        {feedbacks.map((fb) => (
            <div className="client-feedback-container" style={styles}>
                <ClientFeedBack FeedBack={fb.FeedBack} Image={fb.Image} Name={fb.Name} Designation={fb.Designation}  />
            </div>
        ))}

        <div className='slide-arrow'>

            <div className="left-arrow">
                <FontAwesomeIcon icon={faArrowLeftLong} onClick={handelLeftClick}/>
            </div>
            <div className="right-arrow">
                <FontAwesomeIcon icon={faArrowRightLong} onClick={handelRightClick}/>
            </div>
        </div>
    </div>
  )
}

export default ClientFeedBackCorisal;