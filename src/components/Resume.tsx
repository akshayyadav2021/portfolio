function Resume() {
  return (
    <div className="px-4">
      {/* pt-24 pushes content below fixed header */}

      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Akshay Yadav
          </h1>
          <p className="mt-2 text-xl text-gray-700">
            Frontend Engineer | React Developer
          </p>
          <p className="mt-2 text-gray-600">
            Aspiring Full Stack Developer | Learning Backend (Node.js) & Cloud
            Deployment
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">1. Freelance Projects</h3>
              <p className="text-gray-600">
                Worked as a freelancer developing reusable components and
                widgets for various websites.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">2. Portfolio Website</h3>
              <p className="text-gray-600">
                Built a responsive portfolio using React, Tailwind CSS, and
                Git/GitHub for version control.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
            Education
          </h2>
          <h3 className="text-2xl font-semibold">
            B.Tech - Meerut Institute of Engineering and Technology
          </h3>
          <p className="text-gray-600 mt-1">2021 - 2025 | CGPA: 7.2/10</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
            Skills
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Frontend */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Frameworks & Libraries
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>REST API</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Tools</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Git & GitHub</li>
                <li>NPM</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
