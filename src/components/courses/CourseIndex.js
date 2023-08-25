import { useState } from "react";
import React from "react";
import "../../index.css";
import CourseCard from "./CourseCard";
import CourseHeading from "./CourseHeading";

export default function CourseIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(3);

  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      setCoursesPerPage(5);
    } else if (window.innerWidth >= 768) {
      setCoursesPerPage(3);
    } else {
      setCoursesPerPage(1);
    }
  };

  React.useEffect(() => {
    handleResize(); // Set initial courses per page
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pythonCourses = [
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      author: "Jose Portilla",
      downloads: "(475,170)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
      title: "Automate the Boring Stuff with Python Programming",
      author: "AI Swiegart",
      downloads: "(108,867)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg",
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      author:
        "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
      downloads: "(173,867)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      author: "Dr. Angela Yu",
      downloads: "(225,544)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/2485240_d405_7.jpg",
      title: "Python : Master Programming and Development with 15 Projects",
      author: "Dev Nirwal",
      downloads: "(13,444)",
      price: "$9.99",
    },
  ];

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div style={{ margin: "15px 15px" }}>
      <div className="mx-2 mb-3 mt-20">
        <h1 className="text-4xl font-bold title">
          A broad selection of courses
        </h1>
        <p>
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <div className="flex flex-wrap">
        <p className="mx-2 font-semibold courses cursor-pointer">Python</p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Excel
        </p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Web <span>Development</span>
        </p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Javascript
        </p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Data <span>Science</span>
        </p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Amazon <span>AWS</span>
        </p>
        <p
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Drawing
        </p>
      </div>
      <div className="border w-fit m-2 py-2 px-4">
        <div className="python-section">
          <div className="python-cards my-2">
            <div className="mx-2">
              <CourseHeading
                pythonTitle="Expand your career opportunities with Python"
                pythonSub="Take one of Udemys range of Python courses and learn how to code using this incredibly useful language Its simple syntax and readability makes Python perfect for Flask Django data science and machine learning Youll learn how to build everything from games to sites to apps Choose from a range of courses that will appeal to both beginners and advanced developers alike"
                cardLang="Python"
              />
            </div>
            <div className="flex justify-center">
              {currentPage > 1 && (
                <button
                  onClick={handlePreviousPage}
                  className="my-auto px-1 relative bg-black hover:bg-slate-800 text-white"
                  style={{ borderRadius: "50%", height: "40px" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                </button>
              )}
              {pythonCourses
                .slice(startIndex, endIndex)
                .map((course, index) => (
                  <CourseCard
                    key={index}
                    imgSrc={course.imgSrc}
                    title={course.title}
                    author={course.author}
                    downloads={course.downloads}
                    price={course.price}
                  />
                ))}
              {endIndex < pythonCourses.length && (
                <button
                  onClick={handleNextPage}
                  className="my-auto px-1 relative bg-black hover:bg-slate-800 text-white"
                  style={{ borderRadius: "50%", height: "40px" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </button>
              )}
            </div>
            {/* Next and Previous buttons */}
            {/* <div className="flex justify-between mt-3">
              {currentPage > 1 && (
                <button onClick={handlePreviousPage}>Previous</button>
              )}
              {endIndex < pythonCourses.length && (
                <button style={{borderRadius: '50%'}} className="bg-black py-3 px-2 hover:bg-slate-800 text-white" onClick={handleNextPage}>Next</button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
