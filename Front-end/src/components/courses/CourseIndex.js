/* eslint-disable no-unused-vars */
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
      imgSrc: "https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg",
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      author:
        "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
      downloads: "(173,867)",
      price: "$9.99",
    },
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
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg",
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      author:
        "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
      downloads: "(173,867)",
      price: "$9.99",
    },
  ];

  const excelCourses = [
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/793796_0e89_2.jpg",
      title: "Microsoft Excel - Excel from Beginner to Advanced",
      author: "Kyle Pew, Office Newb",
      downloads: "(475,170)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/2605732_e3d5_3.jpg",
      title: "Zero to Hero in Microsoft Excel: Complete Excel guide 2023",
      author: "Start-Tech Academy",
      downloads: "(108,867)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/2070737_3af1_4.jpg",
      title: "Microsoft Excel Weekender Crash Course",
      author: "Start-Tech Academy",
      downloads: "(173,867)",
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
      imgSrc: "https://img-c.udemycdn.com/course/480x270/3011572_33ad_2.jpg",
      title: "Microsoft Excel - Learn MS EXCEL For DATA Analysis",
      author: "Yassin Marco",
      downloads: "(225,544)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/3338560_f31f.jpg",
      title: "Microsoft Excel -Basic Excel/ Advanced Excel Formulas",
      author: "Yassin Marco",
      downloads: "(13,444)",
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
  ];

  const webCourses = [
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
      title: "The Complete 2023 Web Development Bootcamp",
      author: "Dr. Angela Yu",
      downloads: "(475,170)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
      title: "The Web Developer Bootcamp 2023",
      author: "Colt Steele",
      downloads: "(108,867)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg",
      title: "Web Development Masterclass - Online Certification Course",
      author: "YouAccel Training",
      downloads: "(173,867)",
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
      imgSrc: "https://img-c.udemycdn.com/course/240x135/764164_de03_5.jpg",
      title: "The Complete Web Developer Course 3.0",
      author: "YRob Percival, Codestars • over 2 million students worldwide!",
      downloads: "(225,544)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/1430746_2f43_10.jpg",
      title: "The Complete Web Developer in 2023: Zero to Mastery",
      author: "Andrei Neagoie",
      downloads: "(13,444)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/3011572_33ad_2.jpg",
      title: "Microsoft Excel - Learn MS EXCEL For DATA Analysis",
      author: "Yassin Marco",
      downloads: "(225,544)",
      price: "$9.99",
    },
  ];

  const JsCourses = [
    {
      imgSrc: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
      title: "The Complete 2023 Web Development Bootcamp",
      author: "Dr. Angela Yu",
      downloads: "(475,170)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
      title: "The Web Developer Bootcamp 2023",
      author: "Colt Steele",
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
      imgSrc: "https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg",
      title: "Web Development Masterclass - Online Certification Course",
      author: "YouAccel Training",
      downloads: "(173,867)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/764164_de03_5.jpg",
      title: "The Complete Web Developer Course 3.0",
      author: "YRob Percival, Codestars • over 2 million students worldwide!",
      downloads: "(225,544)",
      price: "$9.99",
    },
    {
      imgSrc: "https://img-c.udemycdn.com/course/240x135/1430746_2f43_10.jpg",
      title: "The Complete Web Developer in 2023: Zero to Mastery",
      author: "Andrei Neagoie",
      downloads: "(13,444)",
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
  ];

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const [showExcel, setShowExcel] = useState(false);
  const [showPython, setShowPython] = useState(true);
  const [showWeb, setShowWeb] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showDs, setShowDs] = useState(false);
  const [showAmazon, setShowAmazon] = useState(false);
  const [showDrawing, setShowDrawing] = useState(false);

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
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(true);
            setShowWeb(false);
            setShowAmazon(false);
            setShowJs(false);
            setShowDs(false);
            setShowDrawing(false);
          }}
          style={{ fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Python
        </p>
        <p
          onClick={() => {
            setShowExcel(true);
            setShowPython(false);
            setShowWeb(false);
            setShowAmazon(false);
            setShowJs(false);
            setShowDs(false);
            setShowDrawing(false);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 excel-title font-semibold courses cursor-pointer"
        >
          Excel
        </p>
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(false);
            setShowWeb(true);
            setShowAmazon(false);
            setShowJs(false);
            setShowDs(false);
            setShowDrawing(false);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Web <span>Development</span>
        </p>
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(false);
            setShowWeb(false);
            setShowAmazon(false);
            setShowJs(true);
            setShowDs(false);
            setShowDrawing(false);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Javascript
        </p>
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(false);
            setShowWeb(false);
            setShowAmazon(false);
            setShowJs(false);
            setShowDs(true);
            setShowDrawing(false);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Data <span>Science</span>
        </p>
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(false);
            setShowWeb(false);
            setShowAmazon(true);
            setShowJs(false);
            setShowDs(false);
            setShowDrawing(false);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 text-center font-semibold courses cursor-pointer"
        >
          Amazon <span>AWS</span>
        </p>
        <p
          onClick={() => {
            setShowExcel(false);
            setShowPython(false);
            setShowWeb(false);
            setShowAmazon(false);
            setShowJs(false);
            setShowDs(false);
            setShowDrawing(true);
          }}
          style={{ color: "#2d2f31", fontSize: "16px" }}
          className="mx-2 font-semibold courses cursor-pointer"
        >
          Drawing
        </p>
      </div>
      <div className="border w-fit m-2 py-2 px-4">
        {showPython && (
          <div className="python-section">
            <div className="python-cards my-2">
              <div className="mx-2">
                <CourseHeading
                  pythonTitle="Expand your career opportunities with Python"
                  pythonSub="Take one of Udemys range of Python courses and learn how to code using this incredibly useful language Its simple syntax and readability makes Python perfect for Flask Django data science and machine learning Youll learn how to build everything from games to sites to apps Choose from a range of courses that will appeal to both beginners and advanced developers alike"
                />
                <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                  Explore Python
                </button>
              </div>
              <div className="flex justify-center">
                {currentPage > 1 && (
                  <button
                    onClick={handlePreviousPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
            </div>
          </div>
        )}
        {showExcel && (
          <div className="excel-section">
            <div className="mx-2">
              <CourseHeading
                excelTitle="Analyze and visualize data with Excel"
                excelSub="Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights."
              />
              <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                Explore Excel
              </button>
            </div>
            <div className="flex justify-center">
              {currentPage > 1 && (
                <button
                  onClick={handlePreviousPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
              {excelCourses.slice(startIndex, endIndex).map((courses, i) => (
                <CourseCard
                  key={i}
                  imgSrc={courses.imgSrc}
                  title={courses.title}
                  author={courses.author}
                  downloads={courses.downloads}
                  price={courses.price}
                />
              ))}
              {endIndex < excelCourses.length && (
                <button
                  onClick={handleNextPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
          </div>
        )}
        {showWeb && (
          <div className="web-section">
            <div className="web-cards my-2">
              <div className="mx-2">
                <CourseHeading
                  webTitle="Build websites and applications with Web Development"
                  webSub="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on."
                />
                <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                  Explore Web Development
                </button>
              </div>
              <div className="flex justify-center">
                {currentPage > 1 && (
                  <button
                    onClick={handlePreviousPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
                {webCourses.slice(startIndex, endIndex).map((courses, i) => (
                  <CourseCard
                    key={i}
                    imgSrc={courses.imgSrc}
                    title={courses.title}
                    author={courses.author}
                    downloads={courses.downloads}
                    price={courses.price}
                  />
                ))}
                {endIndex < webCourses.length && (
                  <button
                    onClick={handleNextPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
            </div>
          </div>
        )}

        {showJs && (
          <div className="js-section">
            <div className="mx-2">
              <CourseHeading
                jsTitle="Grow your software development skills with JavaScript"
                jsSub="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS."
              />
              <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                Explore Javascript
              </button>
            </div>
            <div className="flex justify-center">
                {currentPage > 1 && (
                  <button
                    onClick={handlePreviousPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
                {JsCourses
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
                {endIndex < JsCourses.length && (
                  <button
                    onClick={handleNextPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
          </div>
        )}
        {showDs && (
          <div className="js-section">
            <div className="mx-2">
              <CourseHeading
                dsTitle="Lead data-driven decisions with Data Science"
                dsSub="Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you're into research, statistics, and analytics."
              />
              <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                Explore Data Science
              </button>
            </div>
            <div className="flex justify-center">
              {currentPage > 1 && (
                <button
                  onClick={handlePreviousPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
              {excelCourses.slice(startIndex, endIndex).map((courses, i) => (
                <CourseCard
                  key={i}
                  imgSrc={courses.imgSrc}
                  title={courses.title}
                  author={courses.author}
                  downloads={courses.downloads}
                  price={courses.price}
                />
              ))}
              {endIndex < excelCourses.length && (
                <button
                  onClick={handleNextPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
          </div>
        )}
        {showAmazon && (
          <div className="js-section">
            <div className="mx-2">
              <CourseHeading
                awsTitle="Become an expert in cloud computing with AWS Certification"
                awsSub="Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn. Anyone can learn AWS skills, and with AWS online training, you can move at your own pace."
              />
              <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                Explore Amazon AWS
              </button>
            </div>
            <div className="flex justify-center">
              {currentPage > 1 && (
                <button
                  onClick={handlePreviousPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
              {excelCourses.slice(startIndex, endIndex).map((courses, i) => (
                <CourseCard
                  key={i}
                  imgSrc={courses.imgSrc}
                  title={courses.title}
                  author={courses.author}
                  downloads={courses.downloads}
                  price={courses.price}
                />
              ))}
              {endIndex < excelCourses.length && (
                <button
                  onClick={handleNextPage}
                  className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
          </div>
        )}
        {showDrawing && (
          <div className="js-section">
            <div className="mx-2">
              <CourseHeading
                drawingTitle="Expand your creative skillset with Drawing"
                drawingSub="Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going."
              />
              <button className="border hover:bg-gray-200 mb-3 border-black font-bold p-2">
                Explore Drawing
              </button>
            </div>
            <div className="flex justify-center">
                {currentPage > 1 && (
                  <button
                    onClick={handlePreviousPage}
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
                    className="my-auto px-2 relative bg-black hover:bg-slate-800 text-white"
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
          </div>
        )}
      </div>
    </div>
  );
}
