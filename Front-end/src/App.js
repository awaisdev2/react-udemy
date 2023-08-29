import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import CourseIndex from "./components/courses/CourseIndex";
import Reviewers from "./components/Reviewers";
import Instructor from "./components/Instructor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav /> {/* Render Nav outside of Routes if it should appear on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <CourseIndex />
      <Reviewers />
      <Instructor />
    </div>
  );
}

export default App;
