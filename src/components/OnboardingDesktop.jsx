import { FaTimes } from "react-icons/fa";

export default function Onboarding({ onClose }) {
  return (
    <div className="relative flex flex-row items-center justify-center h-screen overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
      >
        <FaTimes size={24} />
      </button>
      <div className="relative w-1/2 -left-52" >
        <img src="/logo.png" alt="logo" className="w-full" />
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-200">Welcome to</h2>
          <h1 className="text-4xl font-bold">NextGen Health</h1>
        </div>

        <p className="mt-4 flex flex-wrap justify-center gap-2 text-lg">
          <span className="bg-white/20 px-3 py-2 rounded-md ">Find Care</span>
          <span className="bg-white/20 px-3 py-2 rounded-md ">Compare Cost</span>
          <span className="bg-white/20 px-3 py-2 rounded-md ">Schedule</span>
          <span className="italic">and</span>
          <span className="bg-white/20 px-3 py-2 rounded-md ">Stay on Top</span>
          <span className="italic">of Your Health</span>
        </p>

        <div
          className="mt-8 flex flex-col w-full max-w-lg space-y-4"
        >
          <a
            href="/auth/signup"
            className="w-full bg-blue-500 text-white text-center py-4 rounded-lg font-semibold transition hover:bg-blue-600"
          >
            Create an Account
          </a>
          <a
            href="/auth/login"
            className="w-full border border-blue-500 text-center text-blue-500 py-4 rounded-lg font-semibold  transition hover:bg-white/20"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
