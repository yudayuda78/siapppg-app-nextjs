export default function Footer() {
  return (
    <footer className="bg-[#0F3460] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.webp" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-[#FCA311]">Siap PPG</span>
          </div>
          <p className="text-gray-300 text-sm">
            Platform untuk pengembangan kompetensi guru melalui event dan sertifikasi. 
            Bersama kami, tingkatkan kualitas dan profesionalisme Anda.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-[#FCA311] mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#FCA311] transition">Beranda</a></li>
            <li><a href="/event" className="hover:text-[#FCA311] transition">Event</a></li>
            <li><a href="/sertifikat" className="hover:text-[#FCA311] transition">Sertifikat</a></li>
            <li><a href="/daftar" className="hover:text-[#FCA311] transition">Daftar</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-[#FCA311] mb-3">Hubungi Kami</h3>
          <p className="text-gray-300 text-sm">
            Email:{" "}
            <a href="mailto:info@siapppg.com" className="hover:text-[#FCA311] transition">
              info@siapppg.com
            </a>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            WhatsApp:{" "}
            <a href="https://wa.me/6281234567890" className="hover:text-[#FCA311] transition">
              +62 812-3456-7890
            </a>
          </p>
        </div>
      </div>

      {/* Garis bawah & copyright */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Siap PPG. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
