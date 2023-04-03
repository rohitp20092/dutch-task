import React from "react";
import Image from "next/image";
import nftIcon from "../../assets/Nft.svg";
import polygonIcon from "../../assets/Polygon.svg";
import rectangleIcon from "../../assets/Rectangle.svg";
import groupIcon from "../../assets/Group.svg";
import groupIcon1 from "../../assets/Group1.svg";

const Card = () => {
  return (
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
  );
};

export default Card;
