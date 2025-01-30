import { FaTimes, FaChevronRight } from "react-icons/fa";

const SetupIntro = ({ onSkip, onSetup }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="relative mb-4">
          <button
            onClick={onSkip}
            className="absolute z-20 top-2 right-2 text-xs text-gray-400 bg-gray-200/20 hover:bg-gray-300/30 rounded-full px-3 py-1 transition-all duration-200 ease-in-out"
          >
            SKIP
          </button>
          <video
            className="rounded-lg w-full h-56 object-cover mb-4"
            controls
            autoPlay
            src="/path-to-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-2xl font-bold mb-2">One More Step</h2>
        <p className="text-gray-600 mb-6">
          You are almost there! We just need a little more information so we can
          provide the care you need.
        </p>
        <button
          onClick={onSetup}
          className="w-full py-3 bg-[#4D80FF] text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-[#3b68d7] transition-all duration-300 ease-in-out"
        >
          <span>Set up your account</span>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SetupIntro;