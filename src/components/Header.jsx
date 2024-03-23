import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import logo from '../../public/images/logo.svg';

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contact Us'
        },
    ];

    return (
        <Router> 
            <div className='flex items-center justify-between p-3 shadow rounded-2xl mt-3 mx-1 md:mx-auto'>
                <div className='flex gap-10 items-center'>
                    <div className="relative">
                        <Image src={logo} alt="Logo" width={200} height={40} className="transition-transform transform-gpu hover:scale-105 md:max-w-md md:h-50" />
                    </div>

                    <ul className='md:flex gap-8 hidden font-bold cursor-pointer'>
                        {Menu.map((item, index) => (
                            <li key={index} className="list-item p-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 
                                transition-colors duration-300">
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
                <button className="btn btn-primary text-sm md:text-base">Get Started</button>
            </div>
        </Router> 
    );
}

export default Header
