import { FaSearch, FaCalendarAlt, FaBell, FaCog, FaUser, FaHeartbeat } from 'react-icons/fa';
import { FaHospital, FaKitMedical } from 'react-icons/fa6';
import NavItem from "./NavItem"

const NavBar = () => {
    return (
        <aside className="bg-white py-10 rounded-2xl border border-gray-200">
            <nav className="space-y-4">

                <NavItem icon={<img src="/logo.png" alt="logo" className='w-10' />} label="" url="#" />
                <NavItem icon={<FaHospital />} label="Home" url="/dashboard" colour="text-blue-400" />
                <NavItem icon={<FaSearch />} label="Search" url="/search" />
                <NavItem icon={<FaCalendarAlt />} label="Appointments" url="/appointment" />
                <NavItem icon={<FaBell />} label="Notifications" url="/notifications" />
                <NavItem icon={<FaKitMedical />} label="More" url="/more" />
                <NavItem icon={<FaCog />} label="Settings" url="/settings" />
            </nav>
            <nav className="mt-20 space-y-4">
                <NavItem icon={<FaHeartbeat />} label="Help" url="/help" />
                <NavItem icon={<FaUser />} label="Profile" url="/profile" />
            </nav>
        </aside>
    )
}

export default NavBar