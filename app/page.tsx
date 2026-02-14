import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Experience from "@/components/Experience";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <div id="container">

      <div id="left">
        <Hero />
        <Navbar />
        <Contact />
      </div>

      <div id="right">
        <div className="rightContent">
          <About />
          <Experience></Experience>
          <Projects></Projects>
        </div>
      </div>

    </div>
  );
}
