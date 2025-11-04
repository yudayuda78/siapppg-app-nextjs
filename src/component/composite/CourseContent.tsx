"use client"
import { useState, useEffect } from "react";



export default function CourseContent() {
    const [courses, setCourses] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        async function fetchDataCourse(){
            try{
                const response = await fetch("/api/course")
                if (!response.ok) {
                    throw new Error("Gagal Ambil Data");
                }
                const data = await response.json();
                setCourses(data)
            }catch(error: any){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }

        fetchDataCourse()
    }, [])

    console.log(courses)
  

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0F3460] mb-4">
          Kumpulan <span className="text-[#FCA311]">Course</span> Menarik
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Tingkatkan skill kamu melalui berbagai course interaktif yang dirancang untuk semua level — dari pemula hingga mahir.
        </p>

        {loading && (
            <p className="text-center text-gray-500">Memuat data...</p>
          )}
          {error && (
            <p className="text-center text-red-500">
              Terjadi kesalahan: {error}
            </p>
          )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-[#0F3460] mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {course.description}
              </p>
              <button className="bg-[#FCA311] text-white px-4 py-2 rounded-full font-medium hover:bg-[#e28c0a] transition">
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
