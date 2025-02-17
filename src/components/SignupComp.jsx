import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebookF, FaApple, FaMicrosoft } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    passwordVisible: false,
  });

  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    upperLower: false,
    numberSpecial: false,
  });

  const [agreement, setAgreement] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") validatePassword(value);
  };

  const validatePassword = (password) => {
    setPasswordConditions({
      minLength: password.length >= 8,
      upperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
      numberSpecial: /(?=.*\d|.*[@$!%*?&])/.test(password),
    });
  };

  const isPasswordValid =
    passwordConditions.minLength &&
    passwordConditions.upperLower &&
    passwordConditions.numberSpecial;

  const isFormValid =
    formData.fullName &&
    formData.email &&
    isPasswordValid &&
    formData.password &&
    formData.dateOfBirth &&
    agreement;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/auth/verification');
    }
  };
  return (
    <div className="px-10 px-16 xl:px-28 min-h-screen flex flex-col items-center justify-center py-6">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl">
        <div className="w-1/5 mb-10" >
          <img src="/logo.png" alt="logo" className="w-full" />
        </div>
        <h1 className="text-center text-[#4D80FF] text-5xl font-extrabold mb-2 w-full">
          Create your Account
        </h1>
        <p className="text-center text-gray-800">
          Find accessible health care now
        </p>
        <form className="w-full bg-white space-y-3 mt-6" onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-400" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
            />
            <FaCheckCircle
              className={`absolute right-3 ${formData.fullName ? "text-green-500" : "text-gray-300"
                }`}
            />
          </div>
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
            />
            <FaCheckCircle
              className={`absolute right-3 ${formData.email ? "text-green-500" : "text-gray-300"
                }`}
            />
          </div>
          <div>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-400" />
              <input
                type={formData.passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
              />
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    passwordVisible: !formData.passwordVisible,
                  })
                }
                className="absolute right-3 text-gray-400"
              >
                {formData.passwordVisible ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${passwordConditions.minLength ? "text-green-500" : "text-gray-300"
                    }`}
                />
                At least 8 characters
              </li>
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${passwordConditions.upperLower ? "text-green-500" : "text-gray-300"
                    }`}
                />
                At least 1 upper & lowercase letter
              </li>
              <li className="flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${passwordConditions.numberSpecial ? "text-green-500" : "text-gray-300"
                    }`}
                />
                At least 1 number and special character
              </li>
            </ul>
          </div>
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-400" />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setAgreement(!agreement)}
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${agreement ? "bg-[#4D80FF] text-white" : "border-gray-300"
                }`}
            >
              {agreement && <FaCheckCircle />}
            </button>
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-[#4d80ff] underline"> Terms and Conditions</a>
            </span>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 text-white rounded-lg ${isFormValid ? "bg-[#4D80FF]" : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Sign Up
          </button>
        </form>
      </div>
      <p className="mt-4 text-sm italic text-black text-center">
        By continuing, you agree to <a href="#" className="text-[#4d80ff]">Privacy Policy</a> and <a href="#" className="text-[#4d80ff]">Terms of Use</a>
      </p>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Already a member?{" "}
        <a href="/auth/login" className="text-[#4D80FF] underline">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Signup;
