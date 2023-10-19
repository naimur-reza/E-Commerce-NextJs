import React from "react";
import FilterByCategory from "./[collection]/FilterByCategory";
import ProductList from "./ProductList";
import { Category } from "@prisma/client";
import prisma from "@/prisma/client";
import FilterByPrice from "./[collection]/FilterByPrice";
import { Flex, Grid } from "@radix-ui/themes";

interface SearchProps {
  searchParams: {
    category: Category;
    orderBy: "asc" | "desc";
  };
}

const SearchProducts = async ({ searchParams }: SearchProps) => {
  searchParams;

  const categories = Object.values(Category);

  const category = categories.includes(searchParams.category)
    ? searchParams.category
    : undefined;

  const orderBy = searchParams.orderBy;
  orderBy;
  const products = await prisma.product.findMany({
    where: {
      category: category,
    },
    orderBy: {
      price: orderBy,
    },
  });
  products;
  return (
    <div>
      <Flex gap="3">
        <FilterByCategory />
        <FilterByPrice />
      </Flex>
      <ProductList products={products} />
    </div>
  );
};

export default SearchProducts;
