"use client";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent any default actions
    console.log("Logging out..."); // Check if this is logged
    window.location.href = '/Login'; // Redirect to login
  };

  return (
    <>
      <header className="w-full flex items-center justify-between bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-6 py-4 shadow-2xl text-white">
        {/* Title */}
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold">Healthnfinity</h2>
        </div>

        {/* Logout Button */}
        <button 
        onClick={handleLogout} 
        className="flex items-center space-x-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
      >
        <FiLogOut className="text-lg" />
        <span>Logout</span>
      </button>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Welcome to Healthnfinity
          </h1>
          <Link href="/Table">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg transition-colors duration-300">
              View User Logs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
