import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import SetupIntro from './SetupIntro';

const SetupAccountPage = () => {
    const [step, setStep] = useState(1);
    const [showOverlay, setShowOverlay] = useState(true);

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
    };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1)
    }


    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            {showOverlay && (
                <SetupIntro
                    onSkip={() => setShowOverlay(false)}
                    onSetup={() => setShowOverlay(false)}
                />
            )}
            {!showOverlay && (
                <div className="max-w-lg mx-auto">
                    <div className="flex items-center mb-6">
                    <button 
                        onClick={handleBackClick} 
                        className="bg-slate-400 p-2 rounded-full">
                        <FaArrowLeft className="text-white text-lg" />
                    </button>
                </div>

                    <div className="flex flex-row space-x-10">
                        <div className="flex flex-col items-center mb-6">
                            {[1, 2, 3, 4].map((timelineStep) => (
                                <div key={timelineStep} className="flex flex-col items-center mb-4">
                                    <div
                                        className={`h-6 w-6 rounded-full flex items-center justify-center border-2 ${step >= timelineStep ? "bg-[#4D80FF] border-[#4D80FF]" : "bg-white border-gray-300"}`}
                                    >
                                        {step > timelineStep ? <FaCheckCircle className="text-white" /> : timelineStep}
                                    </div>
                                    {timelineStep !== 4 && (
                                        <div
                                            className={`h-40 w-1 rounded mt-2 ${step > timelineStep ? "bg-[#4D80FF]" : "bg-gray-300"}`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div>
                                <button
                                    onClick={() => alert("Skipping this step")}
                                    className="text-gray-600 underline float-right"
                                >
                                    Skip this step
                                </button>
                            <div className="card mb-8">
                                <h3 className="text-xl font-bold mb-4">What brings you here?</h3>
                                <div className="space-y-2">
                                    {[
                                        "I am looking for a diagnosis",
                                        "I need a second opinion",
                                        "I need ongoing treatment",
                                        "I want a health consultation",
                                    ].map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={handleNextStep}
                                            className="w-full py-3 bg-blue-100 hover:bg-blue-200 rounded-lg text-left px-4"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="card mb-8">
                                <h3 className="text-xl font-bold mb-4">What health challenge(s) are you facing?</h3>
                                <select
                                    className="w-full py-3 px-4 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                                >
                                    <option value="">Select a health challenge</option>
                                    <option value="diabetes">Diabetes</option>
                                    <option value="hypertension">Hypertension</option>
                                    <option value="mental-health">Mental Health</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className="card mb-8">
                                <h3 className="text-xl font-bold mb-4">What language would you prefer your healthcare provider speak?</h3>
                                <select
                                    className="w-full py-3 px-4 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                                >
                                    <option value="">Select a language</option>
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className="card mb-8">
                                <h3 className="text-xl font-bold mb-4">Are there any special needs we should consider?</h3>
                                <textarea
                                    placeholder="Type something..."
                                    className="w-full py-3 px-4 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                                    rows="2"
                                ></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SetupAccountPage;
