'use client';

import { useSession } from 'next-auth/react';
import SignInPage from './login/page';
import { Fragment } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();

  return session ? (
      <Fragment>
        <div className=' p-8 bg-gray-900 to-gray-700  text-white'>
                          <h1 className='font-bold'>Admin Panel</h1>
                          <h3>Welcome {session?.user?.name}</h3>
                      </div>
        <div className='py-8 flex gap-4'>
          <main>
            Admin Home Page
          </main>
        </div>
      </Fragment>
  ) : (
    <SignInPage />
    // <section className='min-h-screen '>
    //   <Link href='/admin/login'>Login</Link>
    // </section>
  );
}
