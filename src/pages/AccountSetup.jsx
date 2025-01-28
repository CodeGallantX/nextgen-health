import { useState } from "react";
import { FaArrowLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import SetupIntro from '../components/SetupIntro';

const SetupAccountPage = () => {
    const [step, setStep] = useState(1);
    const [showOverlay, setShowOverlay] = useState(true);

    const handleNextStep = () => {
        setStep((prev) => prev + 1);
    };

    const handlePreviousStep = () => {
        setStep((prev) => Math.max(1, prev - 1));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
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
                                    className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left px-4"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="card mb-8">
                        <h3 className="text-xl font-bold mb-4">What health challenge(s) are you facing?</h3>
                        <select
                            className="w-full py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                        >
                            <option value="">Select a health challenge</option>
                            <option value="diabetes">Diabetes</option>
                            <option value="hypertension">Hypertension</option>
                            <option value="mental-health">Mental Health</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                );
            case 3:
                return (
                    <div className="card mb-8">
                        <h3 className="text-xl font-bold mb-4">What language would you prefer your healthcare provider speak?</h3>
                        <select
                            className="w-full py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                        >
                            <option value="">Select a language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                );
            case 4:
                return (
                    <div className="card mb-8">
                        <h3 className="text-xl font-bold mb-4">Are there any special needs we should consider?</h3>
                        <textarea
                            placeholder="Type something..."
                            className="w-full py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D80FF]"
                            rows="4"
                        ></textarea>
                    </div>
                );
            default:
                return null;
        }
    };

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
                    <button
                        onClick={handlePreviousStep}
                        className="flex items-center text-gray-600 mb-6"
                    >
                        <FaArrowLeft className="mr-2" /> Back
                    </button>

                    {/* Vertical Timeline */}
                    <div className="relative mb-6">
                        {[1, 2, 3, 4].map((timelineStep) => (
                            <div key={timelineStep} className="mb-4 flex items-center">
                                <div
                                    className={`h-6 w-6 rounded-full flex items-center justify-center border-2 ${step >= timelineStep ? "bg-[#4D80FF] border-[#4D80FF]" : "bg-white border-gray-300"}`}
                                >
                                    {step > timelineStep ? <FaCheckCircle className="text-white" /> : timelineStep}
                                </div>
                                {timelineStep !== 4 && (
                                    <div
                                        className={`h-1 w-20 mx-4 ${step > timelineStep ? "bg-[#4D80FF]" : "bg-gray-300"}`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-8">
                        <span className="text-gray-600">Step {step} of 4</span>
                        <button
                            onClick={() => alert("Skipping this step")}
                            className="text-gray-600 underline"
                        >
                            Skip this step
                        </button>
                    </div>

                    {renderStep()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        {step < 4 && (
                            <button
                                onClick={handleNextStep}
                                className="w-24 py-3 bg-[#4D80FF] text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-[#3b68d7]"
                            >
                                <span>Next</span>
                                <FaChevronRight />
                            </button>
                        )}
                        {step === 4 && (
                            <button
                                className="w-full py-3 bg-[#4D80FF] text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-[#3b68d7]"
                            >
                                <span>Find care now</span>
                                <FaChevronRight />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SetupAccountPage;
