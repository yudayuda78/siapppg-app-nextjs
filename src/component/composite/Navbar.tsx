import Button from "../ui/Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-3 shadow-md sticky top-0 z-50">
      
      <div className="flex items-center justify-between max-w-6xl mx-auto px-0 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo.webp"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold text-black">Siap PPG</span>
        </Link>

        {/* Menu kanan */}
        <div className="flex items-center space-x-6">
          <Link
            href="/event"
            className="text-black font-medium hover:text-gray-700 transition-colors"
          >
            Event
          </Link>

          <Link
            href="/course"
            className="text-black font-medium hover:text-gray-700 transition-colors"
          >
            Course
          </Link>

          <Link
            href="/sertifikat"
            className="text-black font-medium hover:text-gray-700 transition-colors"
          >
            Sertifikat
          </Link>

          <Button name="Login" />
        </div>
      </div>
    </nav>
  );
}
