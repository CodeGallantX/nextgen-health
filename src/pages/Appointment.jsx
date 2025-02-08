import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [appointmentType, setAppointmentType] = useState("Virtual");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1)
  }

  const dates = ["02", "03", "04", "05", "06", "07", "08", "09", "10"];
  const times = ["10:00", "11:00", "12:00", "01:00", "02:00"];

  return (
    <div className="flex min-h-screen grid lg:grid-cols-8 p-6 gap-10">
      <main className="bg-white rounded-xl shadow-lg px-8 py-16 col-span-7">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">Schedule an Appointment</h2>
          <IoMdClose onClick={closeModal} className="text-xl cursor-pointer" />
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium">Select Date</h3>
          <div className="flex space-x-2 mt-2">
            {dates.map((date, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${selectedDate === date ? "bg-[#4D80FF] text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium">Select Time</h3>
          <div className="flex space-x-2 mt-2">
            {times.map((time, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${selectedTime === time ? "bg-[#4D80FF] text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium">Appointment Type</h3>
          <div className="flex space-x-2 mt-2">
            {["Virtual", "In Person"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg ${appointmentType === type ? "bg-[#4D80FF] text-white" : "bg-gray-200"}`}
                onClick={() => setAppointmentType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium">Reason for Visit</h3>
          <input
            type="text"
            className="w-full mt-2 py-2 px-4 border border-gray-400 rounded-lg outline-none focus:border-none focus:ring-1 focus:ring-[#4D80FF]"
            placeholder="Enter reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-between text-sm">
            <span>Doctor’s Fee:</span>
            <span className="font-medium">$$$</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Additional Charges:</span>
            <span className="font-medium">$$</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4">
            <span>Total Cost:</span>
            <span>$$$</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="py-3 rounded-lg w-full bg-[#4D80FF] text-white">Confirm Appointment</button>
        </div>
      </main>
    </div>
  );
};

export default AppointmentPage;
