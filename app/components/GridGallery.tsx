import prisma from "@/prisma/client";
import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import ProductCard, { ProductCardProps } from "./Card";
import { Product } from "@prisma/client";

const GridGallery = async () => {
  const products: Product[] = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      category: true,
      size: true,
      createdAt: true,
      updatedAt: true,
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
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default GridGallery;
