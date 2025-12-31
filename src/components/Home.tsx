import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Heading from "./Heading";

function Home() {
  return (
    <div className="px-8 pt-8">
      {/* pt-24 = padding-top to push content below fixed header */}
      <Heading />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
