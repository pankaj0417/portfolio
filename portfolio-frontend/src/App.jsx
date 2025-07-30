import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-all duration-500">
              <div>
                <Home />
                <About />
                <Project />
                <Contact />
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
