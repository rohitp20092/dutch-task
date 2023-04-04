import React from "react";
import Image from "next/image";
import { icons } from "../utils/constants";

const Card: React.FC = () => {
  return (
    <div className="mt-12 grid grid-cols-5 gap-8 w-full">
      {icons?.map((icon, index) => (
        <div className="w-72 text-center" key={index}>
          <div
            className={`w-full h-40 rounded-lg flex items-center justify-center mb-2 ${icon.color}`}
          >
            <Image src={icon.src} alt={icon.alt} />
          </div>
          <p>{icon.alt.replace(/-/g, " ").toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
