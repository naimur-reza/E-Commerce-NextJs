import prisma from "@/prisma/client";
import { Button, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
// import React from "react";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  params;
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  product;
  return (
    <div className="lg:flex max-w-6xl mx-auto">
      <Image height={300} width={600} src={product?.image!} alt="image" />

      <div className="space-y-4 w-full">
        <Heading size="8">{product?.title}</Heading>

        <p className="px-3 py-2 w-fit text-center bg-blue-500 font-medium rounded-full">
          Tk: {product?.price}
        </p>
        <Separator size="4" />
        <Text as="p" size="6">
          Available Size
        </Text>
        <Flex gap="3">
          {product?.size.map((size) => (
            <Button variant="outline" key={size}>
              {size}
            </Button>
          ))}
        </Flex>
        <Text as="p" color="gray">
          Fabric blend of Supima Cotton and Micromodal.
        </Text>
      </div>
    </div>
  );
};

export default ProductDetails;
