import { useState, useEffect } from "react";
import { FaHospital, FaMapMarkerAlt, FaClock, FaLanguage, FaTimes } from "react-icons/fa";
import NavBar from "../components/NavBar";

const SearchPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then(response => response.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div className="flex min-h-screen grid lg:grid-cols-11 p-6 gap-4">
      <NavBar />

      <main className={`px-6 pt-0 pb-6 ${selectedDoctor ? "lg:col-span-7" : "lg:col-span-10"} flex-1`}>
        <h2 className="text-3xl font-bold text-[#4D80FF]">Search</h2>
        <p className="text-gray-500">Find medical care, compare costs, and manage appointments.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="h-40">
                <img src={doctor.img} alt={doctor.name} className="w-full object-cover rounded" />
              </div>
              <div className="flex flex-col items-start justify-center text-center">
                <h3 className="mt-2 font-bold text-xl">{doctor.name}</h3>
                <p className="text-sm text-gray-500 text-lg">{doctor.specialty}</p>
                <p className="text-xs text-gray-500"><FaMapMarkerAlt className="inline mr-1" /> {doctor.location}</p>
                <p className="text-xs text-gray-500">{doctor.experience} Experience</p>
                <p className="mt-2 font-bold text-[#4D80FF]">{doctor.price}</p>
                <a href="/appointment" className="mt-3 w-full bg-[#4D80FF] text-white py-2 rounded-md w-full">Book now</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedDoctor && (
        <aside className="w-full lg:w-auto bg-blue-50 p-6 border border-gray-200 col-span-3 rounded-lg">
          <button className="absolute top-2 right-4 text-gray-500 bg-gray-200 text-lg p-2 rounded-full" onClick={() => setSelectedDoctor(null)}><FaTimes /></button>
          <div>
            <div className="flex flex-row items-center justify-center">
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

            <div className=" bg-gray-50 flex justify-around mt-4 text-sm">
              <div className='p-2 rounded-lg text-gray-500'><strong className="text-blue-500 text-xl">⭐ {selectedDoctor.rating}</strong> Rating</div>
              <div className='p-2 rounded-lg text-gray-500'><strong className="text-blue-500 text-xl">{selectedDoctor.experience}</strong> Rating</div>
              <div className="p-2 rounded-lg text-gray-600"><strong className="text-blue-500 text-xl">{selectedDoctor.patients}</strong> Patients</div>
              <div className="p-2 rounded-lg text-gray-600"><strong className="text-blue-500 text-xl">{selectedDoctor.reviews}</strong> Reviews</div>
            </div>

            <p className="mt-4 text-gray-600">{selectedDoctor.about}</p>

            <h4 className="mt-4 font-bold">Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedDoctor.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>

            <h4 className="mt-4 font-bold"><FaClock className="inline mr-1" /> Working Hours</h4>
            <p className="text-gray-500">{selectedDoctor.working_hours}</p>

            <h4 className="mt-4 font-bold"><FaLanguage className="inline mr-1" /> Languages</h4>
            <p className="text-gray-500">{selectedDoctor.languages.join(", ")}</p>

            <p className="mt-4 font-bold text-[#4D80FF]">{selectedDoctor.price}</p>
            <p className="text-sm text-gray-500">{selectedDoctor.consultation_type}</p>

            <button className="mt-4 w-full bg-[#4D80FF] text-white py-2 rounded-md">Schedule Appointment</button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SearchPage;
