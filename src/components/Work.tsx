function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-[96px] py-20"
    >
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Work
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl">
          A selection of projects and professional work showcasing my skills
          in frontend development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Project Card 1 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <a
            href="https://papatime.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Screen Shot 2025-12-30 at 21.32.45.png"
              alt="Papatime Project"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Freelance Project – Papatime
            </h3>

            <p className="text-gray-600 mb-4">
              Developed reusable UI components and widgets for a content-based
              platform. Focused on performance, responsiveness, and scalability.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TypeScript", "Next.js", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <a
              href="https://papatime.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 font-semibold hover:underline"
            >
              View Live Project →
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
          <a href="#" aria-label="Portfolio project preview">
            <img
              src="/Screen Shot 2025-12-30 at 21.44.23.png"
              alt="Portfolio Website"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </a>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Personal Portfolio Website
            </h3>

            <p className="text-gray-600 mb-4">
              Designed and developed a modern, responsive portfolio website to
              showcase projects, skills, and professional experience.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS", "Git", "GitHub"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-block text-blue-600 font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Work;
