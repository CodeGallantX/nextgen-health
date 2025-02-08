import { FaSearch, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Subscribe =() => {
  const [email, setEmail] = useState("");

  const articles = [
    { title: "CPR", count: 134 },
    { title: "Chronic Constipation", count: 12 },
    { title: "Healthy Lifestyle Habits", count: 229 },
    { title: "Heart Attack", count: 10 },
    { title: "Symptom Checker", count: 7 },
    { title: "Hypertension", count: 45 },
    { title: "Malaria and Fever", count: 6 },
  ];

  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white max-w-md">
      {/* Search & Location */}
      <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-5">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent flex-1 outline-none text-gray-700"
        />
        <FaMapMarkerAlt className="text-gray-400 ml-2" />
        <span className="text-gray-400 ml-1">Location</span>
      </div>

      {/* Subscription Section */}
      <div className="text-center mb-6">
        <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-2" />
        <h3 className="font-semibold text-lg">Subscribe for Updates and Alerts</h3>
        <p className="text-gray-600 text-sm px-4">
          Turn on this alert so you do not miss out on any of your appointments or updates that suit your needs.
        </p>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded-md mt-3 text-gray-700"
        />
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg mt-3 w-full">
          Subscribe
        </button>
      </div>

      {/* Articles Section */}
      <div>
        <h4 className="font-semibold text-lg mb-3">Articles for your Care</h4>
        <div className="flex flex-wrap gap-2">
          {articles.map((article, index) => (
            <span
              key={index}
              className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {article.title}
              <span className="ml-2 bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                {article.count}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Subscribe