import React from "react";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import Card from "./Card";
import Bell from "@components/common/Icons/Bell";
import Folder from "@components/common/Icons/Folder";
import User from "@components/common/Icons/User";
import Search from "@components/common/Icons/Search";

const NavBar = () => {
  return (
    <div className="container mx-auto flex flex-col bg-white border-b shadow-black p-10">
      <nav className="w-full h-[60px] bg-[#fff] p-[10px]">
        <div className="flex flex-row items-center justify-between">
          <Image src={logoImg} className="float-left mr-4" alt="logo" />
          <ul className="flex justify-center mt-6">
            <li className="flex flex-col items-center item mx-5 font-light hover:font-semibold">
              <a className="text-base font-bold text-black" href="#">
                Dashboard
                <span className="text-red-600 text-xl block text-center leading-3">
                  .
                </span>
              </a>
            </li>
            <li className="flex flex-col items-center item mx-5 font-light hover:font-semibold">
              <a className="text-slate-600 text-base" href="#">
                Create
              </a>
            </li>
            <li className="flex flex-col items-center item mx-5 font-light hover:font-semibold">
              <a
                className="text-slate-600 text-base whitespace-nowrap"
                href="#"
              >
                Marketplace
                <span className="text-red-600 text-base block text-center leading-5">
                  Coming soon
                </span>
              </a>
            </li>
            <li className="flex flex-col items-center item mx-5 font-light hover:font-semibold">
              <a className="text-slate-600 text-base" href="#">
                Learn
              </a>
            </li>
          </ul>
          <div>
            <div className="relative mt-2 rounded-md shadow-sm max-w-2xl w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <Search />
                </span>
              </div>
              <input
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
          </div>
          <button className="p-[5px] bg-green-100 mx-5 text-xs h-7 text-green-400 w-[70px] stausBTN flex items-center justify-center rounded">
            <strong className="mr-2 text-2xl">&bull;</strong> Status
          </button>
          <a href="#" className="ml-2 mx-5">
            <Bell />
          </a>
          <a href="#" className="ml-2 mx-5">
            <Folder />
          </a>
          <a href="#" className="ml-2 mx-5">
            <User />
          </a>
        </div>
      </nav>
      <Card />
    </div>
  );
};

export default NavBar;
