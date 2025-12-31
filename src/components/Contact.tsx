function Contact() {
  return (
    <section id="contact" className="scroll-mt-[96px] py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Title */}
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Contact
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Let’s Work <br />
          Together
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl mx-auto text-gray-600 text-base md:text-lg">
          I’m currently open to frontend development opportunities, freelance
          projects, and collaborations. Let’s build something great together.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          {/* Primary CTA */}
          <a
            href="mailto:ay3857795@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
          >
            Schedule a Call
          </a>

          {/* Secondary CTA */}
          <a
            href="https://www.linkedin.com/in/akshay-yadav-963368220"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gray-300 font-semibold text-gray-900 hover:bg-gray-100 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
