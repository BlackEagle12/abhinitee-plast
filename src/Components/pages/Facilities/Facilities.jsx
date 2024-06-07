import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import tool1 from '../../../assets/Infracture/design-tool01.webp'
import tool2 from '../../../assets/Infracture/design-tool02.webp'
import tool3 from '../../../assets/Infracture/design-tool03.webp'
import infra1 from '../../../assets/Infracture/infa-icon-1.png'
import infra2 from '../../../assets/Infracture/infa-icon-2.png'
import infra3 from '../../../assets/Infracture/infa-icon-3.png'
import infra4 from '../../../assets/Infracture/infa-icon-4.png'
import infra6 from '../../../assets/Infracture/infa-icon-6.png'

import Compressor from '../../../assets/Infracture/Compressor.webp'
import Cooling from '../../../assets/Infracture/Cooling tower.webp'
import Machines from '../../../assets/Infracture/Machines.webp'
import Scale from '../../../assets/Infracture/Scale.webp'
import Assembly from '../../../assets/Infracture/Assembly.webp'
import quality from '../../../assets/Infracture/quality.webp'

import Footer from "../../Common/Footer";
function Facilities(props) {

	const tools = [
		tool1,
		tool2,
		tool3
	]

	const facilities = [
		Compressor,
		Cooling,
		Machines,
		Scale,
		Assembly,
		quality
	]

	const infracture = [
		{Image: infra1, Desc: "6150 sq.ft. area"},
		{Image: infra2, Desc: "7800 sq. feet build up area"},
		{Image: infra3, Desc: "100 HP Electric Power"},
		{Image: infra4, Desc: "7+ Milacron machines 50 to 250 tons of capacity"},
		{Image: infra6, Desc: "In House toll room facality"}
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

			<div className="facalities-section-container">
				<div className="facalities-section-content">
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

			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="facilities"
					headingText2="We have"
				/>
			</div>

			<div className="facalities-section-container">
				<div className="facalities-section-content">
					<div className="images">
						{facilities &&
							facilities.slice(0,3).map((product) => (
								<div className="our-products-item">
									<img src={product} />
								</div>
							))}
					</div>
					<div className="tools-desc">
						With built-up area of 8000 Sq.ft our state-of-the-art Moulding shop consists of comprehensive range of 7 Injection moulding machines from 50 Ton to 250 Ton capacity. This also includes special purpose vertical Injection Moulding machines with rotary table as well as single sliding bed suitable for insert moulding, Terminal moulding & Over moulding applications.
					</div>
					<div className="images">
						{facilities &&
							facilities.slice(3,6).map((product) => (
								<div className="our-products-item">
									<img src={product} />
								</div>
							))}
					</div>
				</div>
			</div>

			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="Infrastructure"
					headingText2="Overview"
				/>
			</div>

			<div className="facalities-section-container">
				<div className="facalities-section-content">
					<div className="images">
						{infracture &&
							infracture.map((product) => (
								<div className="infra-icon">
									<img src={product.Image} />
									<div>{product.Desc}</div>
								</div>
							))}
					</div>
				</div>
			</div>

			<div className="footer-container">
                <Footer />
            </div>
		</>
	);
}

export default Facilities;
