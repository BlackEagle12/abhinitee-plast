import React, { useState } from "react";
import { CustomImage, images } from "./Images";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = images.map(({ original, width, height }) => ({
	src: original,
	width,
	height,
}));

function GalleryComponent(props) {
	const [index, setIndex] = useState(-1);

	const handleClick = (index: number, item: CustomImage) => setIndex(index);

	const style = {
		//basic property
		width: "100%",
		height: "Math.floor(rowHeight * (item.width / item.height))",
		overflow: "hidden",

		//additional property
		// border: "1px solid black",
	};
	return (
		<div className="gallery-component-container">
			<div className="gallery-component-content">
				<Gallery
					images={images}
					onClick={handleClick}
					enableImageSelection={false}
					rowHeight={300}
					margin={10}
					// tileViewportStyle={style}
				/>
				<Lightbox
					slides={slides}
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
				/>
			</div>
		</div>
	);
}

export default GalleryComponent;
