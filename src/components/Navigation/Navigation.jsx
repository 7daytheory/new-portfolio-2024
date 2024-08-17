import React, { useState } from "react"
import logo from "../../assets/logo-white.png"
import { Fade } from "react-awesome-reveal"

const Navigation = () => {
    const [mobileMenu, toggleMobileMenu] = useState(false);

    const handleToggle = () => {
        toggleMobileMenu(!mobileMenu);
    };

    const navMenu = (
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-red-700 rounded md:bg-transparent md:text-700 md:dark:text-red-500 dark:bg-red-600 md:dark:bg-transparent" aria-current="page">
                Home
            </a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Experience
            </a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Resume
            </a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Examples
            </a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Request a Quote
            </a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
            </a>
        </li>
        </ul>);
        
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="container mx-auto p-4" style={{ maxWidth: "75%" }}>
                <div className="flex flex-wrap items-center justify-between">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Fade direction="left" duration={1500} triggerOnce>
                            <img src={logo} className="h-10" alt="MJL Design Logo" />
                        </Fade>
                    </a>
                    <button
                        onClick={handleToggle}
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-solid-bg"
                        aria-expanded={mobileMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div 
                    className={`${mobileMenu ? "block" : "hidden"} w-full md:block md:w-auto`} 
                    id="navbar-solid-bg"
                    >
                        <div className="flex flex-wrap justify-center -mx-5 -my-2">
                            <div className="px-5 py-2">
                            {!mobileMenu ? (
                            <Fade direction="down" duration={750} cascade triggerOnce>
                                {navMenu}
                            </Fade>
                                ) : (
                                    <Fade direction="down" duration={500} triggerOnce>
                                    {navMenu}
                                </Fade>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation
