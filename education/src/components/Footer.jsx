import { GraduationCap } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

        <div className="flex items-center gap-2">
          <GraduationCap size={30} className="text-yellow-400" />
          <h2 className="text-2xl font-extrabold">
            Edu<span className="text-orange-400">Spark</span>
          </h2>
        </div>

        <div className="flex gap-7 text-gray-300">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        <p className="text-gray-400 text-sm">
          © 2026 EduSpark. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;