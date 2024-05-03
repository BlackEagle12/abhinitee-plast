import React from 'react';
import ProductCardTwo from '../../../Common/ProductCardTwo';

function OurProducts(props) {

    const Products = [
        {
            Image: "src/assets/product-images/product-1.webp",
            ImageName: "IG NAME",
            ImageDescription: "IG DESC",
            Name: "Automotive Sensors",
            Description: "Our engineers will collaboratively review and enhance the part designs to ensure optimization for volume production."
        },
        {
            Image: "src/assets/product-images/product-2.webp",
            ImageName: "IG NAME",
            ImageDescription: "IG DESC",
            Name: "Automotive Lightings",
            Description: "Our highly experienced advanced engineering team work in tandem with our processing and manufacturing experts to optimize the part design and all other aspects of fixturing, processing and deliver your parts for next process when and where you need them."
        },
        {
            Image: "src/assets/product-images/product-3.webp",
            ImageName: "IG NAME",
            Name: "Auto Electronics",
            ImageDescription: "IG DESC",
            Description: "The quality, accuracy and production durability of injection mold is directly linked to the overall quality of each parts of molds manufactured with precision."
        },
        {
            Image: "src/assets/product-images/product-4.webp",
            ImageName: "IG NAME",
            ImageDescription: "IG DESC",
            Name: "Parts for Automotive Switches",
            Description: "Our infrastructure with special customised small moulding machines can produce high quality injection parts with insert and terminal moulding. We development the Moulds, we understand the value that bring comprehensively managing the process from end to end throughout the life."
        },
        {
            Image: "src/assets/product-images/product-5.webp",
            ImageName: "IG NAME",
            ImageDescription: "IG DESC",
            Name: "Rubber Replacement Solutions",
            Description: "After lot of research and innovation and experiments we have developed strong platform of the know–how for replacement of thermosetting rubber to TPE (Thermo Plastic Elastomer)"
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