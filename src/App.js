import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CourseIndex from "./components/courses/CourseIndex";
import Instructor from "./components/Instructor";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Nav />} />
        </Routes>
        <Hero />
        <CourseIndex />
        <Instructor />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
