'use client';

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { usePathname } from 'next/navigation';
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
})

function _App({children} :{
    children: ReactNode
}) {

  const pathname = usePathname();

  return (
    <SessionProvider>
          {!pathname.includes('/admin') && <NavBar />}
          <div className={roboto.className}>{children}</div>
          {!pathname.includes('/admin') && <Footer />}
    </SessionProvider>
  )
}

export default _App