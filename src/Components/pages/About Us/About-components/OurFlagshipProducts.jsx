import React, { useState } from 'react';
import Export1 from '../../../../assets/product-images/Expert-1.webp'
import Export2 from '../../../../assets/product-images/Expert-2.webp'
import Export3 from '../../../../assets/product-images/Expert-3.webp'
import Export4 from '../../../../assets/product-images/Expert-4.webp'
import Export5 from '../../../../assets/product-images/Expert-5.webp'
import Export6 from '../../../../assets/product-images/Expert-6.webp'
import Export7 from '../../../../assets/product-images/Expert-7.webp'
import Export8 from '../../../../assets/product-images/Expert-8.webp'

function OurFlagshipProducts(props) {
    let [productList, setProductList] = useState([
        {
            Image: Export1,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export2,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export3,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export4,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export5,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export6,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image: Export7,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },{
            Image: Export8,
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        }
    ])
    return (
        <div className='about-us-our-flagship-products-content'>
            {productList.map((product) => (
                <div className='product-card'>
                    <div className="product-image">
                        <img src={product.Image} alt="" />
                    </div>
                    {/* <div className="product-info">
                        <div className="product-name">{product.Name}</div>
                        <div className="product-title">{product.Title}</div>
                    </div> */}
                </div>
            ))}
        </div>
    );
}

export default OurFlagshipProducts;