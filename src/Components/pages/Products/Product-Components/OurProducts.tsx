import React from 'react';
import ProductCardTwo from '../../../Common/ProductCardTwo';
// import p from '../../../../assets/product-images/'
import product1 from '../../../../assets/product-images/ODH BKT.webp'
import product2 from '../../../../assets/product-images/IDH-Housing.webp'
import product3 from '../../../../assets/product-images/ODH-Hand.webp'
import product4 from '../../../../assets/product-images/ODH-Bracket.webp'
import product5 from '../../../../assets/product-images/ODH-Handle.webp'

function OurProducts(props) {

    const Products = [
        {
            Image: product1,
            ImageName: "ODH BKT",
            ImageDescription: "",
            Name: "ODH BKT",
            Description: ""
        },
        {
            Image: product2,
            ImageName: "IDH-Housing",
            ImageDescription: "",
            Name: "IDH-Housing",
            Description: ""
        },
        {
            Image: product3,
            ImageName: "ODH-Hand",
            Name: "ODH-Hand",
            ImageDescription: "IG DESC",
            Description: ""
        },
        {
            Image: product4,
            ImageName: "ODH-Bracket",
            ImageDescription: "",
            Name: "ODH-Bracket",
            Description: ""
        },
        {
            Image: product5,
            ImageName: "ODH-Handle",
            ImageDescription: "",
            Name: "ODH-Handle",
            Description: ""
        }
    ]

    return (
        <div className='products-product-list-content'>

            {Products.map((product, index) => (
                <ProductCardTwo 
                    Image={product.Image} 
                    ImageName={product.ImageName}
                    ImageDescription={product.ImageDescription}
                    Name={product.Name}
                    Description={product.Description}
                    Index={(index + 1).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                      })}
                />
            ))}
        </div>
    );
}

export default OurProducts;