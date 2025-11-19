import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import { coursesArray } from "./courses";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>Learning From Scratch</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            {coursesArray.map((course) => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`}>{course.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
