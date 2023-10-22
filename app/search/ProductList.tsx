"use client";
import { Product } from "@prisma/client";
import React from "react";
import TitleBox from "../components/TitleBox";
import { Box, Card, Grid, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  products: Product[];
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <Grid columns={{ initial: "2", sm: "4" }} gap="3">
      {products.map((product) => (
        <Link key={product.id} href={"/products/" + product.id}>
          <Card size="2">
            <Inset side="top" pb="current">
              <Image
                width={400}
                height={300}
                src={product.image}
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",

                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>{product.title}</Strong> <br />
              <Text as="span" size="2">
                Tk {product.price}
              </Text>
            </Text>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

export default ProductList;
