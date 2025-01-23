import BlogList from "../../components/BlogRelated/BlogList/BlogList";
import AboutMe from "../../components/Shared/About/AboutMe";

import Contact from "./Contuct";
import Education from "./Education";
import Home from "./Home";
import Portfolio from "./Projects";

import SkillSection from "./Skill";

const LandingPage = () => {
  return (
    <div className="mt-3 md:mt-0 lg:mt-0">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skill">
        <SkillSection />
      </section>

      <section id="project">
        <Portfolio />
      </section>

      <section id="education">
        <Education />
      </section>
      

      <section id="blog">
        <BlogList />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPage;
