import { motion } from "framer-motion";
import { FaSearch, FaRegHandPointer, FaRegSmile } from "react-icons/fa";

const Banner = () => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg mb-6"
  >
    <div className="flex items-center space-x-3">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-3 rounded-full"
      >
        <FaRegSmile className="text-blue-500 text-2xl" />
      </motion.div>
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Hello, New User!
      </motion.h1>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-2 text-lg"
    >
      Welcome to <span className="font-semibold">NextGen Health</span>. How may we assist you today?
    </motion.p>

    <SearchBar />

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 flex items-center space-x-2 bg-white text-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
    >
      <FaRegHandPointer />
      <span>Get Assistance</span>
    </motion.button>
  </motion.div>
);

const SearchBar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.4 }}
    className="relative mt-4"
  >
    <input
      type="text"
      placeholder="Search by specialty, procedure, location..."
      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
    <FaSearch className="absolute top-3 right-3 text-gray-400" />
  </motion.div>
);

export default Banner;
