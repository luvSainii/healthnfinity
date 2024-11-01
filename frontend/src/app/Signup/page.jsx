"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@mui/material"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form className="space-y-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="name" className="block text-white mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your full name"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Create a password"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label htmlFor="confirm-password" className="block text-white mb-1">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Confirm your password"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </Button>
          </motion.div>
        </form>
        <motion.p 
          className="mt-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Already have an account? 
          <Link href="/Login" className="text-blue-300 hover:text-blue-200 ml-1">Log In</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}