export const runtime = "nodejs";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export async function GET() {
  // 🔹 Tentukan path font Poppins lebih dulu
  const fontPath = path.join(process.cwd(), "public", "fonts", "Poppins-Regular.ttf");

  // 🔹 Cek dulu apakah font ada
  if (!fs.existsSync(fontPath)) {
    throw new Error(`Font Poppins tidak ditemukan di ${fontPath}`);
  }

  // ✅ Inisialisasi PDF dengan font default = Poppins
  const doc = new PDFDocument({ font: fontPath });

  const chunks: Uint8Array[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));
  const endPromise = new Promise<void>((resolve) => doc.on("end", resolve));

  // 🔹 Tulis isi PDF
  doc.fontSize(18).text("Daftar Penerima Sertifikat", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text("Nama: Arief Yuda");
  doc.text("Instansi: Foscal Academy");
  doc.text("Fasilitas: E-Sertifikat, Materi, Rekaman Video");

  doc.end();
  await endPromise;

  const pdfBuffer = Buffer.concat(chunks);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=sertifikat.pdf",
    },
  });
}
