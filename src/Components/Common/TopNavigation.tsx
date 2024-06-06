import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo/abhinidhi-logo.webp'
import DesBadlega from '../../assets/top-nav/ye-desh-badlegapng.png'

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

    const setActiveMenu = (url) => {        
        let newMenuList = [...menuList]
        newMenuList.forEach((menu) => {
            if(menu.url === url){
                menu.isActive = true
            }
            else{
                menu.isActive = false
            }
        })

        SetMenuList(newMenuList)
    }

    useEffect(() => {
        setActiveMenu(window.location.pathname)
    },[])
	return (
		<div className="top-nav-content">
            <div className="top-nav-company-info">
                <div className="top-nav-company-name">Abhinitee Plast <br />private limited</div>
                <div className="top-nav-company-desc">We mold the future</div>
            </div>
			<div className="top-nav-right-pannel">
				<div className="top-nav-slogan">
					<img
						src={DesBadlega}
						alt="slogan"
					></img>
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
		</div>
	);
}

export default TopNavigation;
