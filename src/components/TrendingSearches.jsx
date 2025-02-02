import { motion } from 'framer-motion';


const TrendingSearches = () => (
    <div className="mt-4 space-x-2">
      {["Gynecologists in Isolo", "Diagnosis", "Dentists near me", "Telemedicine"].map((item, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-gray-200 px-4 py-2 rounded-full text-gray-700"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );

  export default TrendingSearches