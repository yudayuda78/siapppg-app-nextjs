import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try{
        const course = await prisma.course.findMany()

        return NextResponse.json(
             {
                success: true,
                data: course,
                message: "Course fetched successfully",
            },
            { status: 200 }
        )
    }catch(error){
        console.error("Error fetching course:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch sertifikat",
            },
            { status: 500 }
        );
    }
}