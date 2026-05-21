"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { useTheme } from "./components/theme-provider";

export default function Home() {
  const [name, setName] = useState("");
  const theme = useTheme();

  return (
    <div className="mt-5 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-500/20 p-4 rounded-full">
            <User className="text-indigo-300" size={40} />
          </div>
        </div>

        {/* Heading */}

        <h1
          className="text-3xl font-bold text-center mb-2"
          style={{ color: theme.colors.primary }}
        >
          Welcome 👋
        </h1>

        <p
          className="text-center mb-8"
          style={{ color: theme.colors.secondary }}
        >
          Enter your name below
        </p>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Output */}
        <div className="bg-black/20 border border-white/10 rounded-2xl p-5 text-center">
          <p className="text-gray-300 text-lg">Hello,</p>

          <h2 className="text-3xl font-bold mt-2 text-indigo-400">
            {name || "name"}
          </h2>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          On the Profiles page, you are redirect to the home page because
          middleware is used to protect the route. You can remove the middleware
          to access the Profiles page.
        </div>
      </div>
    </div>
  );
}
