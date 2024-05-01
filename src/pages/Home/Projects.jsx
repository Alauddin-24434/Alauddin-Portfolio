import React from 'react';
import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';
import DynamicTitle from '../../components/Sidebar/DynamiTitle/DynamicTitle';

const ProjectCard = ({ project }) => {
    const { image, title, description, gitLink, LiveLink } = project;

    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 text-xs mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <a href={gitLink} className="text-blue-500 font-semibold hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="inline-block mr-1" /> GitHub
                    </a>
                    {LiveLink && (
                        <a href={LiveLink} className="text-blue-500 font-semibold hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            <AiFillPlayCircle className="inline-block mr-1" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: 'https://i.ibb.co/4N1VzZz/screencapture-e-commerce-bazar-web-app-2024-05-02-02-41-43.png',
            title: 'Ecommerce Bazar',
            description: 'An e-commerce platform for buying and selling various products.',
            gitLink: 'https://github.com/Alauddin-24434/ecomerce-website',
            LiveLink: 'https://e-commerce-bazar.web.app'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/Ld1rWb1/screencapture-streme-eight-vercel-app-2024-05-02-02-46-07.png',
            title: 'Video Streme',
            description: 'A video streaming application for watching and sharing videos online.',
            gitLink: 'https://github.com/sajalbiswas1/video-stream-client-side',
            LiveLink: 'https://streme-eight.vercel.app/'
        },
        {
            id: 3,
            image: 'https://i.ibb.co/zVbz3d8/g.png',
            title: 'Restaurant',
            description: 'An online platform for browsing and ordering food from restaurants.',
            gitLink: 'https://github.com/Alauddin-24434/NOOR-Resturent',
            LiveLink: 'https://resturent-5e702.web.app/'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/vB85KS6/screencapture-alauddin-24434-github-io-flower-shop-assignment-2024-05-02-03-09-45.png',
            title: 'Flower Shop',
            description: 'An online flower shop for purchasing a variety of flowers.',
            gitLink: 'https://github.com/Alauddin-24434/flower-shop-assignment',
            LiveLink: 'https://alauddin-24434.github.io/flower-shop-assignment/'
        },
    ];

    return (
        <div className="projects-section p-8 h-screen">
            <DynamicTitle title="Projects"/>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
