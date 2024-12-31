import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedin ,FaGithub,FaMedium} from "react-icons/fa";
const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Adjust the threshold as needed

        // Observe all sections
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        // Clean up observer on component unmount
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
        <section className="flex bg-[#10002b] justify-center w-[250px] h-screen">
            <div className="my-10 relative">
                <div className="avatar flex justify-center w-[185px] h-[185px] bg-slate-700 rounded-full items-center">
                    <img className="w-[170px] cursor-zoom-in h-[170px] rounded-full" src="https://i.ibb.co/HFTgSpr/Alauddin-removebg-preview-1.png" alt="Avatar" />
                </div>
                <ul className="flex flex-col text-white text-lg items-center my-4 gap-y-4">

                    <li>
                        <button onClick={() => scrollToSection("home")} style={{ color: activeSection === "home" ? "#FFD700" : "inherit" }}>
                            Home
                        </button>
                    </li>  <li>
                        <button onClick={() => scrollToSection("about")} style={{ color: activeSection === "about" ? "#FFD700" : "inherit" }}>
                            About Me

                        </button>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection("skill")} style={{ color: activeSection === "skill" ? "#FFD700" : "inherit" }}>
                            Skills
                        </button>
                    </li>


                    <li>
                        <button onClick={() => scrollToSection("project")} style={{ color: activeSection === "project" ? "#FFD700" : "inherit" }}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("education")} style={{ color: activeSection === "education" ? "#FFD700" : "inherit" }}>
                         Education
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")} style={{ color: activeSection === "contact" ? "#FFD700" : "inherit" }}>
                            Contact Us
                        </button>
                    </li>
                </ul>
                <ul className="flex w-full flex-row items-center gap-4 justify-center absolute bottom-0 text-white">
            <li>
                <a href="https://www.facebook.com/profile.php?id=100075429342974" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-blue-500"/>
                </a>
            </li>
            <li>
                <a href="https://medium.com/@muhammadalauddin24434" target="_blank" rel="noopener noreferrer">
                    <FaMedium className="hover:text-blue-500"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/md-alauddin-muhammud-alauddin" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500"/>
                </a>
            </li>
            <li>
                <a  href="https://github.com/Alauddin-24434?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub  className="hover:text-blue-500"/>
                </a>
            </li>
        </ul>
            </div>
        </section>
    );
};

export default Sidebar;

