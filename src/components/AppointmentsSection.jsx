import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const AppointmentsSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const recommendedDates = ["Feb 02", "Feb 03", "Feb 04", "Feb 05", "Feb 06", "Feb 07"];

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl text-gray-800">Your Appointments</h2>
        <FaCalendarAlt className="text-gray-500 text-lg" />
      </div>

      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <FaCalendarAlt className="text-blue-400 text-5xl mb-2" />
          {selectedDate ? (
            <p className="text-gray-700 text-lg font-medium">Your appointment is on <span className="text-blue-500 font-bold">{selectedDate}</span></p>
          ) : (
            <p className="text-gray-500">You do not have any appointments scheduled</p>
          )}
        </motion.div>

        {!selectedDate && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600"
          >
            Schedule an Appointment
          </motion.button>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-gray-700 font-medium mb-2">Recommended dates</h3>
        <div className="flex gap-2 flex-wrap">
          {recommendedDates.map((date, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-lg border ${
                selectedDate === date ? "bg-blue-500 text-white" : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {date}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsSection;
