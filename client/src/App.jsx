import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard.jsx";
import jobs from "./pages/jobs.jsx";
import learning from "./pages/learning.jsx";
import projects from "./pages/projects.jsx";
import mentorship from "./pages/mentorship.jsx";

export default function App() {
  return (
     <BrowserRouter>
      {/* Persistent Navbar */}
      <Navbar />
    
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <Link to="/" className="font-bold text-xl">EduBridge</Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/opportunities" element={<Dashboard />} />
        <Route path="/opportunities/jobs" element={<jobs />} />
        <Route path="/opportunities/learning" element={<learning />} />
        <Route path="/opportunities/projects" element={<projects />} />
        <Route path="/opportunities/mentorship" element={<mentorship />} />
      </Routes>
    </BrowserRouter>
  );
}
