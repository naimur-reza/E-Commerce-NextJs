import Link from "next/link";
import React from "react";
import { FaStore } from "react-icons/fa";
const NavBar = () => {
  const navOptions = [
    { label: "All", href: "/" },
    { label: "Shirts", href: "/shirts" },
    { label: "Products", href: "/pants" },
  ];

  return (
    <nav className="px-5 h-14 border-b flex items-center mb-5">
      <div className="flex items-center space-x-5">
        <FaStore size={18} />
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
