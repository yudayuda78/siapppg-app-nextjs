import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(){
    try{
        const sertifikat = await prisma.sertifikat.findMany()
        
        return NextResponse.json(
            {
                success: true,
                data: sertifikat,
                message: "Events fetched successfully",
            },
            { status: 200 }
        )
    }catch(error){
        console.error("Error fetching events:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch sertifikat",
            },
            { status: 500 }
        );
    }
}