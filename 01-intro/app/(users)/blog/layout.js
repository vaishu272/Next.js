import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <div style={{ fontFamily: "var(--font-roboto)" }}>
      <div className="flex flex-wrap gap-4 mb-6">
        <Link href="/blog/blogCSR" className="button-secondary">
          BlogCSR
        </Link>
        <Link href="/blog/blogSSR" className="button-secondary">
          BlogSSR
        </Link>
        <Link href="/blog/blogSSG" className="button-secondary">
          BlogSSG
        </Link>
        <Link href="/blog/blogISR" className="button-secondary">
          BlogISR
        </Link>
      </div>
      {children}
    </div>
  );
}
