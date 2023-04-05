import React from "react";
//next
import Image from "next/image";
//components
import CategoryCard from "@components/components/CategoryCard";
import Bell from "@components/common/Icons/Bell";
import Folder from "@components/common/Icons/Folder";
import User from "@components/common/Icons/User";
import Search from "@components/common/Icons/Search";
import { menuItems } from "../utils/constants";
//image
import logoImg from "../../assets/logo.svg";
import Link from "next/link";
import Input from "@components/shared/Input";
import Button from "@components/shared/Button";
import { MenuItem } from "../utils/types";

const NavBar: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col bg-white border-b shadow-black px-6 pb-6">
      <nav className="w-full h-[60px] bg-[#fff]">
        <div className="flex flex-row items-center justify-between">
          <Image src={logoImg} className="float-left mr-4" alt="logo" />
          <ul className="flex justify-center mt-6">
            {menuItems.map((menuItem: MenuItem) => (
              <li
                key={menuItem.label}
                className="flex flex-col items-center item mx-4 font-light hover:font-semibold"
              >
                <Link
                  className={`text-lg ${
                    menuItem.label === "Dashboard"
                      ? "font-bold text-black"
                      : "font-normal text-gray-500"
                  }`}
                  href={menuItem.href}
                >
                  {menuItem.label}
                  {menuItem.comingSoon && (
                    <span className="text-red-600 text-xs block font-light">
                      Coming Soon
                    </span>
                  )}
                  {menuItem.label === "Dashboard" && (
                    <span className="text-red-600 text-xl block text-center leading-3">
                      &bull;
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative mt-2 rounded-md shadow-sm max-w-2xl w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <Search />
              </span>
            </div>
            <Input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Find Holder"
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-1">
              <span
                id="currency"
                className="h-full rounded-md border-0 py-0 px-3 flex items-center text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm bg-gray-300"
              >
                /
              </span>
            </div>
          </div>
          <Button className="py-[5px] px-10 bg-green-200 mx-5 text-xs h-7 font-bold text-green-600 w-[70px] stausBTN flex items-center justify-center rounded">
            <strong className="mr-2 text-2xl">&bull;</strong> Status
          </Button>
          <div className="flex flex-row justify-end">
            <Link href="#" className="ml-2 mr-4">
              <Bell />
            </Link>
            <Link href="#" className="ml-2 mr-4">
              <Folder />
            </Link>
            <Link href="#" className="ml-2">
              <User />
            </Link>
          </div>
        </div>
      </nav>
      <CategoryCard />
    </div>
  );
};

export default NavBar;
