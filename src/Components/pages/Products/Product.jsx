import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import OurProducts from "./Product-Components/OurProducts";
import Footer from "../../Common/Footer";

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
					<p className="what-we-do-text">
						We specialize in the manufacturing, supplying, and
						exporting of automotive moulded products, components,
						and parts with our operational base located in Pune,
						Maharashtra, India. Our products find application in
						various automotive domains including sensors, lighting,
						electronics, switches, and TPE-based rubber replacement
						solutions.
					</p>

					<p className="what-we-do-text">
						Our production processes encompass a wide range of
						technical and high-performance materials, which are
						meticulously handled by a total of nine reliable
						injection moulding machines. We strongly believe that
						the quality of an injection-molded part is intrinsically
						linked to the precision of the tooling process. To
						ensure impeccable quality, we maintain an in-house
						toolmaking facility.
					</p>
				</div>
			</div>

			<div className="products-product-list-container">
				<OurProducts />
			</div>

			<div className="footer-container">
				<Footer />
			</div>
		</>
	);
}

export default Product;
