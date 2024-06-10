import {
	faChevronLeft,
	faChevronRight,
	faPhone,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Slide1 from "../../../../assets/Slider/slide-1.webp";
import Slide2 from "../../../../assets/Slider/slide-2.webp";
import Slide3 from "../../../../assets/Slider/slide-3.webp";
import Slide4 from "../../../../assets/Slider/slide-4.webp";
import Slide5 from "../../../../assets/Slider/slide-5.webp";
import Slide6 from "../../../../assets/Slider/slide-6.webp";
import Slide8 from "../../../../assets/Slider/slide-8.webp";
import Slide10 from "../../../../assets/Slider/slide-10.webp";
import Slide11 from "../../../../assets/Slider/slide-11.webp";
import Slide12 from "../../../../assets/Slider/slide-12.webp";
import Slide13 from "../../../../assets/Slider/slide-13.webp";
import Slide14 from "../../../../assets/Slider/slide-14.webp";
import Slide15 from "../../../../assets/Slider/slide-15.webp";
import Slide17 from "../../../../assets/Slider/slide-17.webp";

function HomeSlider(props) {

    const Slides = [
        {
            Image : Slide1, 
            Description : "Your Path to Industry Success" 
        },
        {
            Image : Slide2, 
            Description : "A Platform for Industry Excellence" 
        },
        {
            Image : Slide3, 
            Description : "Your Gateway to Industry Insights" 
        },
        {
            Image : Slide4, 
            Description : "Visionary independenship" 
        },
        {
            Image : Slide5, 
            Description : "Molding the future" 
        },
        {
            Image : Slide6, 
            Description : "" 
        },
        {
            Image : Slide8, 
            Description : "" 
        },
        {
            Image : Slide10, 
            Description : "" 
        },
        {
            Image : Slide11, 
            Description : "" 
        },
        {
            Image : Slide12, 
            Description : "" 
        },
        {
            Image : Slide13, 
            Description : "" 
        },
        {
            Image : Slide14, 
            Description : "" 
        },
        {
            Image : Slide15, 
            Description : "" 
        },
        {
            Image : Slide17, 
            Description : "" 
        },
    ]

    let [selectedIndex, setSelectedIndex] = useState(0)
    let [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        let newInerval = setInterval(() => { 
            setSelectedIndex((prev) => {
                console.log(prev); 
                if(prev >= Slides.length - 1)
                    return 0;
                return (prev + 1);
            })
        },10000)
        setIntervalId(newInerval)
        return () => {
            clearInterval(intervalId);
        }
    }, [])

	return (
		<div className="slider-container">
			<div className="slider-image">
				<img src={Slides[selectedIndex]?.Image} />
				<div className="slider-text-bg"></div>
				<div className="slider-text">
					<p id="slider-text">{Slides[selectedIndex]?.Description}</p>
				</div>
			</div>
		</div>
	);
}

export default HomeSlider;
