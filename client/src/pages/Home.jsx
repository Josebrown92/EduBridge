// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* 🌐 Header Section */}
      <header className="w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">EduBridge</h1>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-700 transition">
            Home
          </Link>
          <Link to="/opportunities" className="hover:text-blue-700 transition">
            Opportunities
          </Link>
          <Link to="/login" className="hover:text-blue-700 transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* Push content down below fixed header */}
      <div className="mt-20 w-full flex flex-col items-center">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-24 w-full">
          <h1 className="text-5xl font-bold mb-6">
            Empowering Youth Through Education & Opportunities
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            EduBridge connects learners to micro-courses, internships, and peer learning —
            driving SDG 4 for quality education across Africa.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Login
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">About EduBridge</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            EduBridge bridges the gap between youth and learning opportunities by offering 
            micro-courses, internships, and mentorship programs that help young people gain 
            skills, experience, and networks — all in one place.
          </p>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 w-full py-16 px-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <p className="italic text-gray-700">
                “EduBridge helped me find an internship that aligned perfectly with my studies!”
              </p>
              <h4 className="mt-4 font-semibold text-blue-600">– Jane M., Student</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <p className="italic text-gray-700">
                “The micro-courses gave me practical skills I now use in my job.”
              </p>
              <h4 className="mt-4 font-semibold text-blue-600">– Brian K., Graduate</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl text-center">
              <p className="italic text-gray-700">
                “Peer learning sessions kept me motivated and connected.”
              </p>
              <h4 className="mt-4 font-semibold text-blue-600">– Aisha O., Mentor</h4>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white text-center py-16 w-full">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg mb-6">
            Sign up and get access to courses, internships, and mentors across Africa.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Register
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

