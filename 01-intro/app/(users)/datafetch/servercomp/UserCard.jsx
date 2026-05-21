import React from "react";
import { User, Venus, Mars } from "lucide-react";

const UserCard = async ({ username }) => {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(`https://api.genderize.io/?name=${username}`, {
    cache: "no-store",
  });

  const data = await res.json();

  const gender = data?.gender || "unknown";
  const probability = Number(data?.probability || 0);

  const confidence = (probability * 100).toFixed(1);

  const isMale = gender === "male";

  return (
    <div className="bg-linear-to-br from-slate-950 via-black to-slate-900 rounded-3xl p-10 text-white shadow-2xl flex flex-col justify-center">
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="bg-black/30 p-5 rounded-full border border-white/10">
          <User size={48} />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-4xl font-bold capitalize text-center mb-3">
        {data.name}
      </h2>

      {/* Gender */}
      <div className="flex justify-center items-center gap-2 mb-8">
        {gender === "male" ? (
          <>
            <Mars className="text-blue-400" size={26} />
            <span className="text-blue-400 text-xl font-semibold">Male</span>
          </>
        ) : gender === "female" ? (
          <>
            <Venus className="text-pink-400" size={26} />
            <span className="text-pink-400 text-xl font-semibold">Female</span>
          </>
        ) : (
          <span className="text-gray-400 text-xl">Unknown</span>
        )}
      </div>

      {/* Confidence */}
      <div>
        <div className="flex justify-between mb-2 text-sm text-gray-300">
          <span>Confidence</span>
          <span>{confidence}%</span>
        </div>

        <div className="w-full bg-black/40 h-4 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              isMale
                ? "bg-linear-to-r from-blue-500 to-cyan-400"
                : "bg-linear-to-r from-pink-500 to-rose-400"
            }`}
            style={{
              width: `${confidence}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
