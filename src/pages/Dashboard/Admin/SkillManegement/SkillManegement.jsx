import { useState, useEffect } from "react";
import axios from "axios";
import uploadImageToCloud from "../../../../utils/imageuploadcloudinery";
import BASE_URL from "../../../../config/apiConfig";

const SkillManagement = () => {
  const [skills, setSkills] = useState([]);
  const [newSkillTitle, setNewSkillTitle] = useState("");
  const [newSkillLogo, setNewSkillLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch skills dynamically
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/skills`);
        setSkills(response?.data?.skills);
      } catch (err) {
        setError("Failed to fetch skills. Please try again later.");
      }
    };

    fetchSkills();
  }, []);

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewSkillLogo(file);
    }
  };

  // Add a new skill
  const handleAddSkill = async () => {
    if (!newSkillTitle || !newSkillLogo) return;

    try {
      setLoading(true);

      // Upload the logo
      const logoUrl = await uploadImageToCloud(newSkillLogo);

      const newSkill = {
        title: newSkillTitle,
        logo: logoUrl,
      };

      // Save the new skill in the backend
      const response = await axios.post(`${BASE_URL}/skills`, newSkill, {
        headers: { "Content-Type": "application/json" },
      });

      // Update UI
      setSkills([...skills, response.data]);
      setNewSkillTitle("");
      setNewSkillLogo(null);
      setLoading(false);
    } catch (err) {
      console.error("Error adding skill:", err);
      setLoading(false);
    }
  };

  // Remove a skill
  const handleRemoveSkill = async (skillId) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`${BASE_URL}/skills/${skillId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update UI
      setSkills(skills.filter((skill) => skill._id !== skillId));
    } catch (err) {
      console.error("Error removing skill:", err);
    }
  };

  return (
    <div
      className="skill-management-container"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "30px",
        background: "#f9fafb",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2d3748" }}>Skill Management</h2>

      {/* Error Message */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {/* Add Skill Form */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Skill Title"
          value={newSkillTitle}
          onChange={(e) => setNewSkillTitle(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px",
            background: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <input
          type="file"
          onChange={handleFileChange}
          style={{
            padding: "12px",
            width: "100%",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px",
            background: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={handleAddSkill}
          style={{
            padding: "12px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Skill"}
        </button>
      </div>

      {/* List of Skills */}
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        {skills.length > 0 ? (
          skills.map((skill) => (
            <li
              key={skill._id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px",
                marginBottom: "15px",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={skill.logo}
                  alt={skill.title}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "15px",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ fontSize: "18px", color: "#2d3748" }}>{skill.title}</span>
              </div>
              <button
                onClick={() => handleRemoveSkill(skill._id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#555" }}>No skills added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default SkillManagement;
