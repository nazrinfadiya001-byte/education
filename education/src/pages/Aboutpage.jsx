import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <div className="min-h-screen bg-[#f8f4ff] overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-5 bg-white shadow-sm">
        <h1 className="text-3xl font-extrabold text-purple-700">
          EduStar<span className="text-pink-500">.</span>
        </h1>

        <div className="flex gap-4 md:gap-8 font-semibold text-gray-700 text-sm md:text-base">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/about" className="text-purple-600">About</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-bold">
              ABOUT EDUSTAR
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-7">
              Education is the key to
              <span className="text-purple-600"> Success.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Welcome to EduStar! We believe that every student deserves
              quality education and the opportunity to achieve their dreams.
              Our platform makes learning simple, creative and enjoyable.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-800 hover:-translate-y-1 transition duration-300"
              >
                Contact Us →
              </Link>

              <Link
                to="/"
                className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 transition"
              >
                Explore Home
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -top-8 -right-5 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
              alt="Students learning together"
              className="relative w-full h-[350px] md:h-[480px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-5 bg-white p-5 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-purple-700">100%</h2>
              <p className="text-gray-500 text-sm">Learning Motivation</p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-purple-600 font-bold tracking-widest">
            WHAT WE BELIEVE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Our Mission & Vision
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5">
            We are passionate about creating a better learning experience
            for students everywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="bg-purple-50 p-10 rounded-3xl text-left hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-purple-700">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-7 mt-4">
                Our mission is to provide quality education, encourage
                creativity and help students develop knowledge and skills
                for their future.
              </p>
            </div>

            <div className="bg-pink-50 p-10 rounded-3xl text-left hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold text-pink-600">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-7 mt-4">
                Our vision is to build a learning community where every
                student feels inspired, confident and ready to achieve
                their dreams.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000"
            alt="Students in a classroom"
            className="w-full h-[350px] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <p className="text-purple-600 font-bold tracking-widest">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
              Learn Better. Grow Better.
            </h2>

            <div className="space-y-6 mt-8">

              <div className="flex gap-4">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="font-bold text-xl">Quality Learning</h3>
                  <p className="text-gray-500 mt-2">
                    Learn with simple and effective educational resources.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">💡</span>
                <div>
                  <h3 className="font-bold text-xl">Creative Ideas</h3>
                  <p className="text-gray-500 mt-2">
                    Improve your creativity and discover new possibilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="font-bold text-xl">Bright Future</h3>
                  <p className="text-gray-500 mt-2">
                    Build your skills and move towards your goals.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-700 to-pink-500 rounded-[35px] p-10 md:p-16 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mt-5 text-purple-100 text-lg">
            Let's learn, grow and create a brighter future together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-purple-700 px-9 py-4 rounded-full font-bold hover:bg-purple-100 transition"
          >
            Get In Touch →
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white text-center py-8">
        <h2 className="text-2xl font-bold text-purple-400">EduStar.</h2>
        <p className="text-gray-400 mt-3">
          Learn Today. Lead Tomorrow.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          © 2026 EduStar. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Aboutpage;