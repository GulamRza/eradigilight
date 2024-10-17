import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="bg-black w-full p-8 lg:p-16 lg:px-40 flex flex-col items-center gap-8 text-white border-t border-gray-600">
        <div className="container mx-auto px-4 flex flex-wrap justify-between gap-4">
          {/* <!-- Services Column --> */}
          <div className="">
            <h5 className="uppercase font-bold mb-2">Services</h5>
            <ul className='flex flex-col gap-2'>
              <li><a href="#" className="text-gray-400 hover:text-white">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Content Writing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">online Reputaion Management</a></li>
              {/* <!-- Add other services here --> */}
            </ul>
          </div>

          {/* <!-- Useful Links Column --> */}
          <div className="">
            <h5 className="uppercase font-bold mb-2">Useful Links</h5>
            <ul className='flex flex-col gap-2'>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              {/* <!-- Add other links here --> */}
            </ul>
          </div>

          {/* <!-- Web Development Services Column --> */}
          <div className="lg:block hidden">
            <h5 className="uppercase font-bold mb-2">Web Development <br /> Services</h5>
            {/* <!-- List of web development services goes here --> */}
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              {/* <!-- Add other links here --> */}
            </ul>
          </div>

          {/* <!-- Digital Marketing Services Column --> */}
          <div className="lg:block hidden">
            <h5 className="uppercase font-bold mb-2">Digital Marketing <br /> Services</h5>
            {/* <!-- List of digital marketing services goes here --> */}
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              {/* <!-- Add other links here --> */}
            </ul>
          </div>

          {/* <!-- Connect With Us Column --> */}
          <div className="flex flex-col gap-4">
            <h5 className="uppercase font-bold mb-2">Connect with Us</h5>
            <div className="flex flex-col space-x-4 gap-8">
              {/* <!-- Add more social media icons as needed --> */}
              <ul className='flex text-2xl gap-8 w-full justify-center'>
                <li><Link href='https://www.instagram.com/GulamRza000'><FaInstagram /></Link></li>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedinIn /></li>
              </ul>
              <div className='text-right max-w-60'>
                <h4>AIHP Horizon</h4>
                <p>1273, near Fun n Food Water Park, Kapashera, Delhi - 110037</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-zinc-600 text-sm">
          <div>
            FAQ | Privacy-Policy | Terms & Conditions
          </div>
          <div>
            © 2024 EraDigiLight Solutions. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer