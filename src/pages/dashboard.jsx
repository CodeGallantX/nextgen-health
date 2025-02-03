import { FaSearch, FaCalendarAlt, FaBell, FaCog } from 'react-icons/fa';
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
            <NavItem icon={<FaSearch />} label="Search" />
            <NavItem icon={<FaCalendarAlt />} label="Appointments" />
            <NavItem icon={<FaBell />} label="Notifications" />
            <NavItem icon={<FaCog />} label="Settings" />
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