import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <article>
                <h2>download our menu</h2>
                <button>GET MENU</button>
            </article>

            <summary>
                <p>
                    60 East 65th Street
                    <br />
                    New York City
                    <br /> NY 10065
                </p>
                <div className='icons-wrapper'>
                    <FaFacebook className='icon' />
                    <BsTwitterX className='icon' />
                    <FaInstagram className='icon' />
                    <FaTiktok className='icon' />
                </div>
                <div className='opening-hours'>
                    <p>
                        <span>mon-thu: </span>11.00 – 23.00
                    </p>
                    <p>
                        <span>sat:</span> 12.00 – 23.00
                    </p>
                    <p>
                        <span>sun:</span> 12.00 – 21.00
                    </p>
                </div>
            </summary>
        </footer>
    );
}

export default Footer;
