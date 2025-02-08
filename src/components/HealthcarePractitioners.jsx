import { useState, useEffect } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HealthcarePractitioners = () => {
  const [doctors, setDoctors] = useState([]); // Ensure an empty array as default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/data/doctors.json"); // Adjust path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch doctors data");
        }
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format: Expected an array");
        }

        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading doctors...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-gray-800">
          Based on your location
        </h2>
        <a className="text-[#4D80FF] text-sm font-medium flex items-center cursor-pointer">
          See all ➜
        </a>
      </div>

      <div className="space-y-4">
        {doctors.length > 0 ? (
          doctors.slice(0, 3).map((doctor, index) => (
            <div
              key={index}
              className="relative p-4 bg-blue-100 rounded-lg space-x-4 cursor-pointer flex flex-row items-center justify-center transition-all duration-200"
            >
              <div className="relative">
                <img src={doctor.img} alt={doctor.name || "Doctor image"} className="w-[150px] h-[150px] object-cover rounded-xl" />
                <span className="absolute -top-2 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-lg flex items-center">
                  <FaStar className="mr-1 text-xs" />  {doctor.rating}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold">{doctor.name}</h3>
                <p className="text-[#4D80FF] text-sm">{doctor.specialty}</p>
                <p className="flex items-center text-gray-600 text-sm">
                  <FaMapMarkerAlt className="mr-1" /> {doctor.location}
                </p>
                <p className="text-gray-500 text-sm">{doctor.experience}</p>

                <div className="flex flex-wrap gap-2 mt-2 w-full">
                  {doctor.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#4D80FF] font-bold">{doctor.price}</p>
                  <button className="mt-2 bg-[#4D80FF] text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all">
                    Book Appointment
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No doctors available.</p>
        )}
      </div>
    </div>
  );
};

export default HealthcarePractitioners;
