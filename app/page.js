import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Testimonial />
      <Contact />
    </>
  );
}
