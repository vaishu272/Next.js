"use client";

import { useMemo, useState } from "react";
import { deleteUser, updateUser } from "@/app/actions";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserTable({ users }: { users: User[] }) {
  const [editingId, setEditingId] = useState<number | null>(null);

  const [search, setSearch] = useState("");

  // Filter Users
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-800">
      {/* Search Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">Users List</h2>

          <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
            Total: {filteredUsers.length}
          </span>
        </div>

        {/* Search Form */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 bg-black border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="p-8 text-center text-gray-400">No users found.</div>
      ) : (
        <table className="w-full border-collapse bg-black text-white">
          <thead className="bg-gray-900 border-b border-gray-700">
            <tr className="border-t border-gray-800">
              <th className="p-4 text-left text-gray-300">ID</th>

              <th className="p-4 text-left text-gray-300">Name</th>

              <th className="p-4 text-left text-gray-300">Email</th>

              <th className="p-4 text-center text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-800 hover:bg-gray-900 transition duration-300"
              >
                <td className="p-4 text-gray-400">{index + 1}</td>

                {editingId === user.id ? (
                  <>
                    <td className="p-4">
                      <input
                        form={`update-form-${user.id}`}
                        type="text"
                        name="name"
                        defaultValue={user.name}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>

                    <td className="p-4">
                      <input
                        form={`update-form-${user.id}`}
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>

                    <td className="p-4">
                      <form
                        id={`update-form-${user.id}`}
                        action={async (formData) => {
                          await updateUser(formData);
                          setEditingId(null);
                        }}
                        className="flex gap-3 justify-center"
                      >
                        <input type="hidden" name="id" value={user.id} />

                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 cursor-pointer px-4 py-2 rounded-lg transition"
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          onClick={() => setEditingId(null)}
                          className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-4 py-2 rounded-lg transition"
                        >
                          Cancel
                        </button>
                      </form>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-4 font-medium text-white">{user.name}</td>

                    <td className="p-4 text-gray-400">{user.email}</td>

                    <td className="p-4">
                      <div className="flex gap-3 justify-center">
                        <button
                          onClick={() => setEditingId(user.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer px-4 py-2 rounded-lg transition"
                        >
                          Edit
                        </button>

                        <form action={deleteUser}>
                          <input type="hidden" name="id" value={user.id} />

                          <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 cursor-pointer rounded-lg transition"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
