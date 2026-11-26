import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-md bg-white px-6 py-5 shadow-md md:px-12">

      <Link to="/" className="text-2xl font-extrabold text-[#211638]">
        Star<span className="text-purple-600">School✦</span>
      </Link>

      <div className="hidden items-center gap-10 text-sm text-gray-600 md:flex">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
        <a href="#courses" className="hover:text-purple-600">Courses</a>
        <a href="#teachers" className="hover:text-purple-600">Teachers</a>
        <a href="#testimonial" className="hover:text-purple-600">Testimonial</a>
      </div>

      <Link
        to="/contact"
        className="hidden rounded-full border border-purple-600 px-6 py-2 text-sm text-purple-600 transition hover:bg-purple-600 hover:text-white md:block"
      >
        Contact Us
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl text-purple-600 md:hidden"
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute left-0 top-full mt-2 flex w-full flex-col gap-5 rounded-xl bg-white p-6 shadow-xl md:hidden">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#teachers" onClick={() => setMenuOpen(false)}>Teachers</a>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;