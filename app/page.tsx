import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div id="container">

      <div id="left">
        <Hero />
        <Navbar />
        <Contact />
      </div>

      <div id="right">
        <About />
        <Experience></Experience>
      </div>

    </div>
  );
}
