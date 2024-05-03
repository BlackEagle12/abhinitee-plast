import React from 'react';
import SectionHeading from '../../Common/SectionHeading';
import OurProducts from './Product-Components/OurProducts';
import Footer from '../../Common/Footer';

function Product(props) {
    return (
        <>
            <div className="products-heading-container">
                <div className="section-heading-container">
                    <SectionHeading
                        backgroundText="Plast"
                        headingText1="Our"
                        headingText2="Products"
                    />
                </div>

                <div className="products-our-product-container">
                    <p className='what-we-do-text'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

            <div className='products-product-list-container'>
                <OurProducts />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default Product;