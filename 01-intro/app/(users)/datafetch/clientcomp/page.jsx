"use client";
import React, { useEffect, useState } from "react";
import { User, Venus, Mars, AlertCircle, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const DataFetchClient = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("name");

  const [userinfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`https://api.genderize.io/?name=${username}`);
        const data = await res.json();

        setUserInfo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (!username) {
    return (
      <div className="mt-20 flex items-center justify-center">
        <div className="bg-gray-800 text-white rounded-2xl p-8 text-center">
          <AlertCircle className="mx-auto mb-4 text-red-400" size={40} />
          <h2 className="text-2xl font-bold">No Username</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-2xl text-center w-87">
        {/* 🔄 Loading UI */}
        {loading ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="animate-spin" size={40} />
            <p>Loading...</p>
          </div>
        ) : userinfo ? (
          <>
            <User className="mx-auto mb-4" size={40} />

            <h2 className="text-2xl font-bold capitalize">{userinfo.name}</h2>

            {/* Gender */}
            <div className="flex justify-center gap-2 mt-2">
              {userinfo.gender === "male" ? (
                <>
                  <Mars className="text-blue-400" />
                  <span className="text-blue-400">Male</span>
                </>
              ) : userinfo.gender === "female" ? (
                <>
                  <Venus className="text-pink-400" />
                  <span className="text-pink-400">Female</span>
                </>
              ) : (
                <span className="text-gray-400">Unknown</span>
              )}
            </div>

            {/* Confidence */}
            {userinfo.probability && (
              <>
                <div className="w-full bg-gray-700 h-2 rounded mt-4">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{
                      width: `${userinfo.probability * 100}%`,
                    }}
                  ></div>
                </div>

                <p className="mt-2">
                  {(userinfo.probability * 100).toFixed(2)}%
                </p>
              </>
            )}
          </>
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default DataFetchClient;
