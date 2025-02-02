import { FaSearch, FaCalendarAlt, FaBell, FaCog } from 'react-icons/fa';
import NavItem from "../components/NavItem";
import Banner from "../components/Banner";
import TrendingSearches from "../components/TrendingSearches";
import ExploreServices from "../components/ExploreServices";
import AppointmentsSection from "../components/AppointmentsSection";
import HealthcarePractitioners from "../components/HealthcarePractitioners";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-2 bg-white p-4 rounded-lg shadow-lg">
          <nav className="space-y-4">
            <NavItem icon={<FaSearch />} label="Search" />
            <NavItem icon={<FaCalendarAlt />} label="Appointments" />
            <NavItem icon={<FaBell />} label="Notifications" />
            <NavItem icon={<FaCog />} label="Settings" />
          </nav>
        </aside>
        
        <main className="col-span-7 bg-white p-6 rounded-lg shadow-lg">
          <Banner />
          <TrendingSearches />
          <ExploreServices />
        </main>

        <aside className="col-span-3 bg-white p-4 rounded-lg shadow-lg">
          <AppointmentsSection />
          <HealthcarePractitioners />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;