import React from "react";
import ProductList from "./ProductList";

const Products = async (props) => {
  const res = await props.searchParams;
  console.log(res);
  const category = res?.category || "all";
  const page = res?.page || 1;

  return (
    <>
      Search Params in server component:
      <br /> Category: {category}
      <br /> Page:{page}
      <br />
      <br />
      <h2>
        This is the ProductList Page in client component using useSearchParams
        and also example nested client components.
        <br />
        Change the search params in the URL to see the dynamic route in action.
      </h2>
      <ProductList />
    </>
  );
};

export default Products;
