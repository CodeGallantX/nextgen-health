import { FaCog } from "react-icons/fa";
import SubscriptionSection from "../components/Subscribe"; 
import NavBar from '../components/NavBar';


const SettingItem = ({ title }) => (
  <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
    <span className="font-semibold">{title}</span>
    <FaCog className="text-gray-500" />
  </div>
);

const Settings = () => {
  return (
    <div className="flex min-h-screen p-6">
      <NavBar />
      
      <main className="flex-1 px-8 pt-0 pb-8">
        <h1 className="text-4xl font-bold text-blue-600">Settings</h1>
        <div className="mt-6 bg-white p-0 rounded-lg space-y-4">
          <SettingItem title="Your Account" />
          <SettingItem title="Premium" />
          <SettingItem title="Resources" />
          <SettingItem title="Privacy and Safety" />
          <SettingItem title="My Records" />
          <SettingItem title="Accessibility" />
          <SettingItem title="Language" />
          <SettingItem title="Notifications" />
          <SettingItem title="Get the NextGen Health App" />
          <SettingItem title="Share/Recommend to Friends" />
        </div>
      </main>
      
      <aside className="w-1/4 p-6">
        <SubscriptionSection />
      </aside>
    </div>
  );
};

export default Settings;
