import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-270-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-5 rounded-full">
            <AlertTriangle className="text-red-400" size={50} />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold mb-4 bg-linear-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">Page Not Found</h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="px-5 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
