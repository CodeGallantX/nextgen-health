import { FaStethoscope } from 'react-icons/fa';
import { FaHeartbeat, FaClipboardCheck, FaAmbulance, FaNotesMedical } from 'react-icons/fa';

const ExploreServices = () => (
    <div className="mt-6 grid grid-cols-3 gap-4">
      {[
        { name: "Health Care Locator", icon: <FaHeartbeat /> },
        { name: "Appointments & Reminders", icon: <FaClipboardCheck /> },
        { name: "Symptom Checker", icon: <FaNotesMedical /> },
        { name: "HMO Assistance", icon: <FaStethoscope /> },
        { name: "Urgent Care", icon: <FaAmbulance /> },
      ].map((service, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer flex items-center space-x-3"
        >
          <div className="text-[#4D80FF] text-xl">{service.icon}</div>
          <span className="text-gray-700 font-medium">{service.name}</span>
        </div>
      ))}
    </div>
  );

  
  export default ExploreServices;