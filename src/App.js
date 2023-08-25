import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CourseIndex from "./components/courses/CourseIndex";
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
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
