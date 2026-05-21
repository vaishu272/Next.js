"use client";

import Link from "next/link";

import { SearchX, House, ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-6 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 sm:h-120 sm:w-120 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-56 w-56 sm:h-72 sm:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:max-w-xl lg:max-w-2xl">
        {/* Top Gradient Section */}
        <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 px-6 py-10 text-center sm:px-8 sm:py-12">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Icon */}
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28 lg:h-32 lg:w-32">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl"></div>

            <SearchX size={40} className="relative text-white sm:size-18" />
          </div>

          {/* 404 Text */}
          <h1 className="relative mt-6 text-6xl font-black tracking-[0.15em] text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            404
          </h1>

          <p className="relative mt-3 text-lg font-medium text-white/90 sm:text-xl">
            Oops! Page Not Found
          </p>
        </div>

        {/* Bottom Content */}
        <div className="px-5 py-8 text-center text-white sm:px-8 sm:py-10">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-300 sm:max-w-lg sm:text-base lg:text-lg">
            The page you are trying to access may have been removed, renamed, or
            is temporarily unavailable.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            {/* Home Button */}
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 px-7 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-blue-500/30 sm:w-auto"
            >
              <House size={20} />
              Back To Home
            </Link>

            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-gray-200 transition duration-300 hover:scale-105 hover:bg-white/10 sm:w-auto"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-gray-500 sm:mt-10 sm:pt-6 sm:text-sm">
            Error Code: 404 • Resource Not Found
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
