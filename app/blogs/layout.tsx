import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blogs"
}

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className='bg-grad'>
        <div className='bg-grad py-20 p-8 lg:p-20 text-white'>
          <h1 className='text-[3.5em] font-bold uppercase'>Our Blogs</h1>
          <h3 className='lg:w-[40%]'>Stay updated with the latest Digital marketing insights and trends from our skilled strategist.</h3>
        </div>
      </main>
      <div className='flex lg:flex-row flex-col justify-between lg:px-20'>
        <div className='min-h-screen'>
          {children}
        </div>
        <div className='flex flex-col gap-4 p-4 py-20'>
          {/* Search Bar */}
          <div className='border flex justify-between'>
            <input type="text" placeholder='Search' className='p-2 px-4 focus:outline-none' />
            <button type='submit' className='p-2 px-4 bg-black text-white'>Search</button>
          </div>
          {/* Latest Posts */}
          <div className=' bg-gray-100 p-4'>
            <h3 className='uppercase'></h3>
          </div>

          {/* Services */}
          <div className='hidden lg:block'>
            <h3 className='border-b p-2 font-bold'>Our Services</h3>
            <ul className='p-2 flex flex-col gap-2'>
              <li>Digital Marketing</li>
              <li>Wed Designing</li>
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className='border-b p-2 font-bold'>Connect Us On</h3>
            <ul className='p-4 flex justify-around text-2xl'>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaLinkedinIn /></li>
              <li><FaTwitter /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout