import { motion } from 'framer-motion'; 
import { FaUserMd } from 'react-icons/fa'; 

const HealthcarePractitioners = () => (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow">
      <h2 className="font-bold text-lg">Available Healthcare Practitioners</h2>
      <div className="mt-3 space-y-3">
        {["Dr. Lege Mofeoluwa", "Dr. Yusuf Ayomide"].map((doctor, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-3 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 flex items-center space-x-3"
          >
            <FaUserMd className="text-blue-500 text-xl" />
            <span className="text-gray-700 font-medium">{doctor}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  export default HealthcarePractitioners;