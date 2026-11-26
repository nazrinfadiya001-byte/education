import { motion } from "framer-motion";

function Home() {
  return (
    <section className="relative mx-auto grid min-h-[650px] w-[92%] max-w-7xl overflow-hidden bg-[#f6f0ff] px-7 py-16 md:grid-cols-2 md:items-center md:px-16">

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="mb-6 text-xs font-bold tracking-[3px] text-purple-600">
          ✨ WELCOME TO STARSCHOOL
        </p>

        <h1 className="font-serif text-4xl font-extrabold leading-tight text-[#211638] md:text-5xl lg:text-[58px]">
          Unique education system that pushes you to{" "}
          <span className="text-purple-600">success.</span>
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat. Explore new skills and
          achieve your dreams with our modern learning platform.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">

          <a
            href="#courses"
            className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-9 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300 transition hover:-translate-y-1 hover:shadow-xl"
          >
            Join Now →
          </a>

          <a
            href="#introduction"
            className="flex items-center gap-3 text-sm font-semibold text-[#211638] hover:text-purple-600"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff8355] text-white">
              ▶
            </span>
            Watch Introduction
          </a>

        </div>

        {/* STATISTICS */}

        <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-purple-100 rounded-xl bg-white p-5 shadow-lg shadow-purple-100">

          <div className="text-center">
            <p className="text-xs text-gray-500">Careers</p>
            <h2 className="text-3xl font-extrabold text-purple-600">+100</h2>
            <button className="mt-2 rounded-full bg-purple-600 px-5 py-1 text-xs text-white">
              Explore
            </button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">Staff</p>
            <h2 className="text-3xl font-extrabold text-purple-600">+2k</h2>
            <button className="mt-2 rounded-full bg-purple-600 px-5 py-1 text-xs text-white">
              Teachers
            </button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">Success Stories</p>
            <h2 className="text-3xl font-extrabold text-purple-600">+200k</h2>
            <button className="mt-2 rounded-full bg-purple-600 px-5 py-1 text-xs text-white">
              Explore
            </button>
          </div>

        </div>
      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mx-auto mt-16 flex h-[430px] w-full max-w-lg items-center justify-center md:mt-0"
      >

        {/* DECORATIVE SHAPES */}

        <div className="absolute left-5 top-2 h-36 w-36 rounded-full border-[22px] border-[#00ae8d]"></div>

        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#ff8355]"></div>

        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-purple-600"></div>

        <div className="absolute bottom-0 right-0 h-36 w-36 rounded-tl-full bg-[#ffd83d]"></div>

        {/* STUDENT IMAGE */}

        <div className="relative z-10 h-[390px] w-[70%] overflow-hidden rounded-t-[150px] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800"
            alt="Student learning"
            className="h-full w-full object-cover"
          />
        </div>

        {/* DOT PATTERN */}

        <div className="absolute right-0 top-32 z-0 text-5xl leading-5 tracking-widest text-[#211638]">
          · · ·<br />· · ·<br />· · ·<br />· · ·
        </div>

        <div className="absolute bottom-10 right-2 z-20 rounded-full bg-white px-5 py-3 text-xs font-bold shadow-xl">
          ✨ Learn & Grow
        </div>

      </motion.div>

    </section>
  );
}

export default Home;