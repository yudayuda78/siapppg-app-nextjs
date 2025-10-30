import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params} : {params: { slug: string } }){
    const {slug} = params

    try{
        const coursedetail = await prisma.course.findUnique(
            {
                where:{
                    slug: slug || undefined
                },
                include: {
                    topics: true,
                },
            }
        )

        return NextResponse.json(
            {
                succes: true,
                data: coursedetail,
                message: "Detail Course Fetch Succesfully"
            }
        )
    }catch(error){
         console.error("Error fetching course:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch detail course",
            },
            { status: 500 }
        );
    }
}