import { FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa6';
import NavItem from "../components/NavItem";

const DoctorDetails = () => {
  return (
    <div className="min-h-screen gap-6 p-6 grid grid-cols-8">
      <aside className="col-span-1 bg-white py-10 rounded-2xl border border-gray-200">
          <nav className="space-y-4">
            
            <NavItem icon={<img src="/logo.png" alt="logo" className='w-10'/>} label="" url="#" />
            <NavItem icon={<FaHospital />} label="Home" url="/" colour="text-blue-400" />
            <NavItem icon={<FaSearch />} label="Search" url="/search" />
            <NavItem icon={<FaCalendarAlt />} label="Appointments" url="/appointments" />
            <NavItem icon={<FaBell />} label="Notifications"url="#" />
            <NavItem icon={<FaCog />} label="Settings" url="/settings"/>
          </nav>
          <nav className="mt-20 space-y-4">
            <NavItem icon={<FaUser />} label="Profile" url="/profile"/>
            <NavItem icon={<FaHeartbeat />} label="Help" url="/help"/>
          </nav>
        </aside>
      <div className="col-span-7 bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src="/doctor-image.jpg"
            alt="Dr. Mimi-Stephanie Oni"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">Dr. Mimi-Stephanie Oni</h2>
            <p className="text-blue-600">Intensive Care Unit</p>
            <p className="text-gray-600">📍 Ikorodu, LA - New Gate Hospital</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-4 text-gray-700">
          <p>⭐ 5.0 Rating</p>
          <p>📅 6 years Experience</p>
          <p>👥 200+ Patients</p>
          <p>📝 20+ Reviews</p>
        </div>

        {/* Book Appointment */}
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Book Appointment
          </button>
        </div>

        {/* Recommended Doctors Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Based on your Searches</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((doctor) => (
              <div key={doctor} className="p-4 bg-gray-50 rounded-lg shadow">
                <img
                  src="/doctor-placeholder.jpg"
                  alt="Doctor"
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-2 font-semibold">Dr. Alex Johnson</p>
                <p className="text-sm text-gray-500">Orthopedic Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;