import Image from 'next/image';
import { GrView, GrCalendar } from "react-icons/gr";
import { GoComment } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

async function SingleBlogPage({ params }: {
  params: {
    id: string
  }
}) {


  let blog;
  try {
    const res = await fetch(
      process.env.BASE_URL + "/api/blog/" + params.id,
      {
        cache: 'no-store'
      }
    );
    blog = await res.json();

    // Increase the view by one
    await fetch(process.env.BASE_URL + "/api/blog/" + params.id, {
      method: "PUT",
      body: JSON.stringify({ views: blog.views + 1 })
    });


  } catch (err) {
    blog = { title: "Not Found", content: "Content Not Found", comments: [] };
    console.log(err);
  }

  return (
    <>
      <div className='p-8 lg:p-20 flex flex-col gap-2 min-h-screen'>
        {/* <div className='flex-grow flex flex-col gap-4'> */}
        {/* <Image
                  src={blog.thumbnailImg || "/thumbnail_600x400.png"}
                  alt="/thumbnail_600x400.png"
                  width={400}
                  height={200}
                  className='w-full'
                /> */}
        <h1 className='lg:text-[3em] font-bold'>{blog.title}</h1>

        <div className='border-b border-t p-2'>
          <ul className='flex gap-8 font-thin text-sm [&>*]:flex [&>*]:items-center [&>*]:gap-2'>
            <li><GrView /> {blog.views + 1}</li>
            <li><GrCalendar /> {new Date(Date.parse(blog.createdAt)).toDateString()}</li>
            <li><GoComment /> {blog.comments.length}</li>
          </ul>
        </div>

        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        {/* </div> */}
      </div>
    </>
  )
}

export default SingleBlogPage