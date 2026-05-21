import Navigation from "../components/Navigation";

export default function UserLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 pb-12">
      <Navigation />
      <main className="flex flex-col gap-6">{children}</main>
    </div>
  );
}
