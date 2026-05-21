import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <Link
          href="/datafetch/servercomp?name=vaishnavi"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-indigo-400/28 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-blue-100 bg-indigo-400/16 hover:bg-white/12"
        >
          Server Component
        </Link>
        <Link
          href="/datafetch/clientcomp?name=vishal"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-indigo-400/28 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-blue-100 bg-indigo-400/16 hover:bg-white/12"
        >
          Client Component
        </Link>
      </div>
      {children}
    </div>
  );
}
