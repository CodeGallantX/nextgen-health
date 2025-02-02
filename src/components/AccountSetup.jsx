import { motion } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function SetupAccount() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center text-gray-400">
        <button className="flex items-center gap-2">
          <FaCaretLeft size={20} /> Back
        </button>
        <button className="flex items-center gap-2">
          Skip <FaCaretRight size={20} />
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
          <input type="button" className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium focus:bg-blue-200 transition-all duration-200 ease-in-out" value="A doctor near me" />
          <input type="button" className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium focus:bg-blue-200 transition-all duration-200 ease-in-out" value="Care my HMO covers" />
          <input type="button" className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium focus:bg-blue-200 transition-all duration-200 ease-in-out" value="A specific care" />
          <input type="button" className="bg-blue-100 px-3 py-2 rounded-lg text-blue-700 font-medium focus:bg-blue-200 transition-all duration-200 ease-in-out" value="Other..." />
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
