import { useState, useEffect } from "react";
import { FaHospital, FaMapMarkerAlt, FaClock, FaLanguage, FaTimes } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import HealthcarePractitioners from "../components/HealthcarePractitioners";
import doctors from "../../data/doctors.json"

const SearchPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  fetch("/data/doctors.json")
  .then(response => response.text()) 
  .then(data => {
    console.log(data); 
    return JSON.parse(data);
  })
  .catch(error => console.error("Error:", error));


  return (
    <div className="flex min-h-screen p-6 gap-0">
      <NavBar />

      <main className="px-6 pt-0 pb-6 w-full">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-3xl font-bold text-[#4D80FF]">Search</h2>
          <p className="text-gray-500">Find medical care, compare costs, and manage appointments.</p>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Search procedure or keyword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-[#4D80FF] text-white px-6 py-2 rounded-lg">Search</button>
          </div>

          <div className="mt-4 flex gap-2">
            {["All", "Neurology", "Dermatology", "Pharmacy", "Gynaecology", "Obstetrics"].map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${tag === "All" ? "bg-[#4D80FF] text-white" : "bg-gray-100 text-gray-600"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Filters & Sorting */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-4">
              {/* Filter Toggle Button */}
              <button
                className="flex items-center gap-2 px-4 py-2 border rounded-lg"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span>🔍 Filter</span>
              </button>

              <span className="text-gray-500">500+ Results</span>
            </div>

            {/* Sorting Dropdown */}
            <div>
              <select className="px-4 py-2 border rounded-lg">
                <option>Recommended</option>
                <option>Lowest Price</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Filters Dropdown (Only Visible When Clicked) */}
          {showFilters && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-50 shadow-lg">
              <h3 className="font-semibold text-gray-600">Filter by:</h3>
              <div className="mt-2 flex gap-4">
                <select className="w-1/2 px-4 py-2 border rounded-lg">
                  <option>Specialty</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                </select>

                <select className="w-1/2 px-4 py-2 border rounded-lg">
                  <option>Condition</option>
                  <option>Diabetes</option>
                  <option>Hypertension</option>
                  <option>Arthritis</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="relative bg-blue-100 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all max-w-sm w-full "
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="absolute top-3 right-3 flex justify-end">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <FaStar className="mr-1" /> {doctor.rating}
                </span>
              </div>
              <div>
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-[350px] h-[150px] object-cover rounded-lg mt-6"
                />
              </div>
              <div className="text-center mt-8">
                <h3 className="font-bold text-lg">{doctor.name}</h3>
                <p className="text-sm text-blue-600 bg-white rounded-full p-2">{doctor.specialty}</p>
                <p className="text-xs text-gray-500 flex justify-center items-center mt-1">
                  <FaMapMarkerAlt className="mr-1" /> {doctor.location}
                </p>
                <p className="text-xs text-gray-500">{doctor.experience} Experience</p>
                <p className="mt-2 font-bold text-blue-500">{doctor.price}</p>
              </div>

              <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl">
                Book now
              </button>
            </div>
          ))}
        </div>
      </main>
      <aside className={`w-5/12 ${selectedDoctor ? "hidden" : "block"} `}>
        <HealthcarePractitioners />
      </aside>
      {selectedDoctor && (
        <aside className="w-4/12 bg-blue-50 p-6 border border-gray-200 rounded-lg">
          <button className="absolute top-2 right-4 text-gray-500 bg-gray-200 text-lg p-2 rounded-full" onClick={() => setSelectedDoctor(null)}><FaTimes /></button>
          <div>
            <div className="flex flex-row items-center justify-start space-x-6">
              <div className="w-32 h-32">
                <img src={selectedDoctor.img} alt={selectedDoctor.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex flex-col items-start justify-center space-y-1 text-gray-500">
                <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                <p>{selectedDoctor.specialty}</p>
                <p><FaMapMarkerAlt className="inline mr-1" />{selectedDoctor.location}</p>
                <p><FaHospital className="inline mr-1" />{selectedDoctor.hospital}</p>
              </div>
            </div>

            <div className=" bg-white flex flex-row items-center justify-center mt-4 text-sm rounded-lg p-4">
              <div className='p-2 rounded-lg text-gray-500'><strong className="text-blue-500 text-xl"><FaStar className="mr-1 inline-block" /> {selectedDoctor.rating}</strong> Rating</div>
              <div className='p-2 rounded-lg text-gray-500'><strong className="text-blue-500 text-xl">{selectedDoctor.experience}</strong> Rating</div>
              <div className="p-2 rounded-lg text-gray-600"><strong className="text-blue-500 text-xl">{selectedDoctor.patients}</strong> Patients</div>
              <div className="p-2 rounded-lg text-gray-600"><strong className="text-blue-500 text-xl">{selectedDoctor.reviews}</strong> Reviews</div>
            </div>

            <h4 className="uppercase mt-4 font-bold">About</h4>
            <p className="mt-4 text-gray-600">{selectedDoctor.about}</p>

            <h4 className="uppercase mt-4 font-bold">Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedDoctor.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>

            <h4 className="mt-4 font-bold uppercase"><FaClock className="inline mr-1" /> Working Hours</h4>
            <p className="text-gray-500">{selectedDoctor.working_hours}</p>

            <h4 className="mt-4 font-bold uppercase"><FaLanguage className="inline mr-1" /> Languages</h4>
            <p className="text-gray-500">{selectedDoctor.languages.join(", ")}</p>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-center space-y-1 w-full">
                <p className="mt-4 font-bold text-[#4D80FF]">{selectedDoctor.price}</p>
                <p className="text-sm text-gray-500 w-full">{selectedDoctor.consultation_type}</p>
              </div>

              <a href="/appointment" className="w-full bg-[#4D80FF] text-white py-2 px-4 text-sm text-center rounded-md">Schedule Appointment</a>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SearchPage;
