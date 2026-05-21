import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-4">
      <h1 className="text-4xl font-bold">Products Page</h1>
      <Link href="/products/1" className="ml-4 text-blue-500 hover:underline">
        View Product 1
      </Link>
      <Link href="/products/2" className="ml-4 text-blue-500 hover:underline">
        View Product 2
      </Link>
      <Link href="/products/3" className="ml-4 text-blue-500 hover:underline">
        View Product 3
      </Link>
      <div className="mt-4 max-w-2xl text-center text-lg text-gray-500">
        This page demonstrates dynamic route handling with static parameters
        using generateStaticParams(). Click on any product link to see the
        product ID and current date. If you try to access a product ID that is
        not in the static parameters (e.g., /products/4), you will get a 404
        error because dynamicParams is set to false. You can change
        dynamicParams to true to allow access to any product ID, but it will not
        be statically generated at build time.
      </div>
    </div>
  );
}
