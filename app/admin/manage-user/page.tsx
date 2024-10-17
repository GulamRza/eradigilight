"use client";
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react';
import { hash } from 'bcryptjs';
import Link from 'next/link';

function AddUser() {

    const {data: session} = useSession();
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e: FormEvent){
        e.preventDefault();
        async function postNewUser(){
            const res = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                    user: {
                        name,
                        username,
                        password: await hash(password, 10)
                    },
                    session: session
                })
            });

            if(res.status == 200){
                setSuccess(true);
            }
        }

        postNewUser();
        // console.log({name, username, password})
    }

  if(!session){
    return <section className='min-h-screen'>
        You're not Logged In as admin
        <Link href='/admin/login'>Login</Link>
    </section>
  }

  return (
    <section className='h-full '>
        {success ? 
        <div>
            User Successfull posted!
            <button onClick={() => {setSuccess(false);}}>Add another user</button>
        </div>
        :
        <form onSubmit={handleSubmit} className=' flex flex-col gap-2 lg:w-[30vw]' >
            <input
                type="text"
                name='name' 
                value={name}
                onChange={(e: any) => {setName(e.target.value)}}
                className='p-2 px-4 focus:outline-none rounded border'
                placeholder='Name'
                required
             />
            <input
                type="text"
                name='username' 
                value={username}
                onChange={(e: any) => {setUserame(e.target.value)}}
                className='p-2 px-4 focus:outline-none rounded  border'
                placeholder='Username'
                required
             />
            <input
                type="text"
                name='password' 
                value={password}
                onChange={(e: any) => {setPassword(e.target.value)}}
                className='p-2 px-4 focus:outline-none rounded border'
                placeholder='Password'
                required
             />
            
            <button type='submit' className='bg-blue-900 p-2 rounded text-white'>Add User</button>
            <div className='flex gap-8'>
                <Link href={"/admin/delete-user"}>Delete User</Link>
                <Link href={"/admin/edit-user"}>Edit User</Link>
            </div>
        </form>
        }
    </section>
  )
}

export default AddUser