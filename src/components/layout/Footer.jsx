import React from 'react'
import WhiteLogo from "../../assets/logowhite.svg";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <div className='w-full bg-darkgray px-5 md:px-10'>
      <div className='flex md:flex-row flex-col items-center md:items-start justify-between space-x-2 border-b pb-12 md:pt-4 lg:pr-40'>
        <div className='flex flex-col space-y-0 items-center md:items-start'>
          <img src={WhiteLogo} alt="whitelogo" className='w-60 md:-ml-5' />
          <p className='p text-white font-semibold'>Jamia Millia Islamia</p>
          <p className='p text-white font-light'>New Delhi-110025</p>
          <p className='p text-white font-light'>Crafted by Tech Team, 180DC JMI</p>
        </div>
        <div className='md:pt-9 pt-3'>
          <h3 className='text-white text-xl font-bold'>Stay Connected on</h3>
          <div className='flex items-center space-x-3 pt-2 justify-center md:justify-start'>
            <a href="#" className='rounded-full bg-white flex items-center justify-center text-2xl p-2 hover:bg-gray-300 transition-all duration-300'>
              <FaInstagram />
            </a>
            <a href="#" className='rounded-full bg-white flex items-center justify-center text-2xl p-2 hover:bg-gray-300 transition-all duration-300'>
              <FaLinkedin />
            </a> <a href="#" className='rounded-full bg-white flex items-center justify-center text-2xl p-2 hover:bg-gray-300 transition-all duration-300'>
              <FaTwitter />
            </a>

          </div>
        </div>
        <div className='pt-9 hidden md:flex flex-col'>
          <h3 className='text-white text-xl font-extrabold mb-2'>Quick Links</h3>
          <div className='flex flex-col space-y-0.5'>
            <Link to="/" className='text-white font-medium hover:text-gray-300 transition-all duration-300'>About Us</Link>
            <Link to="/" className='text-white font-medium hover:text-gray-300 transition-all duration-300'>Our Team</Link>
            <Link to="/resources" className='text-white font-medium hover:text-gray-300 transition-all duration-300'>Resources</Link>
            <Link to="/" className='text-white font-medium hover:text-gray-300 transition-all duration-300'>Gallery</Link>
            <Link to="/" className='text-white font-medium hover:text-gray-300 transition-all duration-300'>Contact Us</Link>
          </div>
        </div>

      </div>
      <div className='py-6 text-center'>
        <p className='text-white font-thin text-sm'>2023 © Copyright 180 Degrees Consulting.</p>
      </div>
    </div>
  )
}
