import { Badge, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { string } from "zod";

const TitleBox = ({ title, price }: { title: string; price: number }) => {
  return (
    <Box className="px-1  bg-black/70 rounded-full text-white/80">
      <Flex
        direction={{ initial: "column", md: "row" }}
        gap="2"
        align="center"
        justify="between">
        <Text as="div" size={{ initial: "1", md: "4" }} className="font-medium">
          {title}
        </Text>
        <Text
          size={{ initial: "1", md: "3" }}
          className=" px-2 py-1 rounded-full font-semibold">
          TK: {price}
        </Text>
      </Flex>
    </Box>
  );
};

export default TitleBox;
