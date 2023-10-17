import Link from "next/link";
import React from "react";
import { FaStore } from "react-icons/fa";
const NavBar = () => {
  const navOptions = [
    { label: "Store", href: "/" },
    { label: "All", href: "/search" },
    { label: "Shirts", href: "/search/shirts" },
    { label: "Products", href: "/search/pants" },
  ];

  return (
    <nav className="px-5 h-14 border-b flex items-center mb-5">
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <FaStore size={18} />
        </Link>
        <ul className="flex space-x-5">
          {navOptions.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
