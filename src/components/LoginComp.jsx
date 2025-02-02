import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [emailOrFullname, setEmailOrFullname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailOrFullname && password) {
            navigate('/dashboard')
        }
        else {
            console.log("Error validating form")
        }
    }

    return (
        <div className="px-10 md:px-16 xl:px-28 min-h-screen flex flex-col items-center justify-center py-6">
            <div className="flex flex-col items-center justify-center p-10 border-1 border-gray-300/50 rounded-2xl w-full max-w-2xl">
                <h2 className="text-center text-[#4D80FF] text-5xl font-extrabold mb-2 w-full">
                    Welcome Back!</h2>
                <p className="text-gray-600 mb-8 w-4/5">Let us continue to help you access the care you deserve</p>

                <form className="w-full max-w-2xl bg-white space-y-3" onSubmit={handleSubmit}>
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
                            <FaCheckCircle
                                className={`absolute right-3 ${emailOrFullname ? "text-green-500" : "text-gray-300"
                                    }`}
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
                            <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 text-gray-400">
                                {passwordVisible ? <FaEye className="text-gray-500" /> : <FaEyeSlash className="text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mb-6">
                        <Link to="/forgot-password" className="text-blue-600 text-sm underline">Forgot password?</Link>
                    </div>

                    <div className="mb-6">
                        <button className="w-full py-3 bg-[#4D80FF] text-white rounded-lg hover:bg-[#3b68d7] transition-all duration-300 ease-in-out">
                            Log in
                        </button>
                    </div>
                </form>

                <div className="text-sm absolute bottom-6 left-1/2 -translate-x-1/2">
                    <span>Don&apos;t have an account? </span>
                    <Link to="/auth/signup" className="text-blue-600 underline">Create one</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
