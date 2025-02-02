import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SetupAccount() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center text-blue-500">
        <button className="flex items-center gap-2">
          <FaArrowLeft size={20} /> Back
        </button>
        <button className="flex items-center gap-2">
          Skip <FaArrowRight size={20} />
        </button>
      </div>

      <h2 className="text-2xl font-bold text-blue-600 mt-4">Set up your account</h2>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="bg-blue-50 p-4 rounded-lg mt-4"
      >
        <h3 className="font-semibold text-gray-700">What brings you here?</h3>
        <p className="text-sm text-gray-600">I am looking for...</p>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium">A doctor near me</button>
          <button className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium">Care my HMO covers</button>
          <button className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium">A specific care</button>
          <button className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium">Other...</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
        className="bg-blue-50 p-4 rounded-lg mt-6"
      >
        <h3 className="font-semibold text-gray-700">What health challenge(s) are you facing?</h3>
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}
