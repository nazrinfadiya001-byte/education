import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-purple-700">EduStar</h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <section className="min-h-[85vh] flex flex-col justify-center px-10 md:px-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          Learn Today,
          <span className="text-purple-600"> Lead Tomorrow.</span>
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-xl">
          Discover new skills and build your bright future with EduStar.
        </p>

        <Link
          to="/about"
          className="bg-purple-600 text-white px-8 py-4 rounded-full mt-8 w-fit"
        >
          Explore More →
        </Link>
      </section>
    </div>
  );
}

export default Homepage;