import React, { useState } from 'react';
import ProductCardOne from '../../Common/ProductCardOne';
import ToolDesign from '../../../assets/product-images/Tool Design.webp'
import ToolCardOne from '../../Common/ToolCardOne';

function ToolRoom(props) {

    let [tools, settools] = useState([
		{
			Name: "VMC",
			Image: ToolDesign,
			Description:
				"Efficiently produce high-quality plastic components with our advanced molding machines, ensuring precision and consistency in every product.",
		},
		{
			Name: "Wire Cut",
			Image: ToolDesign,
			Description:
				"Safeguard your plastic manufacturing facility with our state-of-the-art fire wall station, providing reliable protection against fire hazards to ensure uninterrupted operations.",
		},
		{
			Name: "EDM",
			Image: ToolDesign,
			Description:
				"Optimize the production process of your plastic components with our expert tool design services, tailored to ensure efficiency, precision, and cost-effectiveness.",
		},
        {
			Name: "Design",
			Image: ToolDesign,
			Description:
				"Optimize the production process of your plastic components with our expert tool design services, tailored to ensure efficiency, precision, and cost-effectiveness.",
		},
        {
			Name: "Core/cavity",
			Image: ToolDesign,
			Description:
				"Optimize the production process of your plastic components with our expert tool design services, tailored to ensure efficiency, precision, and cost-effectiveness.",
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
        </div>
    );
}

export default ToolRoom;