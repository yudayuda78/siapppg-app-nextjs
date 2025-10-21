export default function EventContent() {
  const events = [
    {
      id: 1,
      title: "Workshop Peningkatan Kompetensi Guru",
      date: "25 Oktober 2025",
      location: "Online via Zoom",
      image: "/event1.webp",
    },
    {
      id: 2,
      title: "Pelatihan Pembuatan Media Pembelajaran Interaktif",
      date: "2 November 2025",
      location: "Yogyakarta",
      image: "/event2.webp",
    },
    {
      id: 3,
      title: "Seminar Nasional Pendidikan Inovatif",
      date: "10 November 2025",
      location: "Jakarta",
      image: "/event3.webp",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-10">
          Kumpulan <span className="text-[#FCA311]">Event</span> Menarik
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#0F3460] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  📅 {event.date}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  📍 {event.location}
                </p>
                <a
                  href={`/event/${event.id}`}
                  className="inline-block bg-[#FCA311] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e5940c] transition"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
