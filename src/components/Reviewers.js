/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Reviewers() {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <>
      <div className=" bg-[#f7f9fa]">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-96 overflow-hidden rounded-lg">
            <div
              data-carousel-item="active"
              className="hidden duration-700 ease-in-out"
            >
              <div
                style={{ width: "800px" }}
                className="mx-64 items-center my-10 flex  justify-center bg-white border border-black py-8 px-4"
              >
                <div className="px-3">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="text-md my-3 max-w-md">
                    {expanded
                      ? "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand."
                      : truncateText(
                          "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                          100
                        )}
                  </p>
                  <p
                    className="underline text-[#401b9c] cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {expanded ? "Read less" : "Read more"}
                  </p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <img
                    className="w-36 mx-auto rounded-full"
                    src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg"
                    alt="img"
                  />
                  <p className="font-black text-lg mt-4">Jim Hemgen</p>
                  <p className="text-[#6a6f73]">Principal</p>
                  <p className="">Booz Allen Hamilton</p>
                </div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                style={{ width: "800px" }}
                className="mx-64 items-center my-10 flex  justify-center bg-white border border-black py-8 px-4"
              >
                <div className="px-3">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="text-md my-3 max-w-md">
                    {expanded
                      ? "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand."
                      : truncateText(
                          "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                          100
                        )}
                  </p>
                  <p
                    className="underline text-[#401b9c] cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {expanded ? "Read less" : "Read more"}
                  </p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <img
                    className="w-36 mx-auto rounded-full"
                    src="https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png"
                    alt="img"
                  />
                  <p className="font-black text-lg mt-4">Ian Stevens</p>
                  <p className="text-[#6a6f73]">
                    Global Head of Capability Development North America
                  </p>
                  <p className="">Publicis Sapient</p>
                </div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                style={{ width: "800px" }}
                className="mx-64 items-center my-10 flex  justify-center bg-white border border-black py-8 px-4"
              >
                <div className="px-3">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="text-md my-3 max-w-md">
                    {expanded
                      ? "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand."
                      : truncateText(
                          "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                          100
                        )}
                  </p>
                  <p
                    className="underline text-[#401b9c] cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {expanded ? "Read less" : "Read more"}
                  </p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <img
                    className="w-36 mx-auto rounded-full"
                    src="https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png"
                    alt="img"
                  />
                  <p className="font-black text-lg mt-4">Ismaeel Ameen</p>
                  <p className="text-[#6a6f73]">
                    Head of Data Engineering Development and Data Management
                  </p>
                  <p className="">Robert Walters</p>
                </div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div
                style={{ width: "800px" }}
                className="mx-64 items-center my-10 flex  justify-center bg-white border border-black py-8 px-4"
              >
                <div className="px-3">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="text-md my-3 max-w-md">
                    {expanded
                      ? "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand."
                      : truncateText(
                          "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                          100
                        )}
                  </p>
                  <p
                    className="underline text-[#401b9c] cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {expanded ? "Read less" : "Read more"}
                  </p>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <img
                    className="w-36 mx-auto rounded-full"
                    src="https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png"
                    alt="img"
                  />
                  <p className="font-black text-lg mt-4">Karen Hunter</p>
                  <p className="text-[#6a6f73]">
                    America's Team Lead Learning & Development
                  </p>
                  <p className="">Steelcase</p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 left-[220px] z-30 flex items-center justify-center my-52 px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black group-hover:bg-black/80 group-focus:ring-0">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-[190px] z-30 flex items-center justify-center my-52 px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black group-hover:bg-black/80 group-focus:ring-0">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
