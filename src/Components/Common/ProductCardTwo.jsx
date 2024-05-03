import React from 'react';

function ProductCardTwo(props) {

    return (
        <div className="our-product-card-2" 
            style={Number(props.Index) % 2 == 0 ? {flexDirection: "row-reverse"} : {} }
        >
			<div className="product-image">
				<img src={props.Image} />
                <div className='product-image-info'
                    style={Number(props.Index) % 2 == 0 ? {alignSelf: 'flex-end'} : {} }
                >
                    <div className="product-image-name">{props.ImageName}</div>
                    <p className="product-image-description">{props.ImageDescription}</p>
                </div>
			</div>
			<div className="product-info"
                style={Number(props.Index) % 2 == 0 ? {paddingRight: '5%'} : {paddingLeft: '5%'} }
            >
				<div className="product-index">{props.Index}</div>
                <div className='small-saperator'></div>
				<div className="product-name">{props.Name}</div>
				<p className="product-description">{props.Description}</p>
			</div>
		</div>
    );
}

export default ProductCardTwo;