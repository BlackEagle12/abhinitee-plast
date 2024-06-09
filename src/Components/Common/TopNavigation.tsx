import React, { useEffect, useState } from "react";
import DesktopTopNavigation from "./DesktopTopNavigation";
import MobileTopNavigation from "./MobileTopNavigation";
import { Link } from "react-router-dom";

function TopNavigation() {
	let [menuList, SetMenuList] = useState([
		{
			name: "Home",
			isActive: false,
			url: "/",
		},
		{
			name: "About Us",
			isActive: false,
			url: "/about",
		},
		{
			name: "Tool Room",
			isActive: false,
			url: "/tools",
		},
		{
			name: "Products",
			isActive: false,
			url: "/product",
		},
		{
			name: "Infrastructure",
			isActive: false,
			url: "/facilities",
		},
		// {
		// 	name: "Gallery",
		// 	isActive: false,
		// 	url: "/gallery",
		// },
		{
			name: "Our Clients",
			isActive: false,
			url: "/clients",
		},
		{
			name: "Contact Us",
			isActive: false,
			url: "/contact",
		},
	]);

	let [scrWidth, setScrWidth] = useState(window.innerWidth);

	let [showMenu, setShowMenu] = useState(false);

	const setActiveMenu = (url) => {
		let newMenuList = [...menuList];
		newMenuList.forEach((menu) => {
			if (menu.url === url) {
				menu.isActive = true;
			} else {
				menu.isActive = false;
			}
		});

		SetMenuList(newMenuList);
	};

	useEffect(() => {
		setActiveMenu(window.location.pathname);
		setScrWidth(window.innerWidth);
	}, []);

	return (
		<>
			{scrWidth > 700 && (
				<div className="top-nav-content">
					<DesktopTopNavigation
						setActiveMenu={setActiveMenu}
						menuList={menuList}
						setMenuList={SetMenuList}
					/>
				</div>
			)}
			{scrWidth <= 700 && (
				<>
					<div className="top-nav-content">
						<MobileTopNavigation
							setActiveMenu={setActiveMenu}
							menuList={menuList}
							setMenuList={SetMenuList}
							showMenu={showMenu}
							setShowMenu={setShowMenu}
						/>
					</div>
					<div className={"top-nav-menu-list " + (showMenu ? '' : 'display-none')}>
						{menuList.map((menu) => (
							<Link
								onClick={() => {setActiveMenu(menu.url); setShowMenu(false)} }
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
				</>
			)}
		</>
	);
}

export default TopNavigation;
