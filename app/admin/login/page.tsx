'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setErrorMessage('Invalid credentials, please try again.');
    } else if (res?.ok) {
      router.push('/admin');  // Redirect to homepage after successful sign-in
    }
  };

  return (
    <section className='p-20 min-h-screen'>
      <div className='flex flex-col gap-4 border p-20 rounded-xl shadow-xl'>
        <h3>Sign In</h3>
        <h1 className='font-bold'>Admin Panel</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 lg:w-[512px]'>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Username'
              className='bg-white text-black border p-4 rounded-lg focus:outline-none'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
              className='bg-white text-black border p-4 rounded-lg focus:outline-none'
            />
          <button type="submit" className='bg-[var(--purple)] rounded-lg text-white p-4 focus:bg-[var(--orange)] focus:outline-none'>Sign In</button>
        </form>
        {errorMessage && <p className='text-red-700'>{errorMessage}</p>}
      </div>
    </section>
  );
}
