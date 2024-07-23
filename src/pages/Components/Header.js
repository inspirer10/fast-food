import React from 'react';

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
                    <p>ICON</p>
                </nav>
            </header>
        </>
    );
}

export default Header;
