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
        <section className="flex bg-[#111418] justify-center w-[250px] h-screen">
            <div className="my-10 relative">
                <div className="avatar flex justify-center w-[185px] h-[185px] bg-slate-700 rounded-full items-center">
                    <img className="w-[170px]  h-[170px] rounded-full" src="https://i.ibb.co/4dTNzdQ/372002137-825926605796870-1853976742705308208-n.jpg" alt="Avatar" />
                </div>
                <ul className="flex flex-col text-white items-center my-4 gap-y-4">

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
                            Skill
                        </button>
                    </li>


                    <li>
                        <button onClick={() => scrollToSection("project")} style={{ color: activeSection === "project" ? "#FFD700" : "inherit" }}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")} style={{ color: activeSection === "contact" ? "#FFD700" : "inherit" }}>
                            Contact
                        </button>
                    </li>
                </ul>
                <ul className="flex w-full flex-row items-center gap-4 justify-center absolute bottom-0 text-white">
                    <li>
                        <FaFacebookF />
                    </li>
                    <li>
                        <FaMedium />
                    </li>
                    <li>
                       < FaLinkedin></FaLinkedin>
                    </li>
                    <li>
                      <FaGithub/>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;

