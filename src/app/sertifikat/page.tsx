"use client";
import Navbar from "@/component/composite/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sertifikat() {
  const [sertifikatList, setSertifikatList] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataSertif() {
      try {
        const response = await fetch("/api/sertifikat");
        if (!response.ok) {
          throw new Error("Gagal Ambil Data");
        }
        const data = await response.json();
        setSertifikatList(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDataSertif();
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-0 md:px-6">
          <h1 className="text-3xl font-bold text-[#1174ba] mb-8 text-center">
            Daftar Sertifikat Kamu
          </h1>

          {loading && (
            <p className="text-center text-gray-500">Memuat data...</p>
          )}
          {error && (
            <p className="text-center text-red-500">
              Terjadi kesalahan: {error}
            </p>
          )}

          {!loading && !error && sertifikatList.data?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
              {sertifikatList.data.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Slug: {item.slug}
                    </p>
                  </div>

                  <Link href={`/sertifikat/${item.slug}`}>
                  <button
                    className="bg-[#1174ba] text-white font-medium py-2 rounded-xl hover:bg-[#0e5e97] transition"
                  >
                    Lihat Sertifikat
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            !loading &&
            !error && (
              <p className="text-center text-gray-500">
                Belum ada sertifikat tersedia.
              </p>
            )
          )}
        </div>
      </section>
    </>
  );
}
