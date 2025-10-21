import Navbar from "@/component/composite/Navbar";

export default function Sertifikat() {
  const sertifikatList = [
    {
      id: 1,
      nama: "Workshop React JS Dasar",
      tanggal: "12 Oktober 2025",
      penyelenggara: "Foscal Academy",
      file: "/sertifikat/reactjs.pdf",
    },
    {
      id: 2,
      nama: "Pelatihan UI/UX Design",
      tanggal: "25 September 2025",
      penyelenggara: "MentorKita",
      file: "/sertifikat/uiux.pdf",
    },
    {
      id: 3,
      nama: "Webinar AI dan Machine Learning",
      tanggal: "5 Agustus 2025",
      penyelenggara: "TechTalk Indonesia",
      file: "/sertifikat/ai.pdf",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1174ba] mb-8 text-center">
            Daftar Sertifikat Kamu
          </h1>

          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-[#1174ba] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Nama Sertifikat</th>
                  <th className="py-3 px-4 text-left">Tanggal</th>
                  <th className="py-3 px-4 text-left">Penyelenggara</th>
                  <th className="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sertifikatList.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item.nama}</td>
                    <td className="py-3 px-4">{item.tanggal}</td>
                    <td className="py-3 px-4">{item.penyelenggara}</td>
                    <td className="py-3 px-4 text-center">
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1174ba] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                      >
                        Lihat
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
