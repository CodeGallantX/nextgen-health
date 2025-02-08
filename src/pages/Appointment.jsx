import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import doctorsData from "../../data/doctors.json";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState("06");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [appointmentType, setAppointmentType] = useState("Virtual");
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setDoctor(doctorsData[0]);
  }, []);

  const closeModal = () => navigate(-1);

  const dates = ["02", "03", "04", "05", "06", "07", "08", "09", "10"];
  const times = ["10:00", "11:00", "12:00", "01:00", "02:00"];

  return (
    <div className="flex min-h-screen p-6 lg:grid lg:grid-cols-8 gap-10">
      <main className="bg-white rounded-2xl shadow-lg px-8 py-10 col-span-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Schedule an Appointment</h2>
          <IoMdClose onClick={closeModal} className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>

        {doctor && (
          <div className="flex items-center space-x-4 mb-6">
            <img src={doctor.image} alt={doctor.name} className="w-14 h-14 rounded-full" />
            <div>
              <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-600">{doctor.location}</p>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-700">Select Date</h3>
            <div className="flex space-x-2 mt-2">
              {dates.map((date) => (
                <button
                  key={date}
                  className={`px-4 py-2 rounded-lg border ${selectedDate === date ? "bg-[#4D80FF] text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Select Time</h3>
            <div className="flex space-x-2 mt-2">
              {times.map((time) => (
                <button
                  key={time}
                  className={`px-4 py-2 rounded-lg border ${selectedTime === time ? "bg-[#4D80FF] text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Appointment Type</h3>
            <div className="flex space-x-2 mt-2">
              {["Virtual", "In Person"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-lg border ${appointmentType === type ? "bg-[#4D80FF] text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setAppointmentType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Reason for Visit</h3>
            <input
              type="text"
              className="w-full mt-2 py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D80FF] outline-none"
              placeholder="Enter reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>
      </main>

      <aside className="bg-white rounded-2xl shadow-lg p-6 col-span-3">
        {doctor && (
          <div className="flex items-center space-x-4 mb-4">
            <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        )}
        <h3 className="text-lg font-bold mb-2">Appointment Summary</h3>
        <div className="text-sm space-y-2">
          <p><span className="font-medium">Patient Name:</span> SURNAME FIRST NAME</p>
          <p><span className="font-medium">Email:</span> **********@email.com</p>
          <p><span className="font-medium">Phone Number:</span> 090*****123</p>
          <p><span className="font-medium">Appointment Date:</span> {selectedDate}/02/2025 ({selectedTime})</p>
          <p><span className="font-medium">Appointment Type:</span> {appointmentType}</p>
          <p><span className="font-medium">Reason for Visit:</span> {reason || "N/A"}</p>
          <p><span className="font-medium">Total Fees:</span> $$$</p>
          <p><span className="font-medium">Payment:</span> Via Bank Transfer</p>
        </div>
        <button className="mt-6 w-full py-3 rounded-lg bg-[#4D80FF] text-white font-semibold text-lg hover:bg-[#3b6ad9]">
          Confirm Appointment
        </button>
      </aside>
    </div>
  );
};

export default AppointmentPage;
