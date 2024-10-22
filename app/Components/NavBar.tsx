"use client";

import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";



function NavBar() {

  const navRef = useRef<HTMLDivElement>(null);
  let lastScroll = 0;
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);


  useEffect(() => {
    const onScroll = (event: any) => {
      if (navRef.current) {
        if (window.scrollY < 30) {
          navRef.current.style.transform = 'translate(0, 0)';
          navRef.current.style.background = 'none';
          navRef.current.style.backdropFilter = 'none';
          navRef.current.style.boxShadow = "none";

        } else if (lastScroll - window.scrollY > 0) {
          navRef.current.style.transform = 'translate(0, 0)';
          navRef.current.style.boxShadow = "none";

        } else {
          navRef.current.style.transform = "translate(0, -100%)";
          navRef.current.style.background = "rgba(0, 0, 0, 0.2)"
          navRef.current.style.backdropFilter = 'blur(20px)';
          navRef.current.style.boxShadow = "1px 0px 20px rgb(33, 33, 33)";

        }
      }
      setMobileNavVisible(false);
      lastScroll = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (mobileNavVisible) {
        navRef.current.style.background = 'black';
      } else {
        navRef.current.style.background = 'none';
      }
    }
  }, [mobileNavVisible]);

  return (
    <>
      <div ref={navRef} className="fixed top-0 z-10 text-white transition-transform duration-200">
        <div className="w-screen flex p-4 lg:px-20 justify-between items-center">
          <Link href='/'><img src="/era-digi-light.png" className="w-36" alt="logo" /></Link>
          <ul className="gap-2 hidden lg:flex nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            {/* <li><Link href="/career">Career</Link></li> */}
            <li className="border hover:bg-opacity-100" ><Link href="/quick-request#quick-request-form">Get In Touch</Link></li>
          </ul>
          <button className="w-10 cursor-pointer lg:hidden text-3xl" onClick={() => setMobileNavVisible(prev => !prev)}>
            {mobileNavVisible ? <RiCloseLargeFill /> : <CiMenuBurger />}
          </button>
        </div>
        {/* mobile nav */}
        <div className={`w-full z-50 py-4 overflow-hidden ${mobileNavVisible ? "" : "hidden"} relative bg-black transition-all duration-300`}>
          <ul className="gap-2 lg:p-0 px-4 lg:flex lg:flex-row flex-col [&>*]:p-2 transition-all text-white" onClick={() => setMobileNavVisible(false)}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li className="hover:bg-white hover:text-black" ><Link href="quick-request">Get In Touch</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar;