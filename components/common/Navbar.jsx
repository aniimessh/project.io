"use client";
import { NavBarLinks } from "@/data/constant";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="bg-cod-gray-950">
      <div className="w-10/12 mx-auto py-2 text-white flex  items-center justify-between">
        <h1 className="">Logo</h1>
        <ul className="flex gap-x-8">
          {NavBarLinks.map((item, index) => {
            return (
              <li onClick={() => setActive(item.name)}>
                <Link
                  href={item.path}
                  className={`${active === item.name ? "border-b" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="border border-gray-700 rounded-md px-4 py-3">
          Find a Table
        </button>
      </div>
    </div>
  );
};

export default Navbar;
