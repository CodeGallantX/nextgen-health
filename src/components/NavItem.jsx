import { motion } from 'framer-motion';

const NavItem = ({ icon, label }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center space-x-3 p-3 hover:bg-blue-100 rounded-lg cursor-pointer transition"
    >
      <div className="text-blue-500 text-lg">{icon}</div>
      <span className="text-gray-700 font-semibold">{label}</span>
    </motion.div>
  );

  export default NavItem