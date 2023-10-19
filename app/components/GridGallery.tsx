import prisma from "@/prisma/client";
import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import TitleBox from "./TitleBox";
import Link from "next/link";

const GridGallery = async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Heading>Latest Products</Heading>
      <Grid
        columns={{ initial: "1", sm: "3" }}
        align="center"
        justify="center"
        gap="3">
        {products.map((product) => (
          <Link key={product.id} href={"/products/" + product.id}>
            <Box className=" h-72 overflow-hidden transition-all  space-y-4 hover:border border-gray-600 rounded-lg cursor-pointer justify-center w-[400px] flex items-center relative">
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
    </>
  );
};

export default GridGallery;
