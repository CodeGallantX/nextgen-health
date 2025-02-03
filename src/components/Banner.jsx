import { FaSearch, FaMicrophone, FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative bg-[#4D80FF] text-white px-10 py-20 rounded-xl shadow-lg mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold">
            Hello, New User!
          </h1>
        </div>

        <p className="text-lg">
          Welcome to <span className="font-semibold">NextGen Health</span>. How may we assist you today?
        </p>

        <div className="relative mt-3 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by specialty, procedure, location..."
            className="w-full py-2 pl-10 pr-12 rounded-xl bg-blue-100 border border-blue-200 text-black focus:border-blue-200 outline-none"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-700" />
          <FaMicrophone className="absolute top-3 right-3 text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div className="hidden md:block">
        <img src="/banner_doctor.png" alt="Doctor" className="absolute bottom-0 right-0 rounded-lg" />
      </div>

      <div className="absolute top-10 right-80 bg-blue-900/20 px-4 py-2 rounded-lg flex items-center space-x-2 text-blue-200"      >
        <FaCalendarAlt />
        <span>Feb 1, 2025</span>
      </div>
    </div>
  );
};

export default Banner;
