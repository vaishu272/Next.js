import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { setRole, removeRole, removeUser } from "./actions";
import Image from "next/image";

export default async function AdminPage() {
  const { sessionClaims } = await auth();

  // Protect Admin Page
  if (sessionClaims?.metadata?.role !== "admin") {
    redirect("/");
  }

  const client = await clerkClient();

  const users = await client.users.getUserList();

  return (
    <div className="min-h-screen bg-black text-white p-10 pt-32">
      <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.data.map((user) => {
              const role = user.publicMetadata.role || "user";

              return (
                <tr key={user.id} className="border-t border-zinc-800">
                  {/* Image */}
                  <td className="p-4">
                    <Image
                      src={user.imageUrl}
                      alt="user"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-4">
                    {user.firstName} {user.lastName}
                  </td>

                  {/* Email */}
                  <td className="p-4">
                    {user.emailAddresses[0]?.emailAddress}
                  </td>

                  {/* Role */}
                  <td className="p-4 capitalize">{role as string}</td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex flex-wrap gap-3">
                      {/* Make Admin */}
                      <form action={setRole}>
                        <input type="hidden" name="userId" value={user.id} />

                        <input type="hidden" name="role" value="admin" />

                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                          Make Admin
                        </button>
                      </form>

                      {/* Make Moderator */}
                      <form action={setRole}>
                        <input type="hidden" name="userId" value={user.id} />

                        <input type="hidden" name="role" value="moderator" />

                        <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg">
                          Make Moderator
                        </button>
                      </form>

                      {/* Make User */}
                      <form action={setRole}>
                        <input type="hidden" name="userId" value={user.id} />

                        <input type="hidden" name="role" value="user" />

                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                          Make User
                        </button>
                      </form>

                      {/* Remove Role */}
                      <form action={removeRole}>
                        <input type="hidden" name="userId" value={user.id} />

                        <button className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg">
                          Remove Role
                        </button>
                      </form>

                      {/* Remove Role */}
                      <form action={removeUser}>
                        <input type="hidden" name="userId" value={user.id} />

                        <button className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg">
                          Delete User
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
