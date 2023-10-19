"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaStore } from "react-icons/fa";
const NavBar = () => {
  const pathname = usePathname();
  const navOptions = [
    { label: "Store", href: "/" },
    { label: "All", href: "/search" },
    { label: "Shirts", href: "/search/shirts" },
    { label: "Products", href: "/search/pants" },
  ];

  return (
    <nav className="px-5 h-14 border-b flex items-center mb-5 border-gray-600">
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <FaStore size={18} />
        </Link>
        <ul className="flex space-x-5">
          {navOptions.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx({
                  "text-gray-200": pathname === item.href,
                  "text-gray-500": pathname !== item.href,
                })}
                href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
