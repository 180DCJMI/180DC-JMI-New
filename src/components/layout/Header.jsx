import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from 'react-router-dom';

const navItems = [
    {
        name: "About us",
        url: "/about-us",
    },
    {
        name: "Our Team",
        url: "/our-team",
    },
    {
        name: "Resources",
        url: "/resources",
    },
    {
        name: "Gallery",
        url: "/gallery",
    }
]

export const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const activeNav = window.location.pathname;
    return (
        <header>
            <nav className="bg-gray-100 shadow-xl px-4 lg:px-16 py-2 w-full top-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="mr-3 w-28 lg:w-40" alt="Logo" />
                    </Link>
                    <div class="flex lg:hidden items-center lg:order-2">
                        <button onClick={() => setOpenNav(!openNav)} className="p-2 ml-1 text-xl rounded-lg lg:hidden
                         focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                            {!openNav ? <RxHamburgerMenu /> : <AiOutlineClose />}
                        </button>
                    </div>
                    <div className={`${openNav ? "right-0" : "-right-[100%]"} top-[72px] bg-gray-100 lg:bg-none
                     transition-all duration-300 lg:h-auto h-full shadow-xl lg:shadow-none fixed lg:static lg:justify-between items-center w-[50%]
                      flex-col lg:items-center lg:flex-row flex lg:w-auto lg:order-1 lg:space-x-8 space-y-6 lg:space-y-0`}>
                        <ul className="flex flex-col items-center space-y-5 lg:space-y-0 font-medium lg:flex-row lg:space-x-8 mt-20 lg:mt-0">
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.url} className={`${item.url === activeNav && "text-main"} hover:text-secondary transition-all duration-300
                                         relative after:w-0 hover:after:w-[100%] after:h-[2px] after:transition-all after:duration-300 after:bg-secondary 
                                         after:absolute after:-bottom-1 after:left-0`}>{item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <button className='p-4 py-2 bg-transparent font-bold bg-main hover:bg-dark text-white transition-all
                         duration-300 rounded-full border border-dark hover:border-gray-700'>Work with us</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
