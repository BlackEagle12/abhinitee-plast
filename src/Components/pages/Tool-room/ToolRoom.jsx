import React, { useState } from 'react';
import vmc from '../../../assets/tool-room/vmc.webp'
import WireCut from '../../../assets/tool-room/WireCut.webp'
import EDM from '../../../assets/tool-room/EDM.webp'
import Design from '../../../assets/tool-room/Design.webp'
import Core from '../../../assets/tool-room/Core.webp'
import cavity from '../../../assets/tool-room/cavity.webp'
import ToolCardOne from '../../Common/ToolCardOne';
import Footer from '../../Common/Footer';

function ToolRoom(props) {

    let [tools, settools] = useState([
		{
			Name: "VMC",
			Image: vmc,
			Description:
				"Our VMC solutions at Abhinitee Plast harness cutting-edge technology to precisely sculpt and mold raw materials into intricate designs with unparalleled accuracy. Empowering your production process, our VMC systems epitomize efficiency, ensuring each creation is imbued with quality and finesse, as we mold the future of plastic manufacturing.",
		},
		{
			Name: "Wire Cut",
			Image: WireCut,
			Description:
				"Through meticulous precision and advanced wire-cutting techniques, Abhinitee Plast crafts precise shapes and contours with unparalleled consistency. Our wire-cutting technology ensures that every component meets exacting specifications, embodying our commitment to excellence as we shape the landscape of the plastic industry.",
		},
		{
			Name: "EDM",
			Image: EDM,
			Description:
				"At Abhinitee Plast, EDM technology revolutionizes the manufacturing process by delicately sculpting intricate designs with unmatched precision. Through controlled electrical discharges, we transform raw materials into refined masterpieces, illuminating the path to a future where innovation meets perfection in plastic molding.",
		},
        {
			Name: "Design",
			Image: Design,
			Description:
				"Design lies at the heart of Abhinitee Plast's ethos, where creativity converges with functionality to redefine possibilities in plastic molding. Our expert designers leverage cutting-edge software and unparalleled expertise to breathe life into concepts, ensuring each creation reflects ingenuity and sophistication. Explore a world where imagination knows no bounds as we sculpt the future together.",
		},
        {
			Name: "Core",
			Image: Core,
			Description:
				"As the foundational element of every mold, the core serves as the backbone of Abhinitee Plast's commitment to excellence. Crafted with precision and durability in mind, our cores ensure the seamless production of intricate plastic components, embodying reliability and strength at every turn. Discover the cornerstone of innovation as we mold tomorrow's possibilities today.",
		},
		{
			Name: "Cavity",
			Image: cavity,
			Description:
				"Within the intricate framework of plastic molding, the cavity represents the space where creativity meets craftsmanship. At Abhinitee Plast, our cavities are meticulously engineered to encapsulate the essence of each design, ensuring flawless replication with every production cycle. Explore a realm where precision and artistry converge, shaping the future of plastic manufacturing with every mold.",
		}
	]);

    return (
        <div>
            <div className="tool-room-container">
				<div className="tool-room-content">
					{tools &&
						tools.map((tool, index) => (
							<div className="tool-card">
								<ToolCardOne
									Name={tool.Name}
									Image={tool.Image}
									Description={tool.Description}
									Index={"0" + (index + 1)}
								/>
							</div>
						))}
				</div>
			</div>
			<div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default ToolRoom;