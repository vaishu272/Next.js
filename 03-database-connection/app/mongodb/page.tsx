import connectMongoDB from "@/config/mongodb";
import User from "@/config/models/User";
import Link from "next/link";

export const dynamic = "force-dynamic";

const UsersPage = async () => {
  await connectMongoDB();

  const users = await User.find().lean();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10 overflow-hidden rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.7)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400/90">
                Production-ready data preview
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                MongoDB Users
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Browse the connected MongoDB users with a responsive card layout
                designed for clarity and fast discovery.
              </p>
            </div>

            <div className="flex-col items-center gap-3">
              <Link
                href="/"
                className="inline-flex mb-2 h-12 items-center justify-center rounded-full bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Home
              </Link>

              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-4 text-sm text-slate-300 shadow-lg shadow-slate-950/40">
                <p className="font-semibold text-white">Total users</p>
                <p className="mt-1 text-3xl font-bold text-cyan-400">
                  {users.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <article
              key={user._id}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/95 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                    {user.role || "User"}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {user.name}
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-lg font-bold text-cyan-300 shadow-inner shadow-cyan-400/10">
                  {user.name?.charAt(0) ?? "U"}
                </div>
              </div>

              <div className="space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Email:</span>{" "}
                  {user.email}
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Age:</span>{" "}
                  {user.age ?? "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-slate-100">City:</span>{" "}
                  {user.city || "Unknown"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UsersPage;
