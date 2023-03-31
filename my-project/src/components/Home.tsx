import React from "react";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import bellIcon from "../../assets/Bell.svg";
import folderIcon from "../../assets/folder.svg";
import nftIcon from "../../assets/Nft.svg";
import polygonIcon from "../../assets/Polygon.svg";
import rectangleIcon from "../../assets/Rectangle.svg";
import groupIcon from "../../assets/Group.svg";
import groupIcon1 from "../../assets/Group1.svg";
import userIcon from "../../assets/user.svg";

const Home = () => {
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Find Holder" />
              <div className="absolute inset-y-0 right-0 flex items-center p-1">
                <span id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 px-3 flex items-center text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm bg-gray-300">
                  /
                </span>
              </div>
            </div>
          </div>
          <button className="p-[5px] bg-green-100 mx-5 text-xs text-green-400 w-[70px] stausBTN flex items-center justify-center">
            Status
          </button>
          <a href="#" className="ml-2 mx-5">
            <Image src={bellIcon} alt="notification" />
          </a>
          <a href="#" className="ml-2 mx-5">
            <Image src={folderIcon} alt="folder" />
          </a>
          <a href="#" className="ml-2 mx-5">
            <Image src={userIcon} alt="user" />
          </a>
        </div>
      </nav>

      <div className="mt-12 grid grid-cols-5 gap-8 w-full">
        <div className="w-72 text-center">
          <div className="bg-lime-200 w-full h-40 rounded-lg flex items-center justify-center mb-2">
            <Image src={nftIcon} alt="nft" />
          </div>
          <p>NFT Management</p>
        </div>
        <div className="w-72 text-center">
          <div className="bg-yellow-100 w-full h-40 rounded-lg flex items-center justify-center mb-2">
            <Image src={groupIcon1} alt="holders" />
          </div>
          <p>Find Holders</p>
        </div>
        <div className="w-72 text-center">
          <div className="bg-green-100 w-full h-40 rounded-lg flex items-center justify-center mb-2">
            <Image src={rectangleIcon} alt="airdrop" />
          </div>
          <p>Airdrop</p>
        </div>
        <div className="w-72 text-center">
          <div className="bg-purple-100 w-full h-40 rounded-lg flex items-center justify-center mb-2">
            <Image src={groupIcon} alt="trade" />
          </div>
          <p>Trade-in</p>
        </div>
        <div className="w-72 text-center">
          <div className="bg-pink-100 w-full h-40 rounded-lg flex items-center justify-center mb-2">
            <Image src={polygonIcon} alt="sales" />
          </div>
          <p>Sales</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
