
import About from './About';
import Contact from './Contuct';
import Home from './Home';
import Projects from './Projects';
import SkillSection from './Skill';


const LandingPage = () => {
    return (
        <div className=' '>
              <section id="home" >
            
            <Home/>
         </section>
             <section id="about" >
               <About/>
            </section>
           
             <section id="skill" >
               <SkillSection/>
            </section>
            
            {/* <section id="resume">
                <h2>Resume</h2>
          
            </section> */}
            <section id="project">
          
          <Projects/>
            </section>
            <section id="contact">
                <Contact/>
              
            </section>
        </div>
    );
};

export default LandingPage;