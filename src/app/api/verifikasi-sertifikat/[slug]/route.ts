import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request : Request, { params }: { params: { slug: string } }){
    try{
        const { slug } = params;

        const userdatasertifikat = await prisma.datasertifikat.findMany({
            where: {
                slug : slug || undefined
            }
        })

        if(!userdatasertifikat){
            return NextResponse.json(
                {
                    success: false,
                    message: "Sertifikat tidak ditemukan",
                },
                { status: 404 }
                
            )
        }

        return NextResponse.json(
            {
                success: true,
                data: userdatasertifikat,
                message: "Datasertifikat fetched successfully",
            },
            { status: 200 }
        );

    }catch(error){
        console.error("Error fetching sertifikat detail:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch detail verif sertifikat",
            },
            { status: 500 }
        );
    }
}