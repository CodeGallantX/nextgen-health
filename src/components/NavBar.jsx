import { FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from 'react-icons/fa';
import { FaHospital, FaKitMedical } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import NavItem from "./NavItem";

const NavBar = () => {
    const location = useLocation();

    const isActive = (url) => location.pathname === url ? "text-[#4D80FF]" : "text-gray-500";

    return (
        <aside className="bg-white py-10 rounded-2xl border border-gray-200">
            <nav className="space-y-4">
                <NavItem icon={<img src="/logo.png" alt="logo" className='w-10' />} label="" url="#" />
                <NavItem icon={<FaHospital className={isActive("/dashboard")} />} label="Home" url="/dashboard" />
                <NavItem icon={<FaSearch className={isActive("/search")} />} label="Search" url="/search" />
                <NavItem icon={<FaCalendarAlt className={isActive("/appointment")} />} label="Appointments" url="/appointment" />
                <NavItem icon={<FaBell className={isActive("/notifications")} />} label="Notifications" url="/notifications" />
                <NavItem icon={<FaKitMedical className={isActive("/more")} />} label="More" url="/more" />
                <NavItem icon={<FaCog className={isActive("/settings")} />} label="Settings" url="/settings" />
            </nav>
            <nav className="mt-20 space-y-4">
                <NavItem icon={<FaHeartbeat className={isActive("/help")} />} label="Help" url="/help" />
                <NavItem icon={<FaUser className={isActive("/profile")} />} label="Profile" url="/profile" />
            </nav>
        </aside>
    );
}

export default NavBar;
