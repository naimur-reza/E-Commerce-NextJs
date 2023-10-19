import prisma from "@/prisma/client";
import { Box, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import Marquee from "react-fast-marquee";
import TitleBox from "./TitleBox";
import Image from "next/image";

const ProductMarquee = async () => {
  const products = await prisma.product.findMany({});
  return (
    <>
      <Heading>Featured Products</Heading>
      <Flex>
        {products.map((product) => (
          <Marquee key={product.id}>
            <Box className=" h-52 overflow-hidden transition-all  space-y-4 hover:border border-gray-600 rounded-lg cursor-pointer  w-[400px] justify-center bg-black flex items-center relative">
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
              <Box className=" absolute bottom-7">
                <TitleBox price={product.price} title={product.title} />
              </Box>
            </Box>
          </Marquee>
        ))}
      </Flex>
    </>
  );
};

export default ProductMarquee;
