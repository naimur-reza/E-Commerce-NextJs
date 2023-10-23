"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton, TextField } from "@radix-ui/themes";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStore } from "react-icons/fa";
const NavBar = () => {
  const [searchName, setSearchName] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const navOptions = [
    { label: "Store", href: "/" },
    { label: "All", href: "/search" },
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.append("params", searchName);
    const query = params.size ? "?" + params.toString() : "";
    router.push("/search" + query);
  };
  return (
    <nav className="px-5 h-14 border-b flex items-center mb-5 ">
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <FaStore size={18} />
        </Link>
        <ul className="flex space-x-5">
          {navOptions.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx({
                  "text-gray-800": pathname === item.href,
                  "text-gray-500": pathname !== item.href,
                })}
                href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <TextField.Root className="p-1">
          <TextField.Input
            onChange={(e) => setSearchName(e.target.value)}
            radius="medium"
            placeholder="Search products…"
          />
          <TextField.Slot>
            <IconButton onClick={handleSearch} size="3" variant="outline">
              <MagnifyingGlassIcon height="20" width="20" />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
      </div>
    </nav>
  );
};

export default NavBar;
