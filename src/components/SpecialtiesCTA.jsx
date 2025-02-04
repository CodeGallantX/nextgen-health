import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaClipboardCheck, FaAmbulance, FaNotesMedical } from "react-icons/fa";

const services = [
  { name: "Health Care Locator", icon: <FaHeartbeat /> },
  { name: "Appointments & Reminders", icon: <FaClipboardCheck /> },
  { name: "Symptom Checker", icon: <FaNotesMedical /> },
  { name: "HMO Assistance", icon: <FaStethoscope /> },
  { name: "Urgent Care", icon: <FaAmbulance /> },
];

const ExploreServices = () => {
  return (
    <div className="overflow-hidden py-5 border-b border-b-gray-400/50 ">
      <h2 className="font-bold text-gray-800 text-lg mb-4">Explore Services</h2>

      <motion.div
        className="flex space-x-4 cursor-grab active:cursor-grabbing w-max py-4"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="w-40 p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 flex flex-col items-center text-center"
          >
            <div className="text-[#4D80FF] text-3xl mb-2">{service.icon}</div>
            <span className="text-gray-700 font-medium text-sm">{service.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExploreServices;
