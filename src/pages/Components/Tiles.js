import React from 'react';

function Tiles() {
    const tilesContent = [
        {
            name: 'FARMHOUSE BURGER',
            description:
                'This burger’s name explains itself. Of course, you can also top it with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything else.',
            price: '$3.99',
            img: '/burger444.jpg',
        },
    ];

    return (
        <section className='tiles_section'>
            <div className='tiles_wrapper'>
                {tilesContent.map(({ name, description, price, img }) => {
                    <div className='tile'>
                        <h2 className='product_name'>{name}</h2>
                        <p className='description'>{description}</p>
                        <p className='price'>{price}</p>
                    </div>;
                })}
            </div>
        </section>
    );
}

export default Tiles;
