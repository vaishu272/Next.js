import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Image from "next/image";

export default async function DashboardPage() {
  // Authentication
  const { userId, sessionClaims } = await auth();

  // Redirect if not logged in
  if (!userId) {
    redirect("/");
  }

  // Current User
  const user = await currentUser();

  // User Role
  const role = (sessionClaims?.metadata?.role as string) || "user";

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-950 to-zinc-900 text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">Dashboard</h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Welcome back to your dashboard.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* User Image */}
            <Image
              src={user?.imageUrl || "/profile.png"}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-zinc-700 object-cover"
            />

            {/* User Details */}
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold">{user?.fullName}</h2>

                <p className="text-zinc-400 mt-1">
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>

              {/* Role Badge */}
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-sm font-medium capitalize">
                  {role}
                </span>
              </div>

              {/* User Info */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-zinc-800 rounded-2xl p-4">
                  <p className="text-zinc-400 text-sm">User ID</p>

                  <p className="mt-1 text-sm break-all">{userId}</p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-4">
                  <p className="text-zinc-400 text-sm">Role</p>

                  <p className="mt-1 capitalize">{role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Debug Section */}
        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Session Information</h3>

          <pre className="overflow-x-auto text-sm text-zinc-300">
            {JSON.stringify(sessionClaims, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
