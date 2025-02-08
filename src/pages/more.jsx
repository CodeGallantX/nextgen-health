import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SubscriptionSection  from "../components/Subscribe";
import NavBar from "../components/NavBar";

const sections = [
  "Messages",
  "Telemedicine",
  "Contact Your HMO",
  "Testimonials",
  "Transfer Patient Records",
  "How It Works",
  "About NextGen Health",
  "For Organizations",
  "For Doctors",
];

const More =() => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex min-h-screen bg-white p-6">
      <NavBar />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-[#4D80FF]">More Information</h2>
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between w-full p-4 text-left border rounded-lg bg-white shadow-md"
                  onClick={() => toggleSection(index)}
                >
                  {section}
                  {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openSections[index] && (
                  <p className="p-4 bg-gray-50 rounded-lg mt-2">
                    Detailed information about {section} goes here.
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <SubscriptionSection />
          </div>
        </div>
      </main>
    </div>
  );
}


export default More