"use client";
import { Product } from "@prisma/client";
import React from "react";
import TitleBox from "../components/TitleBox";
import { Box, Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  products: Product[];
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <Grid columns={{ initial: "1", sm: "3" }} gap="4">
      {products.map((product) => (
        <Link href={"/products/" + product.id}>
          <Box
            key={product.id}
            className=" h-72 overflow-hidden transition-all  space-y-4 hover:border bg-black/30 border-gray-600 rounded-lg cursor-pointer justify-center w-[400px] flex items-center relative">
            <Image
              alt={product.title}
              src={product.image}
              width={600}
              height={300}
              style={{
                objectFit: "cover",
              }}
              className="hover:scale-105 transition duration-300 rounded-lg"
            />
            <Box className=" absolute bottom-7 left-4">
              <TitleBox price={product.price} title={product.title} />
            </Box>
          </Box>
        </Link>
      ))}
    </Grid>
  );
};

export default ProductList;
