"use client";
import { NavBarLinks } from "@/data/constant";
import Link from "next/link";
import { useState } from "react";
import Button from "../button/Button";

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
                  className={`${
                    active === item.name ? "border-b-2 border-tango-500" : ""
                  } px-3`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          active={false}
          text="Find a table"
          padx={4}
          pady={3}
          customclass=" rounded-2xl text-tango-300 font-medium "
        />
      </div>
    </div>
  );
};

export default Navbar;
