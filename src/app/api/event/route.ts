import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try{
        const event = await prisma.event.findMany();
        return NextResponse.json(event);
    }catch(error){
        return NextResponse.json(
            { error: "Failed to fetch event" },
            { status: 500 }
        )
    }
}