import React, { useState } from 'react';

function OurFlagshipProducts(props) {
    let [productList, setProductList] = useState([
        {
            Image:"src/assets/product-images/plastic-pipes.webp",
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image:"src/assets/product-images/plastic-pipes.webp",
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image:"src/assets/product-images/plastic-pipes.webp",
            Name: "plastic pipes",
            Title: "Vestibulum in enim ac augue"
        },
        {
            Image:"src/assets/product-images/plastic-pipes.webp",
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
                    <div className="product-info">
                        <div className="product-name">{product.Name}</div>
                        <div className="product-title">{product.Title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OurFlagshipProducts;