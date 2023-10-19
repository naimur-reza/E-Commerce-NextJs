import { Text } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 h-14 flex items-center border-t border-gray-600 text-gray-300">
      <div className=" flex">
        <Text className="pr-5 border-r ">
          © {new Date().getFullYear()} Store, Inc. All rights reserved.
        </Text>
        <h1 className="pl-5">Designed From Feni</h1>
      </div>
    </div>
  );
};

export default Footer;
