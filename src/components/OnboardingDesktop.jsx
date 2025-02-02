import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function NextGenHealthOnboarding({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-purple-700 text-white p-6"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
      >
        <FaTimes size={24} />
      </button>

      {/* Logo/Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center shadow-lg"
      >
        <span className="text-white text-5xl font-bold">@</span>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mt-6"
      >
        <h2 className="text-xl font-medium text-gray-200">Welcome to</h2>
        <h1 className="text-4xl font-bold">NextGen Health</h1>
      </motion.div>

      {/* Tagline with Animated Badges */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 flex flex-wrap justify-center gap-2 text-lg"
      >
        <span className="bg-white/20 px-3 py-2 rounded-md shadow-md">Find Care</span>
        <span className="bg-white/20 px-3 py-2 rounded-md shadow-md">Compare Cost</span>
        <span className="bg-white/20 px-3 py-2 rounded-md shadow-md">Schedule</span>
        <span className="italic">and</span>
        <span className="bg-white/20 px-3 py-2 rounded-md shadow-md">Stay on Top</span>
        <span className="italic">of Your Health</span>
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 flex flex-col w-full max-w-md space-y-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/auth/signup"
          className="w-full bg-white text-blue-600 text-center py-4 rounded-lg font-semibold shadow-lg transition hover:bg-gray-200"
        >
          Create an Account
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/auth/login"
          className="w-full border border-white text-center text-white py-4 rounded-lg font-semibold shadow-lg transition hover:bg-white/20"
        >
          Log in
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
