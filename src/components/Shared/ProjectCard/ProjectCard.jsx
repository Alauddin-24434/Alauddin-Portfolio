import React from 'react';
import { AiFillGithub, AiFillPlayCircle } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
    const { image, title, description, gitLink, LiveLink } = project;

    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Image Section */}
            <div className="relative w-full h-56">
                <img src={image} alt={title} className="w-full h-full object-cover transition duration-300 hover:opacity-80" />
            </div>
            <div className="p-6">
                {/* Title and Description */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>

                {/* Links */}
                <div className="flex justify-between items-center mt-4">
                    <a
                        href={gitLink}
                        className="text-blue-600 font-semibold hover:text-blue-800 flex items-center transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub className="mr-2 text-lg" /> GitHub
                    </a>

                    {LiveLink && (
                        <a
                            href={LiveLink}
                            className="text-green-600 font-semibold hover:text-green-800 flex items-center transition duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillPlayCircle className="mr-2 text-lg" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
