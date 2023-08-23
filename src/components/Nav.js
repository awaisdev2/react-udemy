import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import './Components.css'

export default function Nav() {
  const logo = "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg";

  return (
    <div>
      <nav className="bg-white shadow-lg border-gray-200">
        <div className="max-w-screen-xl flex justify-center items-center p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row md:mt-0 md:border-0">
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="flex items-center justify-between w-full mx-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  Dropdown
                </button>
                <div
                  id="dropdownHover"
                  style={{ height: "400px" }}
                  className="z-10 hidden font-normal bg-white rounded-lg shadow w-64"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                      >
                        Development
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Business
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        id="doubleDropdown"
                        style={{ height: "400px" }}
                        className="z-10 hidden bg-white rounded-lg shadow w-64"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <Link
                              to=""
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Web Development
                              <span>
                                <svg
                                  className="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Data Science
                              <span>
                                <svg
                                  className="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Mobile Development
                              <span>
                                <svg
                                  className="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Programming Languages
                              <span>
                                <svg
                                  className="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Game Development
                              <span>
                                <svg
                                  className="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                      >
                        Earnings
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Finance & Accounting
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        IT & Software
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Office Productivity
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Personal Development
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Design
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Marketing
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Lifestyle
                        <span>
                          <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="block mr-3 my-2 w-3/4">
                  <form>
                    <label
                      for="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search for anything"
                        required
                      />
                    </div>
                  </form>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-gray-900 mr-4 my-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Udemy Business
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-gray-900 mr-4 my-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Tech on Udemy
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-gray-900 mr-4 my-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                  className="px-4 my-2 py-2"
                >
                  Log in
                </button>
                <button
                  style={{ backgroundColor: "black" }}
                  className="px-4 py-2 mx-3 my-2 text-white"
                >
                  Sign up
                </button>
              </li>
              <li style={{border: '1px solid black'}} className="p-2 my-2 cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
