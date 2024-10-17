import { prisma } from "@/lib/prisma";


export async function GET(request: Request){

    const user = await prisma.admin.findMany({});

    return new Response(JSON.stringify({user}), {status: 200});
}

export async function POST(req: Request){


    const {user, session} = await req.json();
    
    const newUser = await prisma.admin.create({
        data: user
    });

    if(newUser){
        return new Response(JSON.stringify({
            msg: "User Added Succesfully"
        }), {status: 200})
    }

    return new Response(JSON.stringify({
        msg: "Something Went Wrong"
    }), {status: 400})
    
}