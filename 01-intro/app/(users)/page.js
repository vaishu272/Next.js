"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900/96 to-slate-900/82 border border-slate-400/12 rounded-3xl shadow-2xl p-10">
      <p className="uppercase tracking-widest font-extrabold text-sky-400 mb-4 text-xs">
        Interactive Next.js Demo
      </p>
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight m-0">
        Smooth UI, route examples, and modern page layouts.
      </h1>
      <p className="mt-5 text-slate-400 text-base max-w-4xl leading-relaxed">
        Explore the demo project built with Next.js, Tailwind styling, nested
        layouts, and data fetching examples. Use the navigation above to test
        routes, query parameters, and dynamic pages.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-sky-400/35 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-sky-100 bg-sky-400/16 hover:bg-white/12"
        >
          Learn More
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-indigo-400/28 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-blue-100 bg-indigo-400/16 hover:bg-white/12"
        >
          Read Blog <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        <div className="bg-white/4 border border-slate-400/12 rounded-xl p-6 min-h-[170px]">
          <h3 className="m-0 mb-3 text-lg">Dynamic Route Patterns</h3>
          <p className="m-0 text-slate-400 leading-relaxed">
            Browse examples of dynamic routes, nested paths, and route groups in
            Next.js.
          </p>
        </div>
        <div className="bg-white/4 border border-slate-400/12 rounded-xl p-6 min-h-[170px]">
          <h3 className="m-0 mb-3 text-lg">Server + Client Fetching</h3>
          <p className="m-0 text-slate-400 leading-relaxed">
            Compare server-side and client-side data fetching using the built-in
            app router.
          </p>
        </div>
        <div className="bg-white/4 border border-slate-400/12 rounded-xl p-6 min-h-[170px]">
          <h3 className="m-0 mb-3 text-lg">Stylish Layouts</h3>
          <p className="m-0 text-slate-400 leading-relaxed">
            See how nested layouts and route-specific wrappers can organize
            shared UI.
          </p>
        </div>
        <div className="bg-white/4 border border-slate-400/12 rounded-xl p-6 min-h-[170px]">
          <h3 className="m-0 mb-3 text-lg">Fast Interactions</h3>
          <p className="m-0 text-slate-400 leading-relaxed">
            Enjoy smooth hover states, subtle motion, and clean typography
            across the app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
