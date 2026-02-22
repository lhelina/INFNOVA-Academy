import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Make sure the path is correct

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 border-b border-gray-100">
      <Link
        to="/"
        className="flex items-center group shrink-0 relative -top-[1px]"
      >
        <img
          src={logo}
          alt="INFNOVA Technologies"
          className="h-10 md:h-16 w-auto block object-contain transition-transform group-hover:scale-105 duration-300"
        />
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-brand transition-colors">
          Courses
        </Link>
        <a href="#" className="hover:text-brand transition-colors">
          About
        </a>
        <a href="#" className="hover:text-brand transition-colors">
          Contact
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-brand px-4 py-2 hover:opacity-80">
          Sign In
        </button>
        <button className="bg-brand text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-brand/20 hover:bg-orange-600 transition-all">
          Enroll Now
        </button>
      </div>
    </nav>
  );
}
