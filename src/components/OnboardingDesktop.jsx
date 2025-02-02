import { FaTimes } from "react-icons/fa";

export default function NextGenHealthModal() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <button className="absolute top-4 right-4 text-blue-500">
                    <FaTimes size={20} />
                </button>

                <div className="flex flex-row items-center mb-4">
                    <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">@</span>
                    </div>

                    <div>
                        <h2 className="text-gray-700 text-lg font-medium">Welcome to</h2>
                        <h1 className="text-2xl font-bold text-gray-900">NextGen Health</h1>

                        <p className="mt-2 flex flex-wrap items-end text-gray-600 text-sm">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-md">Find Care,</span>
                            <span className="bg-cyan-400 text-white px-2 py-1 rounded-md ml-1">Compare Cost,</span>
                            <span className="bg-purple-400 text-white px-2 py-1 rounded-md ml-1">Schedule,</span>
                            <span className="italic"> and </span>
                            <span className="bg-indigo-400 text-white px-2 py-1 rounded-md">Stay on Top</span>
                            <span className="italic"> of Your Health</span>
                        </p>

                        <div className="mt-6 flex flex-col items-start justify-center space-y-3 ">
                            <a href="/auth/signup" className="w-2/5 bg-blue-500 text-white text-center py-3 px-4 rounded-md font-medium">
                                Create an Account
                            </a>
                            <a href="/auth/login" className="w-2/5 border border-blue-500 text-center text-blue-500 py-3 px-4 rounded-md font-medium">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
