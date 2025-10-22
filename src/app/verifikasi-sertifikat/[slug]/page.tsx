import Navbar from "@/component/composite/Navbar";
import Footer from "@/component/composite/Footer";

export default function VerifikasiSertifikatDetail() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-gray-50">
        <div className="max-w-xl bg-white shadow-md rounded-2xl p-8">
          <p className="text-lg font-medium text-gray-700">
            Sertifikat Anda Asli Dengan Nama
          </p>
          <h1 className="text-2xl font-semibold mt-4 text-gray-900">
            Nama: <span className="font-bold">asd</span>
          </h1>
          <h2 className="text-xl mt-2 text-gray-600">
            Instansi: <span className="font-medium">sda</span>
          </h2>
        </div>
      </main>

      <Footer />
    </>
  );
}
