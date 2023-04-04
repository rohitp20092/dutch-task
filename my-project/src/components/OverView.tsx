import React from "react";
import Arrow from "@components/common/Icons/Arrow";
import { nftItems, savedSearches, recentActivity } from "../utils/constants";

interface OverviewItemType {
  label: string;
  value: number | string;
}

interface OverviewItemProps extends OverviewItemType {}

const OverviewItem: React.FC<OverviewItemProps> = ({ label, value }) => {
  return (
    <div className="w-full flex justify-between items-center px-5 py-4">
      <div>{label}</div>
      <div>
        {value !== null ? value : "-"}
        <button className="ml-3">
          <Arrow />
        </button>
      </div>
    </div>
  );
};

interface OverviewSectionProps {
  title: string;
  items: OverviewItemType[];
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ title, items }) => {
  return (
    <div className="border rounded-md w-full bg-white flex flex-col items-center my-5">
      <h4 className="text-xl font-medium px-5 py-3 w-full">{title}</h4>
      {items.map((item) => (
        <OverviewItem key={item.label} {...item} />
      ))}
    </div>
  );
};

const Overview: React.FC = () => {
  return (
    <div>
      <h5 className="text-2xl text-slate-400">Overview</h5>
      <div className="border h-12 rounded-md w-full bg-white flex justify-between items-center p-5 mt-5">
        <div>Wallet balance</div>
        <div>
          0.489 ETH
          <button className="ml-3">
            <Arrow />
          </button>
        </div>
      </div>
      <OverviewSection title="NFTs" items={nftItems} />
      <OverviewSection title="Saved Searches" items={savedSearches} />
      <OverviewSection title="Recent Activity" items={recentActivity} />
    </div>
  );
};

export default Overview;
