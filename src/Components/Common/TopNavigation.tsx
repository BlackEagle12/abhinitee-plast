import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

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
            name : "Gallery", 
            isActive : false, 
            url : "gallery"
        },
        {
            name : "Our Clients", 
            isActive : false, 
            url : "clients"
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
            <div className='top-nav-right-pannel'>
                <div className='top-nav-slogan'>
                    <img src='src/assets/top-nav/ye-desh-badlegapng.png' alt='slogan'></img>
                </div>
                <div className='top-nav-menu-list'>

                    {menuList.map((menu) => (
                        <Link to={menu.url} className={'top-nav-menu ' + (menu.isActive ? 'top-nav-active-menu' : '' )}>
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopNavigation;