"use client";

import React, { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'
// import MDEditor from "@uiw/react-md-editor";
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import ImageUploader from './ImageUploader';

const CustomEditor = dynamic( () => import( './editor' ), { ssr: false } );




function Page() {

  const [mdString, setMdString] = useState<string>("");
  const [title, setTitle] = useState<string>("")
  const [thumbnailImg, setThumbnailImg] = useState<string>("");
  const { data: session } = useSession();


  function handleSumbit(e: FormEvent) {
    e.preventDefault();

    async function postBlog() {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: mdString,
          username: session?.user?.name,
          thumbnailImg: thumbnailImg
        })
      });

      if (res.status == 200) {
        alert("Blog Posted!");
        setTitle("");
        setMdString("");
      } else {
        alert("Something Went Wrong!");
      }
    }
    postBlog();

  }

  if (!session) {
    return <div className='p-20 min-h-screen bg-black text-white pt-20'>
      Please Login
    </div>
  }

  return (
    <div className=' min-h-screen text-black bg-white'>
      <div className='flex justify-center py-8 flex-col p-8'>
        <form onSubmit={handleSumbit}>
          <input type='text' placeholder='Title Here...' value={title} onChange={(e: any) => {setTitle(e.target.value)}} />

          <CustomEditor onChange={setMdString} />
          
          <ImageUploader onChange={setThumbnailImg} />
          
          <br />
          
          <button className='p-4 border hover:bg-gray-800 hover:text-white' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Page