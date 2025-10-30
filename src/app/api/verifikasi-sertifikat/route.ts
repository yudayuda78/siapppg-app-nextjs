import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const verifsertif = await prisma.datasertifikat.findMany()

        return NextResponse.json(
            {
                success: true,
                data: verifsertif,
                message: "Datasertifikat fetched successfully",
            },
            { status: 200 }
        )
        

    }catch(error){
        console.error("Error fetching sertifikat detail:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch verifikasi sertifikat",
            },
            { status: 500 }
        )}
}