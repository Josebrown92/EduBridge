export default function OpportunityCard({ title, type, link, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{type}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" className="text-indigo-600 font-medium hover:underline">
        View Details →
      </a>
    </div>
  );
}
