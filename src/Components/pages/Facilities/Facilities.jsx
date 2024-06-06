import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import tool1 from '../../../assets/Infracture/design-tool01.webp'
import tool2 from '../../../assets/Infracture/design-tool02.webp'
import tool3 from '../../../assets/Infracture/design-tool03.webp'
import ProductCardOne from "../../Common/ProductCardOne";
function Facilities(props) {

	const tools = [
		tool1,
		tool2,
		tool3
	]
	return (
		<>
			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="Tool"
					headingText2="room"
				/>
			</div>

			<div className="facalities-tools-container">
				<div className="facalities-tools-content">
					<div className="images">
						{tools &&
							tools.map((product) => (
								<div className="our-products-item">
									<img src={product} />
								</div>
							))}
					</div>
					<div className="tools-desc">
						lndigenization & customization of intricate injection molded plastics components is our strength. With this approach our tool room is equipped with all essential ultra modern machines along with design facilities. We offer a complete solution to customer which includes - Product design assistance, Part process feasibility study, tool design, tool making & finished product supply
					</div>
				</div>
			</div>
		</>
	);
}

export default Facilities;
