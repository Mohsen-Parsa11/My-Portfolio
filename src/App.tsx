import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";



function App() {
 

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/education" element={<Education />}/>
      <Route path="/projects" element={<Project />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
    </>
  );
}

export default App;
