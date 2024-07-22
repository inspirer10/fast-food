import React from 'react';

function Header() {
    return (
        <>
            <header>
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
                <div className='example_products_container'>
                    <div className='products_wrapper'>
                        <div className='product'>
                            <img src='illustration1.png' alt='' />
                            <h6>GRILL`D BURGERS</h6>
                            <p>
                                Beetroot water spinach okra water chestnut
                                ricebean pea.
                            </p>
                        </div>
                        <div className='product'>
                            <img src='illustration2.png' alt='' />
                            <h6>VEGGIE OPTIONS</h6>
                            <p>
                                Water spinach arugula pea tatsoi aubergine
                                spring onion.
                            </p>
                        </div>
                        <div className='product'>
                            <img src='illustration3.png' alt='' />
                            <h6>MILKSHAKES</h6>
                            <p>
                                Dandelion zucchini burdock yarrow chickpea
                                dandelion sorrel.
                            </p>
                        </div>
                        <div className='product'>
                            <img src='illustration4.png' alt='' />
                            <h6>DESSERTS</h6>
                            <p>
                                Chickweed okra pea winter purslane coriander
                                yarrow sweet.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
