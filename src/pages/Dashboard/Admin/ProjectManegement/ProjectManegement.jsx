import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../../../config/apiConfig';

// Example URL for your API
const apiUrl = `${BASE_URL}/projects`;

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    imageHref: '',
    category: '',
    title: '',
    liveLink: '',
    frontEndLink: '',
    backEndLink: ''
  });
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateProject = async () => {
    try {
      const response = await axios.post(apiUrl, newProject);
      setProjects([...projects, response.data]);
      setNewProject({ imageHref: '', category: '', title: '', liveLink: '', frontEndLink: '', backEndLink: '' });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setNewProject(project); // Fill form fields with the project data
  };

  const handleUpdateProject = async () => {
    try {
      const response = await axios.put(`${apiUrl}/${editingProject._id}`, newProject);
      setProjects(
        projects.map((project) =>
          project._id === editingProject._id ? response.data : project
        )
      );
      setNewProject({ imageHref: '', category: '', title: '', liveLink: '', frontEndLink: '', backEndLink: '' });
      setEditingProject(null);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8">Project Management</h1>
      
      <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          name="imageHref"
          value={newProject.imageHref}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="category"
          value={newProject.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Project Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="liveLink"
          value={newProject.liveLink}
          onChange={handleInputChange}
          placeholder="Live Link"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="frontEndLink"
          value={newProject.frontEndLink}
          onChange={handleInputChange}
          placeholder="Frontend Link"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="backEndLink"
          value={newProject.backEndLink}
          onChange={handleInputChange}
          placeholder="Backend Link"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={editingProject ? handleUpdateProject : handleCreateProject}
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {editingProject ? 'Update Project' : 'Add Project'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageHref} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-500">{project.category}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                View Project
              </a>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEditProject(project)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project._id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
