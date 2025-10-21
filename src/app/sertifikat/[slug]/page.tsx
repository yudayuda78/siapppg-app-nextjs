"use client";

import { useState } from "react";
import Navbar from "@/component/composite/Navbar";
import Button from "@/component/ui/Button";

export default function SertifikatDetail() {
  const pesertaList = [
    {
      nama: "Arief Yuda",
      instansi: "Foscal Academy",
      fasilitas: "E-Sertifikat, Materi, Rekaman Video",
      file: "/sertifikat/arief.pdf",
    },
    {
      nama: "Siti Rahma",
      instansi: "MentorKita",
      fasilitas: "E-Sertifikat, Rekaman Video",
      file: "/sertifikat/siti.pdf",
    },
    {
      nama: "Budi Santoso",
      instansi: "SMAN 1 Bandung",
      fasilitas: "E-Sertifikat, Materi Lengkap",
      file: "/sertifikat/budi.pdf",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredPeserta = pesertaList.filter(
    (p) =>
      p.nama.toLowerCase().includes(search.toLowerCase()) ||
      p.instansi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-6">
          <h1 className="text-2xl font-bold text-[#1174ba] mb-6 text-center">
            Daftar Penerima Sertifikat
          </h1>

          {/* 🔍 Input Pencarian */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              placeholder="Cari nama atau instansi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1174ba] text-black"
            />
          </div>

          {/* 🖥️ Tabel untuk Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1174ba] text-white">
                  <th className="py-3 px-4 text-left w-12">No</th> 
                  <th className="py-3 px-4 text-left">Nama</th>
                  <th className="py-3 px-4 text-left">Instansi</th>
                  <th className="py-3 px-4 text-left">Fasilitas</th>
                  <th className="py-3 px-4 text-center">Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredPeserta.length > 0 ? (
                  filteredPeserta.map((p, index) => (
                    <tr
                      key={index}
                      className={`border-b hover:bg-blue-50 transition ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="py-3 px-4 text-center text-gray-700 font-medium">
          {index + 1}
        </td>
                      <td className="py-3 px-4 text-black">{p.nama}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => alert(`Detail ${p.instansi}`)}
                          className="bg-[#1174ba] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                        >
                          {p.instansi}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <Button name="Fasilitas"></Button>
                        {p.fasilitas}</td>
                      <td className="py-3 px-4 text-center">
                        <a
                            href="/api/generatepdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#1174ba] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-6 text-center text-gray-500 italic"
                    >
                      Tidak ditemukan hasil.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 📱 Tampilan Mobile */}
          <div className="md:hidden space-y-4">
            {filteredPeserta.length > 0 ? (
              filteredPeserta.map((p, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-4 shadow-sm"
                >
                  <p className="text-sm text-gray-600 mb-1">No: {index + 1}</p>

                  <p className="font-semibold text-[#1174ba] text-lg">
                    {p.nama}
                  </p>

                  <button
                    onClick={() => alert(`Detail ${p.instansi}`)}
                    className="mt-2 bg-[#1174ba] text-white px-3 py-2 rounded-lg w-full text-sm font-medium hover:bg-blue-600 transition"
                  >
                    {p.instansi}
                  </button>

                  <p className="text-gray-500 text-sm mt-2">
                    <span className="font-medium text-gray-700">
                      Fasilitas:
                    </span>{" "}
                    {p.fasilitas}
                  </p>

                  <a
                     href="/api/generatepdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block w-full text-center bg-[#1174ba] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Download Sertifikat
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 italic">
                Tidak ditemukan hasil.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
