export default function Home() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-zinc-800 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-white leading-tight">
          Next.js Authentication <br /> using Clerk
        </h1>

        <p className="mt-6 text-zinc-300 text-lg leading-8">
          Secure and modern authentication system with protected routes,
          middleware, sign in, sign up and user profile management.
        </p>
      </div>
    </div>
  );
}
