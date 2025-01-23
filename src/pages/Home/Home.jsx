import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config/apiConfig";
import image from "../../../public/alauddin1.png";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  const [resumeUrl, setResumeUrl] = useState("");
  const words = [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fetchResumeUrl = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/resumes-last`);
        const uniqueId = response?.data?.response;
        const url = `https://drive.google.com/uc?id=${uniqueId}&export=download`;
        setResumeUrl(url);
      } catch (error) {
        console.error("Error fetching resume URL:", error);
      }
    };

    fetchResumeUrl();
  }, []);

  useEffect(() => {
    let timeout;

    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else if (displayedText === currentWord) {
      if (blinkCount < 3) {
        timeout = setTimeout(() => {
          setShowCursor((prev) => !prev);
          setBlinkCount((prev) => prev + 1);
        }, 300);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setBlinkCount(0);
        }, 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, blinkCount, words]);

  return (
    <div className="relative flex items-center justify-center min-h-[70vh]  shadow-lg">
      <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-4 gap-8 w-full">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-normal leading-tight text-[#E0E0E0] dark:text-white">
            Hey, I am Md Alauddin
          </h2>
          <p className="max-w-lg mt-3 text-5xl font-bold leading-relaxed text-[#E0E0E0] dark:text-gray-300">
            {displayedText}
            <span
              className={`transition-opacity duration-300 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
          </p>

         
          {/* Resume Download and Read Blog Buttons */}
<div className="flex gap-4 mt-6">
  {resumeUrl ? (
    <a
      href={resumeUrl}
      download
      className="inline-flex items-center justify-center px-6 py-3 text-[#E0E0E0] bg-blue-700 hover:bg-blue-600 rounded-lg text-lg md:text-xl transition duration-200"
    >
      <span className="flex gap-2 items-center">
        <FaFileDownload />
        Resume
      </span>
    </a>
  ) : (
    <p className="text-gray-700 dark:text-gray-400">Loading resume link...</p>
  )}

  <button className="inline-flex items-center justify-center px-6 py-3 text-[#E0E0E0] bg-[#444444] hover:bg-blue-600 rounded-lg text-lg md:text-xl transition duration-200">
    Read Blog
  </button>
</div>

        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative max-w-md w-full">
           

            {/* Image */}
            <img
              className="relative w-full h-full rounded-md object-cover"
              src={image}
              alt="Md Alauddin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
