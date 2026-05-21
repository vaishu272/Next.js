import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <div className="flex flex-wrap mb-6">
        <Link href="/about/teams" className="button-secondary">
          Teams
        </Link>
      </div>

      {children}
    </div>
  );
}
