function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            About Me
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Get to know more about my background, skills, and passion for
            frontend development.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Text Content */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              I am a <span className="font-semibold text-gray-900">Frontend Developer</span>{" "}
              specializing in building responsive, scalable, and user-friendly
              web applications using modern technologies.
            </p>

            <p className="mb-4">
              I have hands-on experience working on{" "}
              <span className="font-semibold">real-world freelancing projects</span>,
              where I developed reusable UI components and widgets for a
              content-based platform.
            </p>

            <p className="mb-4">
              With a strong foundation in component-based architecture, I focus
              on writing <span className="font-semibold">clean, efficient, and maintainable code</span>.
              I am a fast learner, team-oriented, and continuously improving my
              skills to grow into a <span className="font-semibold">Full Stack Developer</span>.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">
              Core Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "Next.js",
                "JavaScript",
                "HTML5",
                "CSS3",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 font-medium text-sm hover:bg-gray-900 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
