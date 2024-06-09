import React, { useState } from "react";
import HomeSlider from "./Home-components/HomeSlider";
import SectionHeading from "../../Common/SectionHeading";
import ProductCardOne from "../../Common/ProductCardOne";
import Numbers from "./Home-components/Numbers";
import QualityInovation from "./Home-components/QualityInovation";
import IndustrySkills from "./Home-components/IndustrySkills";
import Buddies from "./Home-components/Buddies";
import ClientFeedBackCorisal from "./Home-components/ClientFeedBackCorisal";
import Clients from "./Home-components/Clients";
import Footer from "../../Common/Footer";
import { Link } from "react-router-dom";
import MoldingMachine from '../../../assets/product-images/Molding Machine.webp'
import ToolDesign from '../../../assets/product-images/Tool Design.webp'
import PowderCoating from '../../../assets/product-images/Powder Coating.webp'
import PaintShop from '../../../assets/product-images/Paint Shop.webp'
import FIREWALLSTATION from '../../../assets/product-images/FIRE WALL STATION.webp'
import HomeSliderNew from "./Home-components/HomeSliderNew";

function Home(props) {
	let [homeProducts, setHomeProducts] = useState([
		{
			Name: "Molding Machine",
			Image: MoldingMachine,
			Description:
				"Efficiently produce high-quality plastic components with our advanced molding machines, ensuring precision and consistency in every product.",
		},
		{
			Name: "FIRE WALL STATION",
			Image: FIREWALLSTATION,
			Description:
				"Safeguard your plastic manufacturing facility with our state-of-the-art fire wall station, providing reliable protection against fire hazards to ensure uninterrupted operations.",
		},
		// {
		// 	Name: "Paint Shop",
		// 	Image: "src/assets/product-images/Paint Shop.webp",
		// 	Description:
		// 		"Elevate the aesthetics of your plastic products with our cutting-edge paint shop, offering precision coating solutions that enhance durability and visual appeal.",
		// },
		// {
		// 	Name: "Powder Coating",
		// 	Image: "src/assets/product-images/Powder Coating.webp",
		// 	Description:
		// 		"Enhance the durability and aesthetics of your plastic components with our advanced powder coating services, providing a seamless and long-lasting finish for a wide range of applications.",
		// },
		{
			Name: "Tool Design",
			Image: ToolDesign,
			Description:
				"Optimize the production process of your plastic components with our expert tool design services, tailored to ensure efficiency, precision, and cost-effectiveness.",
		}
	]);
	return (
		<>
			<div className="home-slider-container">
				<HomeSliderNew />
			</div>
			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="our"
					headingText2="services"
				/>
			</div>
			<div className="our-products-container">
				<div className="our-products-content">
					{homeProducts &&
						homeProducts.map((product, index) => (
							<div className="our-products-item">
								<ProductCardOne
									Name={product.Name}
									Image={product.Image}
									Description={product.Description}
									Index={index + 1}
								/>
							</div>
						))}
				</div>
			</div>

			<div className="home-services-button-container">
                <Link to="/services">
                    <button className='common-button'> See More </button>
                </Link>
            </div>

			<div className="home-numbers-container">
				<Numbers />
			</div>
			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="quality AND"
					headingText2="inovation"
				/>
			</div>
			<div className="home-quality-inovation-container">
				<QualityInovation />
			</div>
			<div className="industry-skills-container">
				<IndustrySkills />
			</div>
			<div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="MEET THE"
					headingText2="BUDDY TEAM"
				/>
			</div>

            <div className="buddy-team-cards-container">
                <Buddies />
		    </div>
            <div className="client-feedback-corisal-container">
                <ClientFeedBackCorisal />
            </div>

            <div className="section-heading-container">
				<SectionHeading
					backgroundText="Plast"
					headingText1="OUR"
					headingText2="CLIENTS"
				/>
			</div>

            
			<div className="home-our-clients-container">
                <Clients />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
		</>
	);
}

export default Home;
