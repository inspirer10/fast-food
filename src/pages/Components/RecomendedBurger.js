import React, { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function RecomendedBurger() {
    const [slide, setSlide] = useState(2);
    const slidesCount = 3; // Liczba slajdów

    const handleChangeSlide = (direction) => {
        if (direction === 'prev') {
            setSlide((prevSlide) =>
                prevSlide === 1 ? slidesCount : prevSlide - 1
            );
        } else if (direction === 'next') {
            setSlide((prevSlide) =>
                prevSlide === slidesCount ? 1 : prevSlide + 1
            );
        }
    };

    return (
        <section className='burger_recomendation-section'>
            <IoIosArrowBack
                onClick={() => handleChangeSlide('prev')}
                className='left_arrow'
            />

            <div
                className='slides_wrapper'
                style={{ transform: `translateX(-${(slide - 1) * 100}%)` }}
            >
                <div className='recomended_wrapper first_element active'>
                    <img src='burger2.jpg' alt='' />
                    <div className='description'>
                        <p className='price'>ONLY $6.99</p>
                        <h3>SUPER BURGER</h3>
                        <p className='subheading'>
                            We can’t think of a better way to celebrate summer
                            than with these omg-worthy hamburgers.
                        </p>
                    </div>
                </div>

                <div className='recomended_wrapper second_element active'>
                    <img src='burger10.jpg' alt='' />
                    <div className='description'>
                        <p className='price'>ONLY $7.99</p>
                        <h3>QUINOA & BLACK BEAN BURGER</h3>
                        <p className='subheading'>
                            We can’t think of a better way to celebrate summer
                            than with these omg-worthy hamburgers.
                        </p>
                    </div>
                </div>

                <div className='recomended_wrapper third_element active'>
                    <img src='burger4.jpg' alt='' />
                    <div className='description'>
                        <p className='price'>ONLY $12.99</p>
                        <h3>CHICKEN BURGER</h3>
                        <p className='subheading'>
                            We can’t think of a better way to celebrate summer
                            than with these omg-worthy hamburgers.
                        </p>
                    </div>
                </div>
            </div>

            <IoIosArrowForward
                onClick={() => handleChangeSlide('next')}
                className='right_arrow'
            />
        </section>
    );
}

export default RecomendedBurger;
