function Heading() {
  return (
    <section
      id="home"
      className="scroll-mt-[96px] flex flex-col md:flex-row items-center justify-between gap-10 py-20"
    >
      {/* Left Content */}
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Hello, <br />
          I'm <span className="text-blue-600">Akshay Yadav</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
          Frontend Developer · React
        </p>

        <p className="mt-4 max-w-xl text-gray-600">
          I build modern, responsive web applications using React, Tailwind CSS,
          and best UI practices. Passionate about creating clean and scalable
          user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/akshayyadav2021"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:border-blue-500 hover:text-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-yadav-963368220"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ay3857795@gmail.com"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Email
          </a>
        </div>
      </div>

      {/* Optional Right Side (Image or Accent) */}
      <div className="hidden md:block">
        <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-5xl font-bold">
          AY
        </div>
      </div>
    </section>
  );
}

export default Heading;
