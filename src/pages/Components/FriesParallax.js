import React, { useState } from 'react';

function FriesParallax() {
    const [position, setPosition] = useState({ mouseX: 0, mouseY: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = clientX - centerX;
        const mouseY = clientY - centerY;
        setPosition({ mouseX, mouseY });
    };

    return (
        <>
            <section className='friesParallax_section'>
                <p className='fries'>
                    TRY <br /> OUR <br /> CRUNCHY <br /> FRIES
                </p>
                <div
                    className='parallax-container'
                    onMouseMove={handleMouseMove}
                >
                    <div
                        className='parallax-image'
                        style={{
                            transform: `translate(${position.mouseX / 85}px, ${
                                position.mouseY / 85
                            }px)`,
                        }}
                    >
                        <img src='fries3Parallax.png' alt='fries' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default FriesParallax;
