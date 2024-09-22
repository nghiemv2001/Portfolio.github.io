import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/navbar/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Parallax from "./components/navbar/parallax/Parallax";
import Skills from "./components/navbar/skills/Skills";
import Projects from "./components/navbar/projects/Projects";
const App = () => {
  return (
    <div>
       <Cursor/>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>

      <Projects />
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
