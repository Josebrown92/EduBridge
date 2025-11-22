import React from "react";

const opportunities = [
  { id: 1, title: "Web Development Internships", icon: "💻" },
  { id: 2, title: "Data Science Projects", icon: "📊" },
  { id: 3, title: "Micro-Courses", icon: "📚" },
  { id: 4, title: "Peer Learning Groups", icon: "👥" },
];

function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Opportunities Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="text-4xl mb-4">{opportunity.icon}</div>
            <h2 className="font-semibold text-xl">{opportunity.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

