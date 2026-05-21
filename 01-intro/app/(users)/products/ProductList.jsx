"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const searchparams = useSearchParams(); // This will trigger a re-render when search params change

  const category = searchparams.get("category") || "all";
  const page = searchparams.getAll("page") || 1;

  console.log(category, page);

  return (
    <>
      Category: {category}
      <br />
      Page: {page}
    </>
  );
};

export default ProductList;
