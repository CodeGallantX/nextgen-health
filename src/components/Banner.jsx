import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const Banner = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-500 text-white p-6 rounded-lg mb-6 shadow-md"
    >
      <h1 className="text-2xl font-bold">Hello, New User!</h1>
      <p>Welcome to NextGen Health. How may we assist you today?</p>
      <SearchBar />
    </motion.div>
  );

  
const SearchBar = () => (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by specialty, procedure, location..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute top-3 right-3 text-gray-400" />
    </div>
  );

  export default Banner;