import React from 'react';

function Tiles() {
    const tilesContent = [
        {
            name: 'FARMHOUSE BURGER',
            description:
                'This burger’s name explains itself. Of course, you can also top it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.',
            price: '$3.99',
            img: '/bg4.jpg',
        },
        {
            name: 'QUINOA & BLACK BEAN BURGER',
            description:
                'We can’t think of a better way to celebrate summer than with these omg-worthy hamburgers. Plus, try our over-the-top creative cheeseburgers.',
            price: '$4.99',
            img: '/bg2.jpg',
        },
        {
            name: 'CHOCOLATE MILKSHAKE',
            description:
                'Milkshakes always taste good if you are a chocolate lover. You can throw one together with a cream or experiment with all kinds of extra flavors.',
            price: '$2.49',
            img: '/milkshake.jpg',
        },
        {
            name: 'STANDARD BURGER MEAL',
            description:
                'These incredible burger meal offer a unique twist to the classic hamburger, incorporating ingredients like pimento cheese and sesame.',
            price: '$4.99',
            img: '/bg3.jpg',
        },
        {
            name: 'CHECKOUT OUR CATERING MENU',
            description:
                'Throwing the party is never been easier. Order now and let us spice up your party. Burger meals, french fries and cheeseburgers will cheer up your friends.',
            price: '$14.99',
            img: '/burger11.jpg',
        },
        {
            name: 'HOW TO MAKE A PERFECT BURGER',
            description:
                'We will tell you a little secret. Mixing best quality steak and pork and serves them on homemade herb-butter rolls is the best version we know.',
            price: '$5.99',
            img: '/bg6.jpg',
        },
    ];

    return (
        <section className='tiles_section'>
            <div className='tiles_container'>
                {tilesContent.map(
                    ({ name, description, price, img }, index) => (
                        <div className='tile'>
                            <div
                                className='tile_bg_image'
                                style={{ backgroundImage: `url(${img})` }}
                            />
                            <div
                                className={`tile_text-wrapper ${
                                    index % 2 === 0 && 'left'
                                }`}
                            >
                                <h2 className='product_name'>{name}</h2>
                                <p className='description'>{description}</p>
                                <p className='price'>{price}</p>
                                <button>Order now</button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Tiles;
