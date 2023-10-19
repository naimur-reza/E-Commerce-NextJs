import Image from "next/image";
import React from "react";
import image from "@/public/banner.jpg";
const Banner = () => {
  return (
    <div className="flex items-center justify-center pb-10">
      <Image src={image} alt="banner" className="rounded-lg" width={1500} />
    </div>
  );
};

export default Banner;
