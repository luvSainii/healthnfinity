"use client";
import { Toaster, toast } from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      await axios.post("http://localhost:4000/auth/logout", {}, {
        headers: {
          Authorization: Bearer ${localStorage.getItem("token")}
        }
      });

      // Clear the token from local storage
      localStorage.removeItem("token");

      // Show a success message
      toast.success("Logged out successfully!");

      // Redirect to the login page
      router.push("/Login");
    } catch (error) {
      // Handle any errors during logout
      toast.error("Failed to logout. Try again!");
    }
  };

  return (
    <>
      <Toaster />
      <header className="w-full flex items-center justify-between bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-6 py-4 shadow-2xl text-white">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold">Healthnfinity</h2>
        </div>
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

      <button onClick={handleLogout} className="fixed bottom-8 left-8 flex items-center justify-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg shadow-lg transition-colors duration-300">
        <FiLogOut size={20} />
        <span>Logout</span>
      </button>
    </>
  );
}
