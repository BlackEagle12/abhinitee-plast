import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './top-navigation.css'

function TopNavigation() {
    let [menuList,SetMenuList] = useState([
        {
            name : "Home", 
            isActive : true, 
            url : "/"
        },
        {
            name : "About Us", 
            isActive : false, 
            url : "/about"
        },
        {
            name : "Products", 
            isActive : false, 
            url : "/product"
        },
        {
            name : "Contect Us", 
            isActive : false, 
            url : "contact"
        }
    ])

    return (
        <div className='top-nav-content'>
            <div className='top-nav-logo'>
                <img src='' alt='logo'/>
            </div>
            <div className='top-nav-menu-list'>
                    {menuList.map((menu) => (
                        <Link to={menu.url} className={'top-nav-menu ' + (menu.isActive ? 'top-nav-active-menu' : '' )}>
                            {menu.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default TopNavigation;