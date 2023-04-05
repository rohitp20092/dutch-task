import React from "react";
import Arrow from "@components/common/Icons/Arrow";
import {
  nftItems,
  recentActivity,
  savedSearches,
} from "@components/utils/constants";
import OverviewSection from "./OverviewSection";

const OverviewCard: React.FC = () => {
  return (
    <div>
      <h5 className="text-2xl text-slate-400">Overview</h5>
      <div className="border h-12 rounded-md w-full bg-white flex justify-between items-center p-5 mt-5">
        Wallet balance
        <>
          0.489 ETH
          <button className="ml-3">
            <Arrow />
          </button>
        </>
      </div>
      <OverviewSection title="NFTs" items={nftItems} />
      <OverviewSection title="Saved Searches" items={savedSearches} />
      <OverviewSection title="Recent Activity" items={recentActivity} />
    </div>
  );
};

export default OverviewCard;
