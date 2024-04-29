import React from 'react';

function ProductCardOne(props) {
    return (
        <div className="our-product-card-1">
			<div className="product-image">
				<img src={props.Image} />
			</div>
			<div className="product-desription">
				<div className="product-index">{props.Index}</div>
				<div className="product-name">{props.Name}</div>
				<p className="product-description">{props.Description}</p>
			</div>
		</div>
    );
}

export default ProductCardOne;