import React from 'react';
import './Projects.css'; // Import CSS file for styling

const ProjectCard = ({ image, title, description, gitLink, LiveLink }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
            </div>
            <div className="project-details bg-slate-100">
                <h3 className="project-name">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-links">
                    <a href={gitLink} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {LiveLink && <a href={LiveLink} className="project-link" target="_blank" rel="noopener noreferrer">Demo</a>}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    // Sample project data
    const projects = [
        {
            id: 1,
            image: 'https://i.ibb.co/Sxv9TtM/screencapture-real-state-platform-web-app-2023-12-12-02-19-49.png',
            title: 'Real state',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gitLink: "https://github.com/Alauddin-24434/Real-State-Project",
            LiveLink: "https://e-commerce-bazar.web.app" // Add the live link if available
        },
        {
            id: 2,
            image: 'https://i.ibb.co/pwsb8z6/screencapture-resturent-5e702-web-app-2023-12-12-02-23-57.png',
            title: 'Restaurant',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gitLink: "https://github.com/Alauddin-24434/NOOR-Resturent",
            LiveLink: "" // Add the live link if available
        },
        {
            id: 3,
            image: 'https://i.ibb.co/hFrSYCq/screencapture-brandshop-react-project-web-app-2023-12-12-02-27-24.png',
            title: 'Brandshop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gitLink: "https://github.com/Alauddin-24434/Brand-Shop",
            LiveLink: "" // Add the live link if available
        },
        {
            id: 4,
            image: 'https://i.ibb.co/6vpQ2vh/screencapture-training-events-8933e-firebaseapp-2023-12-12-02-29-32.png',
            title: 'Training Events',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gitLink: "https://github.com/programming-hero-web-course-4/b8a9-event-management-Alauddin-24434?tab=readme-ov-file",
            LiveLink: "" // Add the live link if available
        },
    ];

    return (
        <div className="projects-section h-screen overflow-y-auto p-4 w-full mx-auto "  style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <h2 className='text-center text-2xl font-bold my-6'>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        image={project.image} 
                        description={project.description} 
                        gitLink={project.gitLink} 
                        LiveLink={project.LiveLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
