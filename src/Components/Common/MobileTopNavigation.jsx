import React, { useState } from 'react';
import Logo from "../../assets/logo/abhinidhi-logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

function MobileTopNavigation({ setMenuList, menuList, setActiveMenu, showMenu, setShowMenu }) {

    return (
        <>
            <div className="top-nav-company-info">
				<div className="top-nav-company-name">
					Abhinitee Plast <br />
					private limited
				</div>
				<div className="top-nav-company-desc">We mold the future</div>
			</div>
            <div className="top-nav-logo">
				<img src={Logo} alt="logo" />
			</div>
            <FontAwesomeIcon icon={faBarsStaggered} style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => setShowMenu(!showMenu)}/>
        </>
    );
}

export default MobileTopNavigation;