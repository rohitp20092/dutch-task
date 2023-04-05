import React from "react";
import {
  OverviewItemType,
  OverviewSectionProps,
} from "@components/utils/types";
import OverviewItem from "./OverviewItem";

const OverviewSection: React.FC<OverviewSectionProps> = ({ title, items }) => {
  return (
    <div className="border rounded-md w-full bg-white flex flex-col items-center my-5">
      <h4 className="text-xl font-medium px-5 py-3 w-full">{title}</h4>
      {items.map((item: OverviewItemType) => (
        <OverviewItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default OverviewSection;
