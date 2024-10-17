"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { GrView, GrCalendar } from "react-icons/gr";
import { GoComment } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import Image from 'next/image';




function BlogsPage() {

  const [blogs, setBlogs] = useState<Array<any> | null>(null);

  useEffect(() => {
    async function loadBlogs(){
        const res = await fetch("/api/blog");
        const data = await res.json();

        if(data){
            setBlogs(data);
        }else{
            console.log("Unable to load blogs.")
        }

    }
    loadBlogs();
  }, []);

  return (
    <>
        <div className='p-8 lg:p-16 flex flex-col gap-8'>
            <h1 className='font-bold'>Most Viewed Blogs</h1>
            <div className='flex flex-col lg:flex-row gap-4 lg:justify-stretch'>
                <div className='grow-3 flex gap-4 flex-wrap  lg:justify-start'>
                {!blogs ? <div>Loading...</div> : 
                    blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
                }
                </div>
            </div> 
        </div>
    </>
  )
}

const BlogCard = ({blog}: {blog : any}) => {
    return (
        <div className='min-w-60 lg:w-[30%] flex flex-col rounded-lg overflow-hidden border border-gray-200'>
            <Image
                src={blog.thumbnailImg || "/thumbnail_600x400.png"}
                alt="/thumbnail_600x400.png"
                width={400}
                height={200}
                onError={(e:any) => {e.target.src = "/thumbnail_600x400.png"}}
                className='object-cover h-30'
            />

            <div className='[&>*]:p-2'>
                <div className='border-b border-t'>
                    <ul className='flex justify-around font-thin text-sm [&>*]:flex [&>*]:items-center [&>*]:gap-2'>
                        <li><GrView /> {blog.views}</li>
                        <li><GrCalendar /> {new Date(Date.parse(blog.createdAt)).toDateString()}</li>
                        <li><GoComment /> {blog.comments.length}</li>
                    </ul>
                </div>
                <div className='px-2 font-bold'>
                    <Link href={`/blogs/${blog.id}#blog-content`}>{blog.title}</Link>
                </div>
                {/* <div className='flex items-center gap-2'><IoTimeOutline /> {5} min</div> */}
            </div>
        </div>  
    )
}

export default BlogsPage