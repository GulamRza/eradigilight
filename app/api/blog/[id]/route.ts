import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    const id = await req.url.split('/').pop();

    let blog;
    try {
        blog = await prisma.blog.findUnique({
            where: { id }
        });
    } catch (err) {
        // Handle error here
    }

    if (blog) {
        return new Response(JSON.stringify(blog));
    }

    return new Response(JSON.stringify({
        id: id,
        title: "Not Found",
        content: "Unable to load specific blog"
    }));
}

export async function DELETE(req: Request) {
    const id = await req.url.split('/').pop();

    try {
        const deletedBlog = await prisma.blog.delete({
            where: {
                id: id
            }
        });

        return new Response(JSON.stringify({
            msg: "success",
            id: deletedBlog.id
        }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({
            msg: "Error on deleting blog",
            id: id
        }), { status: 500 })
    }
}

export async function PUT(req: Request){
    const id = await req.url.split('/').pop();
    const data = await req.json();

    try{
        const updatedBlog = await prisma.blog.update({
            where: {
                id: id
            },
            data: data
        });

        return new Response(JSON.stringify({
            msg: "success"
        }), { status: 200 })
    }catch(err){
        return new Response(JSON.stringify({
            msg: "failed"
        }), { status: 500 })
    }

}

