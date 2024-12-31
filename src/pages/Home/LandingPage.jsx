
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';
import AboutMe from '../../components/Shared/About/About';
import About from '../../components/Shared/About/About';
import Contact from './Contuct';
import Education from './Education';
import Home from './Home';
import Projects from './Projects';
import SkillSection from './Skill';


const LandingPage = () => {
    return (
        <div className='relative bg-[#841CF6]'>
              <ParticleBackground />
            <section id="home" >

                <Home />
            </section>
    
            <section id="about" >
                <AboutMe />
            </section>

            <section id="skill" >
                <SkillSection />
            </section>


            <section id="project">

                <Projects />
            </section>

            <section id="education">

                <Education />
            </section>
            <section id="contact">
                <Contact />

            </section>
        </div>
    );
};

export default LandingPage;