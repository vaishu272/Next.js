import Link from "next/link";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/users/vaishnavi", label: "User" },
  { href: "/users/vaishnavi/posts/101", label: "Nested Route" },
  { href: "/products?category=electronics&page=2", label: "Products" },
  { href: "/slugs/foo/bar", label: "Slugs" },
  { href: "/datafetch", label: "Data Fetch" },
  { href: "/jokes", label: "Random Jokes" },
];

const Navigation = () => {
  return (
    <header className="flex flex-wrap justify-between items-center gap-4 py-4 pb-6">
      <div className="flex flex-col gap-1">
        <Link
          href="/"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
        >
          Next UI
        </Link>
        <span className="text-slate-400 text-sm">
          A polished demo of routes, layout and fetching.
        </span>
      </div>

      <nav className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex gap-1 px-4 py-3 rounded-full border border-transparent text-white bg-white/5 hover:bg-white/12 hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
