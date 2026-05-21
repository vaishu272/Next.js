"use client";

import React, { useEffect, useState } from "react";
import { Laugh, RefreshCcw, Eye, EyeOff } from "lucide-react";

const Jokes = () => {
  const [randomJoke, setRandomJoke] = useState(null);
  const [showJoke, setShowJoke] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchRandomJokes = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );

      const data = await res.json();

      setRandomJoke(data);
      setShowJoke(false);
    } catch (err) {
      console.error("Error fetching jokes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // async scheduling avoids synchronous state update warning
    const timer = setTimeout(() => {
      fetchRandomJokes();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-5 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-yellow-400/20 p-4 rounded-full">
            <Laugh className="text-yellow-300" size={40} />
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="text-xl animate-pulse text-gray-300">
            Loading your joke...
          </p>
        ) : (
          <>
            {/* Setup */}
            <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              {randomJoke?.setup}
            </h1>

            {/* Punchline */}
            {showJoke && (
              <div className="mb-6">
                <p className="text-xl text-green-300 font-semibold">
                  {randomJoke?.punchline}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Reveal */}
              <button
                onClick={() => setShowJoke((prev) => !prev)}
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-all px-5 py-3 rounded-xl font-medium shadow-lg"
              >
                {showJoke ? <EyeOff size={18} /> : <Eye size={18} />}
                {showJoke ? "Hide Answer" : "Reveal Answer"}
              </button>

              {/* New Joke */}
              <button
                onClick={fetchRandomJokes}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all px-5 py-3 rounded-xl font-medium shadow-lg"
              >
                <RefreshCcw size={18} />
                New Joke
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jokes;
