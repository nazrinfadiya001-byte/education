import { Link } from "react-router-dom";

function Contactpages() {
  return (
    <div className="min-h-screen bg-purple-50">
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-purple-700">EduStar</h1>

        <div className="flex gap-8 font-semibold text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="text-purple-600">Contact</Link>
        </div>
      </nav>

      <section className="min-h-[85vh] flex items-center justify-center px-6 py-16">
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 max-w-3xl w-full">
          <p className="text-purple-600 font-bold text-center">GET IN TOUCH</p>

          <h1 className="text-4xl font-bold text-center text-gray-900 mt-3">
            Contact <span className="text-purple-600">Us</span>
          </h1>

          <p className="text-gray-500 text-center mt-4">
            Have questions? We would love to hear from you.
          </p>

          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for contacting us!");
              e.target.reset();
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold hover:bg-purple-800 transition"
            >
              Send Message →
            </button>
          </form>

          <div className="text-center mt-8">
            <Link to="/" className="text-purple-600 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactpages;