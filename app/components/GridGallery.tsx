import prisma from "@/prisma/client";
import { Box, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import TitleBox from "./TitleBox";

const GridGallery = async () => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
    take: 3,
  });

  return (
    <Grid columns={{ initial: "1", sm: "3" }} gap="3">
      {products.map((product) => (
        <Box height="100%" className="overflow-hidden   space-y-4   w-[400px]">
          <Image
            alt={product.title}
            src={product.image}
            width={500}
            className="hover:scale-105 transition duration-200 rounded-lg"
            height={200}
          />
          <Box className="px-5 pb-5">
            <TitleBox price={product.price} title={product.title} />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default GridGallery;
