import { useEffect, useState } from "react";
import axios from "axios";
import DynamicTitle from "../../components/Sidebar/DynamiTitle/DynamicTitle";
import BASE_URL from "../../config/apiConfig";

const SkillSection = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/skills`); // Replace with your actual API endpoint
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch skills");
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section  className="mt-16">
      

      
      <div className="max-w-7xl mx-auto flex flex-col  gap-y-6 p-4 md:p-0  ">
      <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight text-center  uppercase">
        Skills
        </h2>
      </div>
        
        {/* Loading state */}
        {loading ? (
          <div className="text-lg text-gray-500">Loading skills...</div>
        ) : error ? (
          <div className="text-lg text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Dynamically render skills */}
            {skills?.skills?.map((skill) => (
              <SkillItem
                key={skill?.title}
                title={skill?.title}
                logo={skill?.logo}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const SkillItem = ({ title, logo }) => {
  return (
    <div
      className="skill-item p-6 h-40 w-full md:w-48 rounded-lg shadow-lg flex flex-col items-center justify-center bg-[#E0E0E0] transform transition-all duration-500 ease-out hover:scale-105 hover:rotate-2 hover:shadow-xl"
    >
      <img
        src={logo}
        alt={title}
        className="w-12 h-12 md:w-16 md:h-16 mb-3 object-contain"
      />
      <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A]">
        {title}
      </h3>
    </div>
  );
};

export default SkillSection;
