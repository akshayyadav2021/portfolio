function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Text */}
        <p className="text-center md:text-left text-gray-300">
          © {new Date().getFullYear()} Made by{" "}
          <span className="font-semibold text-white hover:text-yellow-400 transition-colors">
            Akshay Yadav
          </span>
        </p>

        {/* Optional button or social link */}
        <div className="mt-4 md:mt-0">
          <a
            href="mailto:akshay@example.com"
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
