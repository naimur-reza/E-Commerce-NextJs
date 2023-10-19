import { Text } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 h-14 flex items-center border-t border-gray-600 text-gray-300 justify-center">
      <Text as="p">
        © {new Date().getFullYear()} Store, Inc. All rights reserved
      </Text>
    </div>
  );
};

export default Footer;
