import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Contact() {
  let userSchema = Yup.object({
    first_name: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),
    last_name: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),
    email: Yup.string().email().required("Email is required"),
    company: Yup.string().required("Company is required"),
    password: Yup.string().min(5).required("Password is required"),
    confirm_password: Yup.string()
      .min(5)
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    phone: Yup.string()
      .matches(/^\d{4}-\d{7}$/, "Invalid phone number format (11 digits)")
      .required("Phone number is required"),
      website: Yup.string().url("Invalid URL format").optional(),
    address: Yup.string().required("Address is required").min(10, "Address should be at least 10 characters").max(30, "Address should not exceed 30 characters")

  });

  const handleSubmit = (values, {setSubmitting, resetForm})=>{
    fetch("http://localhost:7000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then((response) => response.json())
      .then((data) => {
        alert(data.message); // Display the response from the backend
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        resetForm();
        setSubmitting(false);
      });
  }

  return (
    <div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          address: "",
          website: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2 m-7">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name <span className="text-red-600 text-sm">*</span>
                </label>
                <Field
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="First"
                />
                <ErrorMessage
                name="first_name"
                component="div"
                className="text-red-600 text-xs"
              />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last name <span className="text-red-600 text-sm">*</span>
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Last"
                />
                <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-600 text-xs"
              />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address <span className="text-red-600 text-sm">*</span>
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Street No ......."
                />
                <ErrorMessage
                name="address"
                component="div"
                className="text-red-600 text-xs"
              />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone number <span className="text-red-600 text-sm">*</span>
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0300-0000000"
                />
                <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-xs"
              />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Website URL
                </label>
                <Field
                  type="text"
                  id="website"
                  name="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Website.com"
                />
                <ErrorMessage 
                name="website"
                component="div"
                className="text-red-600 text-xs"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address <span className="text-red-600 text-sm">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Name@gmail.com"
                />
                <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-xs"
              />
              </div>
            </div>
            <div className="mb-6 m-7"></div>
            <div className="mb-4 mx-7">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password <span className="text-red-600 text-sm">*</span>
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                placeholder="•••••••••"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-xs"
              />
            </div>
            <div className="mb-4 mx-7">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm password <span className="text-red-600 text-sm">*</span>
              </label>
              <Field
                type="password"
                id="confirm_password"
                name="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                placeholder="•••••••••"
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="text-red-600 text-xs"
              />
            </div>

            <div className="flex items-start mb-6 m-7 ">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I agree with the
                <Link to='/terms' className="text-blue-600 ml-2 hover:underline">
                  terms and conditions
                </Link>
                . <span className="text-red-600 text-sm">*</span>
              </label>
            </div>
            <button
              type="submit"
              className='my-3 mx-6 text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Submit
            </button>
            <button
                type="button"
                className="my-3 text-gray-600 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={props.handleReset} // Use the built-in handleReset function
              >
                Reset
              </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
