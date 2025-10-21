export const runtime = "nodejs";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export async function GET() {
  // 📁 Path font dan gambar
  const regularFont = path.join(process.cwd(), "public", "fonts", "Poppins-Regular.ttf");
  const boldFont = path.join(process.cwd(), "public", "fonts", "Poppins-Bold.ttf");
  const imagePath = path.join(process.cwd(), "public", "sertifikat", "sertifikat.png");

  // 🔍 Pastikan semua file tersedia
  if (!fs.existsSync(regularFont)) throw new Error(`Font regular tidak ditemukan di ${regularFont}`);
  if (!fs.existsSync(boldFont)) throw new Error(`Font bold tidak ditemukan di ${boldFont}`);
  if (!fs.existsSync(imagePath)) throw new Error(`Gambar sertifikat tidak ditemukan di ${imagePath}`);

  // ✅ Inisialisasi PDF dengan font default langsung ke Poppins
  const doc = new PDFDocument({
    size: "A4",
    margin: 40,
    font: regularFont, // ⬅️ penting: default font = Poppins
  });

  // ⬇️ Registrasi font tambahan
  doc.registerFont("Poppins-Regular", regularFont);
  doc.registerFont("Poppins-Bold", boldFont);

  // 🔹 Buffer untuk menampung hasil PDF
  const chunks: Uint8Array[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));
  const endPromise = new Promise<void>((resolve) => doc.on("end", resolve));

  // 🖼️ Tambahkan background
  doc.image(imagePath, 0, 0, { width: doc.page.width, height: doc.page.height });

  // ✍️ Isi teks
  doc.fillColor("#000000");
  doc.font("Poppins-Bold").fontSize(20).text("Daftar Penerima Sertifikat", { align: "center" });
  doc.moveDown();

  doc.font("Poppins-Regular").fontSize(12);
  doc.text("Nama: Arief Yuda");
  doc.text("Instansi: Foscal Academy");
  doc.text("Fasilitas: E-Sertifikat, Materi, Rekaman Video");

  // ✅ Akhiri PDF
  doc.end();
  await endPromise;

  const pdfBuffer = Buffer.concat(chunks);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="sertifikat.pdf"',
    },
  });
}
