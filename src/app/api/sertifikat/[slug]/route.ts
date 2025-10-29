import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request,{ params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    const sertifikat = await prisma.sertifikat.findUnique({
      where: { slug },
    });

    if (!sertifikat) {
      return NextResponse.json(
        {
          success: false,
          message: "Sertifikat tidak ditemukan",
        },
        { status: 404 }
      );
    }

    const detailsertifikat = await prisma.datasertifikat.findMany({
      where: { kegiatan: slug },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          sertifikat,
        },
        message: "Datasertifikat fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching sertifikat detail:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch detail datasertifikat",
      },
      { status: 500 }
    );
  }
}
