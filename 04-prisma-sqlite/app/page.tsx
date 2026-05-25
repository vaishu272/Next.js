import { prisma } from "@/lib/prisma";
import UserTable from "./UserTable";
import { createUser } from "./actions";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto  p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Prisma CRUD Example
        </h1>

        {/* Create Form */}
        <form action={createUser} className="space-y-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Create User
          </button>
        </form>

        <UserTable users={users} />
      </div>
    </div>
  );
}
