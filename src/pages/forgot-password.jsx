import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <div className="px-10 md:px-16 xl:px-28 min-h-screen flex items-start md:items-center justify-start md:items-center py-10">
            <div className="w-full md:mx-auto md:flex md:flex-col md:p-10 md:max-w-2xl">
                <div className="flex items-center mb-6 md:hidden">
                    <button
                        onClick={handleBackClick}
                        className="bg-slate-300 p-2 rounded-full">
                        <FaChevronLeft className="text-white text-lg" />
                    </button>
                </div>
                <h2 className="text-5xl font-bold mb-3 text-[#4D80FF]">Forgot your password?</h2>
                <p className="text-gray-600 mb-8 ">No worries! Enter the email address you used to register and we&apos;ll send you a link to reset your password</p>

                <div className="mb-4">
                    <div className="relative flex items-center">
                        <FaEnvelope className="text-gray-500 absolute left-3 text-gray-400" />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-10 py-3 bg-gray-100 focus:bg-white focus:border focus:border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <button className="w-full py-3 bg-[#4D80FF] text-white rounded-lg hover:bg-[#3b68d7]">
                        Continue
                    </button>
                </div>

                <div className="text-sm absolute bottom-6 left-1/2 -translate-x-1/2">
                    <Link to="/auth/login" className="text-blue-600 underline">Back to Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
