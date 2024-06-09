import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/abhinidhi-logo.webp";
import DesBadlega from "../../assets/top-nav/ye-desh-badlegapng.png";

function DesktopTopNavigation({ setMenuList, menuList, setActiveMenu }) {
	return (
		<>
			<div className="top-nav-company-info">
				<div className="top-nav-company-name">
					Abhinitee Plast <br />
					private limited
				</div>
				<div className="top-nav-company-desc">We mold the future</div>
			</div>
			<div className="top-nav-right-pannel">
				<div className="top-nav-slogan">
					<img src={DesBadlega} alt="slogan"></img>
				</div>
				<div className="top-nav-menu-list">
					{menuList.map((menu) => (
						<Link
							onClick={() => setActiveMenu(menu.url)}
							to={menu.url}
							className={
								"top-nav-menu " +
								(menu.isActive ? "top-nav-active-menu" : "")
							}
						>
							{menu.name}
						</Link>
					))}
				</div>
			</div>
			<div className="top-nav-logo">
				<img src={Logo} alt="logo" />
			</div>
		</>
	);
}

export default DesktopTopNavigation;
