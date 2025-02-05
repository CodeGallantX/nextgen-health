import { FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa6';
import NavItem from "../components/NavItem";
import TrendingSearches from "../components/TrendingSearches";


const SearchPage = () => {
    return (
      <div className="flex min-h-screen grid grid-cols-10 p-6">
        <aside className="cols-span-1 bg-white py-10 rounded-2xl border border-gray-200">
          <nav className="space-y-4">
            <NavItem icon={<img src="/logo.png" alt="logo" className='w-10'/>} label="" url="#" />
            <NavItem icon={<FaHospital />} label="Home" url="/dashboard" />
            <NavItem icon={<FaSearch />} label="Search" url="/search" colour="text-blue-600" />
            <NavItem icon={<FaCalendarAlt />} label="Appointments" url="/appointments" />
            <NavItem icon={<FaBell />} label="Notifications"url="#" />
            <NavItem icon={<FaCog />} label="Settings" url="/settings"/>
          </nav>
          <nav className="mt-20 space-y-4">
            <NavItem icon={<FaUser />} label="Profile" url="/profile"/>
            <NavItem icon={<FaHeartbeat />} label="Help" url="/help"/>
          </nav>
        </aside>
  
        <main className="flex-1 p-6 col-span-7">
          <h2 className="text-2xl font-bold text-[#4D80FF]">Search</h2>
          <p className="text-sm text-gray-500">Find medical care, compare costs, and manage appointments.</p>
          <div className="flex items-center space-x-3 bg-white py-4 rounded-lg">
            <input type="text" placeholder="Search procedure or keyword" className="flex-1 p-2 border rounded-md" />
            <input type="text" placeholder="Location" className="p-2 border rounded-md" />
            <button className="bg-[#4D80FF] text-white px-4 py-2 rounded-md">Search</button>
          </div>
  
          <div className="flex items-center space-x-2 mt-4">
            <TrendingSearches />
            <button className="ml-auto text-[#4D80FF]">🔧 Filter</button>
          </div>
  
          <div className="grid grid-cols-3 gap-6 mt-6">
            {[
              { name: "Dr. Ifeanyi Charles", img:"/dr_leye_mofeoluwa.png", specialty: "Pediatrics", location: "Umuahia, AB", experience: "15 years", price: "10k/hr", rating: "4.92" },
              { name: "Dr. Mimi-Stephanie Oni", img:"/dr_oluwaseyi.png", specialty: "Intensive Care Unit", location: "Ikorodu, LA", experience: "6 years", price: "8k/hr", rating: "5.0" },
              { name: "Dr. Barakat Ahmed", img:"/dr_leye_mofeoluwa.png", specialty: "Clinical Psychology", location: "Jos North, PL", experience: "3 years", price: "5k/hr", rating: "5.0" },
              { name: "Dr. Lawal Oluwafemi", img:"/dr_leye_mofeoluwa.png", specialty: "Orthopedics", location: "Magodo Phase II, LA", experience: "7 years", price: "12k/hr", rating: "5.0" },
              { name: "Dr. Samuel Macauley", img:"/dr_leye_mofeoluwa.png", specialty: "Physiotherapy", location: "Ikoyi, LA", experience: "15 years", price: "25k/hr", rating: "5.0" },
              { name: "Dr. Chinyere Hassan", img:"/dr_leye_mofeoluwa.png", specialty: "Gynaecology", location: "Gwagwalada, AB", experience: "5 years", price: "8k/hr", rating: "5.0" },
            ].map((doctor, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-start justify-center">
                <div className="relative flex justify-between items-center w-10/12">
                  <span className="absolute text-green-500 font-bold top-0 right-0">{doctor.rating} ⭐</span>
                  <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full rounded object-cover"
          />
                </div>
                
                <h3 className="mt-2 font-bold">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
                <p className="text-xs text-gray-500">📍 {doctor.location}</p>
                <p className="text-xs text-gray-500">{doctor.experience} Experience</p>
                <p className="mt-2 font-bold text-[#4D80FF]">{doctor.price}</p>
                <button className="mt-3 w-full bg-[#4D80FF] text-white py-2 rounded-md">Book now</button>
              </div>
            ))}
          </div>
        </main>
  
        <aside className="w-full bg-white p-6 border-l border-gray-200 col-span-2">
          <h2 className="text-lg font-bold mb-4">Based on your Location</h2>
          {[
            { name: "Dr. Leye Mofeoluwa", img:"/dr_leye_mofeoluwa.png", specialty: "General Surgery", location: "Isolo, LA", experience: "5 years", price: "5k/hr", rating: "5.0" },
            { name: "Dr. Yusuf Ayomide", img:"/dr_yusuf_ayomide.png", specialty: "Urologist", location: "Ilorin, KW", experience: "12 years", price: "5k/hr", rating: "4.75" },
            { name: "Sylvia Koko", img:"/dr_sylvia_koko.png", specialty: "Clinical Psychologist", location: "Lagos, NG", experience: "6 years", price: "16k/hr", rating: "5.0" },
          ].map((doctor, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md mb-4">
                <div className="relative flex justify-between items-center w-10/12">
                  <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full rounded object-cover"
          />
                </div>
              <h3 className="font-bold">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <p className="text-xs text-gray-500">📍 {doctor.location}</p>
              <p className="text-xs text-gray-500">{doctor.experience} Experience</p>
              <p className="mt-2 font-bold text-[#4D80FF]">{doctor.price}</p>
              <button className="mt-3 w-full bg-[#4D80FF] text-white py-2 rounded-md">Book Appointment</button>
            </div>
          ))}
        </aside>
      </div>
    );
  };
  
  export default SearchPage;  