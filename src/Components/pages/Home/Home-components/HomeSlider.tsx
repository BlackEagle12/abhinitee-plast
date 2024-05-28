import { faChevronLeft, faChevronRight, faPhone } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Slide1 from '../../../../assets/Slider/slide-1.webp'
import Slide2 from '../../../../assets/Slider/slide-2.webp'


function HomeSlider(props) {
    let [index, setIndex] = useState(0);
    
    useEffect(() => {
        if(index == 2){
            setIndex(0)
        }
        if(index == -1){
            setIndex(1)
        }

        let homeSlider = document.querySelector<HTMLElement>('.home-slider')
        homeSlider!.style.transform = 'translatex(' + index*-100 + 'vw)';
        
        if(index==0){
            //display slider one content
            let sliderOneContenct = document.querySelector<HTMLElement>('.home-slider-slide-one-content-hide');
            sliderOneContenct?.classList.remove('home-slider-slide-one-content-hide');
            sliderOneContenct?.classList.add('home-slider-slide-one-content');

            let sliderTwoContenct = document.querySelector<HTMLElement>('.home-slider-slide-two-content');
            sliderTwoContenct?.classList.remove('home-slider-slide-two-content');
            sliderTwoContenct?.classList.add('home-slider-slide-two-content-hide');

        }
        else if(index==1){
            let sliderOneContenct = document.querySelector<HTMLElement>('.home-slider-slide-one-content');
            sliderOneContenct?.classList.remove('home-slider-slide-one-content');
            sliderOneContenct?.classList.add('home-slider-slide-one-content-hide');
            
            let slidertwoContenct = document.querySelector<HTMLElement>('.home-slider-slide-two-content-hide');
            slidertwoContenct?.classList.remove('home-slider-slide-two-content-hide');
            slidertwoContenct?.classList.add('home-slider-slide-two-content');
        }

    },[index])

    const changeSlide = (num) => {        
        setIndex((currentValue) => currentValue + num);            
    }

    return (
        <div className='home-slider-content'>
            <div className='icon left-arrow'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => changeSlide(-1)}/>
            </div>
            <div className='home-slider'>
                <div className='overlay'></div> 
                <div className='slide-one'>
                    <div className='home-slider-slide-content'>
                        <div className='home-slider-slide-one-content'>
                            <div className='home-slider-slide-one-content-heading'> Serving The Quality Products </div>
                            <div className='home-slider-slide-one-content-sub-heading'> call Now</div>
                            <div className='home-slider-slide-one-content-contact'> 
                                <div className='home-slider-slide-one-content-contact-phone-icon'>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className='home-slider-slide-one-content-contact-phone-no'>
                                    +91 7874804852
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Slide1}></img>
                </div>

                <div className='slide-two'>
                <div className='home-slider-slide-content'>
                        <div className='home-slider-slide-two-content'>
                            <div className='home-slider-slide-two-content-heading'> Call Now</div>
                            <div className='home-slider-slide-two-content-sub-heading'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, vel! </div>
                        </div>
                    </div>
                    <img src={Slide2}></img>
                </div>
            </div>
            <div className='icon right-arrow'>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => changeSlide(1)} />
            </div>
        </div>
    );
}

export default HomeSlider;