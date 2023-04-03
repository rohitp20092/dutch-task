import React from "react";
import Arrow from "@components/common/Icons/Arrow";

const OverView = () => {
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
      <div className="border rounded-md w-full bg-white flex flex-col items-center my-5">
        <h4 className="text-xl font-medium px-5 py-3 w-full">NFTs</h4>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>NFT items</div>
          <div>
            187
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Collections</div>
          <div>
            5
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Minted</div>
          <div>
            39
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md w-full bg-white flex flex-col items-center my-5">
        <h4 className="text-xl font-medium px-5 py-3 w-full">Saved Searches</h4>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Green apple</div>
          <div>
            187
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Christmas tree</div>
          <div>
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-md w-full bg-white flex flex-col items-center my-5">
        <h4 className="text-xl font-medium px-5 py-3 w-full">
          Recent Activity
        </h4>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Settings &#62; Account</div>
          <div>
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-5 py-4">
          <div>Sales reports</div>
          <div>
            <button className="ml-3">
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
