import React, { useRef } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="home"
                smooth={true}
                offset={-75} // Adjusts the scroll position with an offset (useful for fixed headers)
                duration={500} // Duration of the scroll animation in milliseconds
                class="flex items-center rtl:space-x-reverse cursor-default hover:cursor-pointer">
                <img src="./pasya.png" class="h-12" alt="pasya Logo"/>
                <img src="./titleh.png" class="h-12" alt="title"/>
            </Link>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign In/Sign Up</button>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <button id="theme-toggle" class="p-2 rounded-md">
                    <svg id="sun-icon" class="hidden w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org">...</svg>
                <svg id="moon-icon" class="block w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org">...</svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link to="home" 
                    smooth={true}
                    offset={-25} // Adjusts the scroll position with an offset (useful for fixed headers)
                    duration={500} // Duration of the scroll animation in milliseconds
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Home</Link>
                </li>
                <li>
                    <Link to="about"
                    smooth={true}
                    offset={-100} // Adjusts the scroll position with an offset (useful for fixed headers)
                    duration={500} // Duration of the scroll animation in milliseconds
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">About us</Link>
                </li>
                <li>
                    <Link to="work_with_us"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Work with us</Link>
                </li>
                <li>
                    <Link to="blog"
                    smooth={true}
                    offset={-100}
                    duration={500}
                    class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 cursor-default hover:cursor-pointer">Blog</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header