import { prisma } from '@/lib/prisma';

export async function POST(req: Request){
    const {title, content, username, thumbnailImg} = await req.json();

    
    const postedBlog = await prisma.blog.create({
        data: {
            title,
            content,
            username,
            thumbnailImg
        }
    });

    if(postedBlog){
        return new Response(JSON.stringify({
            blog: postedBlog
        }), {status: 200})
    }

    return new Response(JSON.stringify({
        msg: "failed"
    }), {status: 400})

    
}


export async function GET(req: Request){
    
    const blogs = await prisma.blog.findMany({
        select: {
            id: true,
            title: true,
            username: true,
            thumbnailImg: true,
            likes: true,
            createdAt: true,
            views: true,
            comments: true
        }
    });

    if(blogs){
        return new Response(JSON.stringify(blogs), {status: 200});
    }

    return new Response(JSON.stringify({msg: "failed"}), {status: 400})

}