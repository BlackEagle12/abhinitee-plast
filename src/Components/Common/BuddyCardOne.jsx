import {
	faFacebookF,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BuddyCardOne(props) {
	return (
		<div className="buddy-card">
			<div className="buddy-image">
				<img src={props.Image} alt="" />
			</div>
			<div className="buddy-detail">
				<div className="social-media">
					<FontAwesomeIcon icon={faFacebookF} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faLinkedin} />
				</div>
				<div className="buddy-info">
					<div className="buddy-name">{props.Name}</div>
					<div className="buddy-designation">{props.Designation}</div>
				</div>
			</div>
		</div>
	);
}

export default BuddyCardOne;
