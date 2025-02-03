import { motion } from "framer-motion";
import { FaUserMd, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Leye Mofeoluwa",
    specialty: "General Surgery",
    location: "Isolo, LA",
    experience: "5yrs experience",
    rating: 5.0,
    price: "5k/hr",
    tags: ["Pediatric surgery", "Diagnosis", "+2"],
  },
  {
    name: "Dr. Yusuf Ayomide",
    specialty: "Urologist",
    location: "Ikeja, LA",
    experience: "8yrs experience",
    rating: 4.9,
    price: "7k/hr",
    tags: ["Kidney Health", "Men’s Health", "+3"],
  },
];

const HealthcarePractitioners = () => (
  <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg text-gray-800">
        Available Healthcare Practitioners
      </h2>
      <a
        className="text-[#4D80FF] font-medium flex items-center cursor-pointer"
      >
        See all ➜
      </a>
    </div>

    <div className="space-y-4">
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 flex items-center space-x-4"
        >
          <div className="relative">
            <FaUserMd className="text-[#4D80FF] text-4xl bg-gray-100 p-3 rounded-full" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
              {doctor.rating} <FaStar/>
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-gray-800 font-semibold">{doctor.name}</h3>
            <p className="text-[#4D80FF] text-sm">{doctor.specialty}</p>
            <p className="flex items-center text-gray-600 text-sm">
              <FaMapMarkerAlt className="mr-1" /> {doctor.location}
            </p>
            <p className="text-gray-500 text-sm">{doctor.experience}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {doctor.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-[#4D80FF] font-bold">{doctor.price}</p>
            <button className="mt-2 bg-[#4D80FF] text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-600">
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HealthcarePractitioners;
