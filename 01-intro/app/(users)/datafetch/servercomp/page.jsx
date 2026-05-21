import React, { Suspense } from "react";
import { Sparkles, AlertCircle } from "lucide-react";
import UserCard from "./UserCard";

const DataFetchServer = async ({ searchParams }) => {
  const params = await searchParams;
  const username = params?.name;

  if (!username) {
    return (
      <div className=" flex items-center justify-center bg-linear-to-br from-slate-950 via-black to-slate-900">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center text-white">
          <AlertCircle className="mx-auto mb-4 text-red-400" size={40} />

          <h1 className="text-3xl font-bold mb-2">No Username Found</h1>

          <p className="text-gray-400">Please provide a username in the URL.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 py-2 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <div className="bg-linear-to-br from-slate-950 via-black to-slate-900 rounded-3xl p-10 text-white shadow-2xl flex flex-col justify-center">
          <div className="bg-indigo-500/20 w-fit p-4 rounded-2xl mb-6">
            <Sparkles className="text-indigo-300" size={42} />
          </div>

          <h1 className="text-5xl font-bold mb-5">AI Gender Prediction</h1>

          <p className="text-gray-300 text-lg">
            Predict probable gender intelligently using the Genderize API.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <Suspense
          fallback={
            <div className="bg-linear-to-br from-slate-950 via-black to-slate-900 rounded-3xl p-10 text-white shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>

                <p className="text-gray-300 text-lg">Loading prediction...</p>
              </div>
            </div>
          }
        >
          <UserCard username={username} />
        </Suspense>
      </div>
    </div>
  );
};

export default DataFetchServer;
