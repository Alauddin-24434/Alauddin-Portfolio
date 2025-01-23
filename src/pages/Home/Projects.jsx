import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../config/apiConfig";

const Portfolio = () => {
  const [projectsData, setProjectsData] = useState([]);
  console.log(projectsData);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BASE_URL}/projects`);
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto flex flex-col gap-y-6 p-4 md:p-0  top-10 ">
      <div className=" w-full py-4 rounded-lg pl-2  text-[#E0E0E0]">
        <h2 className="text-4xl font-extrabold underline leading-tight text-center  uppercase">
          My Projects
        </h2>
      </div>

      {projectsData?.map((data, index) => {
        let firstChild, secondChild, imageStyle;

        if (index === 0) {
          // First Card Design
          firstChild =
            "lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 ";
          secondChild =
            "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0";
          imageStyle = "lg:right-0";
        } else if (index === 1) {
          // Second Card Design

          firstChild =
            "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24";
          secondChild =
            "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2";
          imageStyle = "lg:left-0";
        } else {
          // Default Design for other cards
          firstChild =
            "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 ";
          secondChild =
            "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0";
          imageStyle = "lg:right-0";
        }

        return (
          <div className="relative " key={index}>
            <div className={firstChild}>
              <div className={secondChild}>
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      {data?.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      The AI product utilizes advanced NLP algorithms to
                      understand and interpret human language, enabling it to
                      accurately process and analyze text-based inputs.
                    </p>
                    <p className="mt-4 text-lg text-gray-300">Technologies:</p>
                    <div className="mt-6 flex gap-x-3">
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href={data?.link || data?.liveLink}
                      >
                        Visit
                      </a>
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href={data?.frontEndLink}
                      >
                        Github Front-End
                      </a>
                      <a
                        className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        href={data?.backEndLink}
                      >
                        Github Backend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className=" lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className={` rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none ${imageStyle}`}
                    src={data?.imageHref}
                    alt={data?.title}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
