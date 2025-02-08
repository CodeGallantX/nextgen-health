import { useState, useEffect } from "react";
import { FaHospital, FaMapMarkerAlt, FaClock, FaLanguage, FaTimes, FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from "react-icons/fa";
import NavItem from "../components/NavItem";

const SearchPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Fetch doctor data from JSON
  useEffect(() => {
    fetch("/data/doctors.json")
      .then(response => response.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div className="flex min-h-screen grid lg:grid-cols-10 p-6 gap-4">
      <aside className="hidden lg:block cols-span-1 bg-white py-10 rounded-2xl border border-gray-200">
        <nav className="space-y-4">
          <NavItem icon={<img src="/logo.png" alt="logo" className="w-10" />} label="" url="#" />
          <NavItem icon={<FaHospital />} label="Home" url="/dashboard" />
          <NavItem icon={<FaSearch />} label="Search" url="/search" colour="text-blue-600" />
          <NavItem icon={<FaCalendarAlt />} label="Appointments" url="/appointments" />
          <NavItem icon={<FaBell />} label="Notifications" url="#" />
          <NavItem icon={<FaCog />} label="Settings" url="/settings" />
        </nav>
        <nav className="mt-20 space-y-4">
          <NavItem icon={<FaUser />} label="Profile" url="/profile" />
          <NavItem icon={<FaHeartbeat />} label="Help" url="/help" />
        </nav>
      </aside>

      <main className={`p-6 ${selectedDoctor ? "lg:col-span-6" : "lg:col-span-9"} flex-1`}>
        <h2 className="text-2xl font-bold text-[#4D80FF]">Search</h2>
        <p className="text-sm text-gray-500">Find medical care, compare costs, and manage appointments.</p>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <img src={doctor.img} alt={doctor.name} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 font-bold">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <p className="text-xs text-gray-500"><FaMapMarkerAlt className="inline mr-1" /> {doctor.location}</p>
              <p className="text-xs text-gray-500">{doctor.experience} Experience</p>
              <p className="mt-2 font-bold text-[#4D80FF]">{doctor.price}</p>
              <button className="mt-3 w-full bg-[#4D80FF] text-white py-2 rounded-md">Book now</button>
            </div>
          ))}
        </div>
      </main>

      {selectedDoctor && (
        <aside className="w-full lg:w-auto bg-white p-6 border-l border-gray-200 col-span-3 rounded-lg">
          <button className="text-red-500 float-right" onClick={() => setSelectedDoctor(null)}><FaTimes /></button>
          <div className="text-center">
            <img src={selectedDoctor.img} alt={selectedDoctor.name} className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-2 text-xl font-bold">{selectedDoctor.name}</h3>
            <p className="text-sm text-gray-500">{selectedDoctor.specialty}</p>
            <p className="text-xs text-gray-500"><FaMapMarkerAlt className="inline mr-1" /> {selectedDoctor.location}</p>
            <p className="text-xs text-gray-500"><FaHospital className="inline mr-1" /> {selectedDoctor.hospital}</p>
            <p className="text-xs text-gray-500">{selectedDoctor.experience} Experience</p>

            <div className="flex justify-around mt-4 text-sm">
              <div><strong>⭐ {selectedDoctor.rating}</strong> Rating</div>
              <div><strong>{selectedDoctor.patients}</strong> Patients</div>
              <div><strong>{selectedDoctor.reviews}</strong> Reviews</div>
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
