import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [emailOrFullname, setEmailOrFullname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="min-h-screen flex items-start justify-start py-10 px-10">
            <div className="w-full">
                <h2 className="text-5xl font-bold mb-2 text-[#4D80FF] w-1/3">Welcome Back!</h2>
                <p className="text-gray-600 mb-8 w-1/2">Let us continue to help you access the care you deserve</p>
                
                <div className="mb-4">
                <div className="relative flex items-center">
                        <FaEnvelope className="text-gray-500 absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            id="emailOrFullname"
                            value={emailOrFullname}
                            onChange={(e) => setEmailOrFullname(e.target.value)}
                            placeholder="Enter email or fullname"
                            className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                        />
                    </div>
                </div>

                <div className="mb-2">
                <div className="relative flex items-center">
                        <FaLock className="text-gray-500 absolute left-3 text-gray-400" />
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                        />
                        <button type="button" onClick={togglePasswordVisibility}
                        className="absolute right-3 text-gray-400"
                        >
                            {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-end items-center mb-6">
                    <Link to="/forgot-password" className="text-blue-600 text-sm underline">Forgot password?</Link>
                </div>

                <div className="mb-6">
                    <button className="w-full py-3 bg-[#4D80FF] text-white rounded-lg hover:bg-[#3b68d7]">
                        Login
                    </button>
                </div>

                <div className="text-sm absolute bottom-6 left-1/2 -translate-x-1/2">
                    <span>Don&apos;t have an account? </span>
                    <Link to="/auth/signup" className="text-blue-600 underline">Create one</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
