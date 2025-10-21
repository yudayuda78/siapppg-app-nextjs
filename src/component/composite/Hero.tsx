export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#1174ba] to-blue-500 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Teks kiri */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Selamat Datang di <span className="text-yellow-300">Platform Kami</span>
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            Temukan event menarik, dapatkan sertifikat, dan kembangkan potensi kamu bersama kami.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/event"
              className="bg-white text-[#1174ba] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Lihat Event
            </a>
            <a
              href="/daftar"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1174ba] transition"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>

        {/* Gambar kanan */}
        <div className="flex-1 hidden md:block">
          <img
            src="/hero-image.webp"
            alt="Ilustrasi Hero"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
