import Link from 'next/link'


async function ManageBlogs() {


  let blogs = [];
  try{
    const res = await fetch(process.env.BASE_URL + "/api/blog");
    blogs = await res.json();
  }catch(err){
    console.log("unable to fetch blogs");
  }


  return (
    <div className='p-4'>
      <div className='flex gap-4 justify-end py-4'>
          <div>ManageBlogs</div>
          <div>list of blogs</div>
          <Link href='/admin/add-blog'>Add Blog</Link>
      </div>

      <h3>blogs</h3>
      
      <div>
        { blogs.map((blog: any )=> (
          <div
            key={blog.id}
            className='py-2 border-b flex justify-between'
          >
            <Link href={`/blogs/${blog.id}`} className='hover:text-blue-600 hover:underline'>{blog.title}</Link>
            <div className='flex gap-4'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlogs

