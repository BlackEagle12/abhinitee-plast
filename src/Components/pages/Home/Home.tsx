import React, { useState } from 'react';
import HomeSlider from './Home-components/HomeSlider';
import SectionHeading from '../../Common/SectionHeading';
import ProductCardOne from '../../Common/ProductCardOne';
import Numbers from './Home-components/Numbers';
import QualityInovation from './Home-components/QualityInovation';

function Home(props) {

    let [homeProducts, setHomeProducts] = useState([
        {
            Name : "name-1",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            Name : "name-2",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            Name : "name-1",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            Name : "name-2",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            Name : "name-1",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            Name : "name-2",
            Image: "src/assets/product-images/plastic-pipes.webp",
            Description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
    ])
    return (
        <>
            <div className='home-slider-container'>
                <HomeSlider />
            </div>
            <div className='section-heading-container'>
                <SectionHeading backgroundText="Plast" headingText1="our" headingText2="products" />
            </div>
            <div className='our-products-container'>
                <div className="our-products-content">
                    {homeProducts && homeProducts.map((product, index) => (
                        <div className='our-products-item'>
                            <ProductCardOne Name={product.Name} Image={product.Image} Description={product.Description} Index={index+1}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-numbers-container">
                <Numbers />
            </div>
            <div className='section-heading-container'>
                <SectionHeading backgroundText="Plast" headingText1="CONTEMPORARY AND" headingText2="STYLISH" />
            </div>
            <div className="home-quality-inovation-container">
                <QualityInovation />
            </div>
            <div className="industry-skills-container">
                
            </div>
        </>
    );
}

export default Home;