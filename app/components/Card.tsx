"use client";
import { Product } from "@prisma/client";
import { Box } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TitleBox from "./TitleBox";

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Link href={"/products/" + product.id}>
        <Box className=" h-72 overflow-hidden transition-all  space-y-4 hover:border border-gray-600 rounded-lg cursor-pointer justify-center lg:w-[400px] flex items-center relative">
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
    </>
  );
};

export default ProductCard;
