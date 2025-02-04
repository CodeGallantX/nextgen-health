import { FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa6';
import NavItem from "../components/NavItem";
import Banner from "../components/Banner";
import TrendingSearches from "../components/TrendingSearches";
import ExploreServices from "../components/ExploreServices";
import AppointmentsSection from "../components/AppointmentsSection";
import HealthcarePractitioners from "../components/HealthcarePractitioners";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-11 gap-6">
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
        
        <main className="col-span-7 bg-white rounded-lg">
          <Banner />
          <TrendingSearches />
          <ExploreServices />
        </main>

        <aside className="col-span-3">
          <AppointmentsSection />
          <HealthcarePractitioners />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;