import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import profile from '../../../public/alauddin.png';
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex shadow-md justify-center w-[250px] h-screen sidebar">
      <div className="my-10 relative">
        <div className="avatar flex justify-center w-[185px] h-[185px] border rounded-full items-center">
          <img
            className="w-[180px] cursor-zoom-in h-[180px] rounded-full"
            src={profile}
            alt="Avatar"
          />
        </div>

        <ul className="flex w-full flex-row items-center gap-4 justify-center absolute top-52">
          <li>
            <a
              href="https://www.linkedin.com/in/alauddin-dev"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <FaLinkedin className="hover:text-[#1CD15D] text-[#E0E0E0] bg-blue-700 rounded-lg text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@muhammadalauddin24434"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="hover:text-[#1CD15D] text-[#E0E0E0] bg-blue-700 rounded-lg text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Alauddin-24434"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-[#1CD15D] text-[#E0E0E0]  bg-blue-700 rounded-full text-2xl" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col text-black text-lg  my-20 gap-y-4">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`w-full py-2 text-center rounded-lg text-[#E0E0E0]  ${activeSection === "home" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`w-full py-2 text-center rounded-lg  text-[#E0E0E0] ${activeSection === "about" ? " bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skill")}
              className={`w-full py-2 text-center rounded-lg text-[#E0E0E0]  ${activeSection === "skill" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("project")}
              className={`w-full py-2 text-center rounded-lg text-[#E0E0E0]  ${activeSection === "project" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("education")}
              className={`w-full py-2 text-center rounded-lg text-[#E0E0E0]  ${activeSection === "education" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("blog")}
              className={`w-full py-2 text-center rounded-lg  text-[#E0E0E0] ${activeSection === "blog" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full py-2 text-center rounded-lg text-[#E0E0E0]  ${activeSection === "contact" ? "bg-[#444444] text-[#E0E0E0]" : "hover:bg-[#232323] hover:text-white"}`}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
