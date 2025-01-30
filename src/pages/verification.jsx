import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);

  const email = "(jo******n.doe@gmail.com)"; 

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else {
      setIsResendDisabled(false);
    }
  }, [countdown]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setIsResendDisabled(true);
    setOtp(new Array(6).fill(""));
    console.log("Resend code triggered.");
  };


  const navigate = useNavigate();
  const handleVerify = () => {
    const otpString = otp.join("");
    console.log("Entered OTP:", otpString);
    
    if (otpString === "123456") {  
        navigate('/account-setup');
    } else {
        alert("Invalid OTP, please try again.");
    }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 px-6">
      <div className="w-full max-w-md p-6 bg-white border-1 border-gray-300 rounded-2xl">
        <h1 className="text-2xl font-bold text-[#4D80FF] mb-4 text-center">
          Verify Your Email
        </h1>
        <p className="text-gray-600 text-left mb-6">
          Enter the 6-digit code sent to the email address you signed up with:{" "}
          <br/>
          <span className="font-normal text-gray-400">{email}</span>
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="*"
              className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className={`w-full py-3 text-white font-bold rounded-lg ${
            otp.every((digit) => digit) ? "bg-[#4D80FF]" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!otp.every((digit) => digit)}
        >
          Verify
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Didn’t receive a code?{" "}
            {isResendDisabled ? (
              <span>Resend code in {countdown}s</span>
            ) : (
              <button
                onClick={handleResend}
                className="text-blue-500 underline font-medium"
              >
                Resend Code
              </button>
            )}
          </p>
        </div>
        </div>
        <div className="w-full max-w-md p-6 bg-white border-1 border-gray-300 rounded-2xl">
          <p className="text-sm text-gray-600">
            Can’t verify via email?
          </p>
            <a href="#phone" className="text-[#4D80FF] text-sm underline font-medium">
              Verify by adding your phone number
            </a>
      </div>
    </div>
  );
};

export default Verification;
