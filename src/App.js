import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Nav />} />
        </Routes>
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
