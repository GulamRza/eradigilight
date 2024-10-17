"use client";

import React, { ReactNode } from 'react'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';



function AdminLayout({children}: {children: ReactNode}) {

  const { data: session } = useSession();

  return (
    <div>
        {session ? (
            <div className='flex'>
                <div className='w-60 min-h-screen bg-gray-800 text-white flex flex-col items-center p-2 gap-4'>
                    <div className='w-full p-2 flex items-center gap-4 border-b border-gray-600'>
                        <div className='w-8 h-8 bg-gray-600 rounded-full flex justify-center items-center'>
                            <img src="/favicons/icon-white.png" alt="logo-white" />
                        </div>
                        <div>{session.user?.name}</div>
                    </div>
                    <div className='w-full p-2 flex flex-col'>
                        <Link href='/admin' className='p-2 px-4 hover:bg-gray-600 rounded'>Dashboard</Link>
                        <Link href='/admin/manage-user' className='p-2 px-4 hover:bg-gray-600 rounded'>Manage User</Link>
                        <Link href='/admin/manage-blog' className='p-2 px-4 hover:bg-gray-600 rounded'>Manage Blogs</Link>
                        <Link href='/admin/leads' className='p-2 px-4 hover:bg-gray-600 rounded'>Leads</Link>
                        <button onClick={() => signOut()} className=' text-left p-2 px-4 hover:bg-gray-600 rounded'>Logout</button>
                    </div>
                </div>
                <div className='flex-grow'>
                    {children}
                </div>
            </div>
        ) : (
            <>
                {children}
            </>
        )}
        
    </div>
  )
}

export default AdminLayout