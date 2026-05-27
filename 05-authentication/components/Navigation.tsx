"use client";

import Link from "next/link";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

const Navigation = () => {
  const { userId } = useAuth();

  return (
    <nav className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          ClerkAuth
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-zinc-300 hover:text-white transition"
          >
            Dashboard
          </Link>

          <ClerkLoading>
            <div className="w-10 h-10 rounded-full border-2 border-zinc-700 border-t-white animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>
            {userId ? (
              <UserButton />
            ) : (
              <div className="flex items-center gap-4">
                <SignInButton mode="modal">
                  <button className="px-5 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
