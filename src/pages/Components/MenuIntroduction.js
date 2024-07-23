import React from 'react';

function MenuIntroduction() {
    const exampleProducts = [
        {
            name: 'BEEF BURGERS',
            img: 'burger1.jpg',
            description:
                'Beetroot water spinach okra water chestnut ricebean pea.',
        },
        {
            name: 'CHICKEN BURGERS',
            img: 'burger9.jpg',
            description:
                'Water spinach arugula pea tatsoi aubergine spring onion.',
        },
        {
            name: 'VEGAN OPTIONS',
            img: 'burger3.jpg',
            description:
                'Dandelion zucchini burdock yarrow chickpea dandelion sorrel.',
        },
        {
            name: 'FISH BURGERS',
            img: 'burger7.jpg',
            description:
                'Water spinach arugula pea tatsoi aubergine spring onion.',
        },
        {
            name: 'FRENCH FRIES',
            img: 'fries.jpg',
            description:
                'Dandelion zucchini burdock yarrow chickpea dandelion sorrel.',
        },
        {
            name: 'GREAT DESSERTS',
            img: 'dessert.jpg',
            description:
                'Chickweed okra pea winter purslane coriander yarrow sweet..',
        },
    ];

    return (
        <section className='menuIntroduction_section'>
            <div className='example_products_container'>
                <div className='products_wrapper'>
                    <div className='product'>
                        <img src='illustration1.png' alt='' />
                        <h6>GRILL`D BURGERS</h6>
                        <p>
                            Beetroot water spinach okra water chestnut ricebean
                            pea.
                        </p>
                    </div>
                    <div className='product'>
                        <img src='illustration2.png' alt='' />
                        <h6>VEGGIE OPTIONS</h6>
                        <p>
                            Water spinach arugula pea tatsoi aubergine spring
                            onion.
                        </p>
                    </div>
                    <div className='product'>
                        <img src='illustration3.png' alt='' />
                        <h6>MILKSHAKES</h6>
                        <p>
                            Dandelion zucchini burdock yarrow chickpea dandelion
                            sorrel.
                        </p>
                    </div>
                    <div className='product'>
                        <img src='illustration4.png' alt='' />
                        <h6>DESSERTS</h6>
                        <p>
                            Chickweed okra pea winter purslane coriander yarrow
                            sweet.
                        </p>
                    </div>
                </div>
            </div>

            <p className='slogan_paragraph'>Tasty & crunchy</p>
            <h2>Choose & enjoy</h2>
            <p className='subheading'>
                Inspired by recipes and creations of world’s best chefs
            </p>
            <article className='example_products-container'>
                {exampleProducts.map(({ name, img, description }) => (
                    <div className='product'>
                        <img src={img} alt={name} />

                        <h3>{name}</h3>
                        <p className='description'>{description}</p>
                    </div>
                ))}
            </article>

            <button className='view_menu'>View Our Full Menu</button>
        </section>
    );
}

export default MenuIntroduction;
