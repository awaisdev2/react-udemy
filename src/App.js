import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CourseIndex from "./components/courses/CourseIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Nav />} />
        </Routes>
        <Hero />
        <CourseIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
