import { Badge, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { string } from "zod";

const TitleBox = ({ title, price }: { title: string; price: number }) => {
  return (
    <Box className="=   py-1 px-2">
      <Flex gap="3" align="center" justify="between">
        <Text as="div" size="4" color="gray" className="font-medium">
          {title}
        </Text>
        <Text
          size="3"
          className="bg-gray-400/50 px-2 py-1 rounded-full font-semibold">
          TK: {price}
        </Text>
      </Flex>
    </Box>
  );
};

export default TitleBox;
