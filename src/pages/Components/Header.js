import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { MdRestaurantMenu } from 'react-icons/md';

function Header() {
    return (
        <>
            <header>
                <div className='background_image' />
                <nav>
                    <div className='nav_links'>
                        <img src='icon.png' alt='' />
                        <p>Home</p>
                        <p>Pages</p>
                        <p>our Offer</p>
                        <p>Menu</p>
                        <p>Galleries</p>
                        <p>Blog</p>
                    </div>
                    <div className='nav_icons-wrapper'>
                        <FaRegUserCircle className='icon' />
                        <MdRestaurantMenu className='icon' />
                        <FiShoppingCart className='icon' />
                    </div>
                </nav>

                <div className='main_description'>
                    <p className='intro'>FAST FOOD BURGERS</p>
                    <h2>Best burgers in galaxy</h2>
                </div>
            </header>
        </>
    );
}

export default Header;
