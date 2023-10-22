import React from "react";
import ProductTable from "./ProductTable";
import prisma from "@/prisma/client";

const page = async () => {
  const products = await prisma.product.findMany();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
};

export default page;
