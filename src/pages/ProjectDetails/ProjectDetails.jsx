import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../config/apiConfig';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the "id" param from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) {
    return (
      <div className="text-center py-12">
        <p>Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Full-height image */}
        <img
          src={project.imageHref}
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">{project.title}</h1>

          {/* Project Links and Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            {/* Visit Live Button */}
            <div className="w-full sm:w-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 w-full sm:w-auto text-center"
              >
                Visit Live
              </a>
            </div>

            {/* GitHub Frontend Button */}
            <div className="w-full sm:w-auto">
              <a
                href={project.frontEndLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto text-center"
              >
                GitHub Frontend
              </a>
            </div>

            {/* GitHub Backend Button */}
            <div className="w-full sm:w-auto">
              <a
                href={project.backEndLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 w-full sm:w-auto text-center"
              >
                GitHub Backend
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 text-center"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
