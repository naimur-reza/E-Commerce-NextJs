import React from "react";

const Footer = () => {
  return (
    <div className="px-5 h-14 flex items-center border-t">
      <div className=" flex">
        <h1 className="pr-5 border-r">
          © {new Date().getFullYear()} Daddy, Inc. All rights reserved.
        </h1>
        <h1 className="pl-5">Designed From Feni</h1>
      </div>
    </div>
  );
};

export default Footer;
