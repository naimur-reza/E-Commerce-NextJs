import prisma from "@/prisma/client";
import { Box, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import Marquee from "react-fast-marquee";
import TitleBox from "./TitleBox";
import Image from "next/image";
import Link from "next/link";

const ProductMarquee = async () => {
  const products = await prisma.product.findMany({});
  return (
    <>
      <Heading>Featured Products</Heading>
      <Marquee>
        <Flex>
          {products.map((product) => (
            <Link key={product.id} href={"/products/" + product.id}>
              <Box
                mx="3"
                className=" h-52 overflow-hidden transition-all  space-y-4 hover:border border-gray-600 rounded-lg cursor-pointer w-[300px]  lg:w-[260px] justify-center bg-gray-300/50 flex items-center relative">
                <Image
                  alt={product.title}
                  src={product.image}
                  width={200}
                  height={200}
                  style={{
                    objectFit: "cover",
                  }}
                  className="hover:scale-105 transition duration-300 rounded-lg"
                />
              </Box>
            </Link>
          ))}
        </Flex>
      </Marquee>
    </>
  );
};

export default ProductMarquee;
