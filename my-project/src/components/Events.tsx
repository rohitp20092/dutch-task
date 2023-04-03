import React from "react";
//Next
import Image from "next/image";
//components
import OverView from "@components/components/OverView";
import Calendar from "@components/common/Icons/Calendar";
import BarChart from "@components/common/Icons/BarChart";
import Check from "@components/common/Icons/Check";
import Clock from "@components/common/Icons/Clock";
//image
import eventImg1 from "../../assets/eventImage.gif";
import eventImg2 from "../../assets/eventImage2.gif";

const Events: React.FC = () => {
  return (
    <div className="container mx-auto mt-5 grid grid-cols-3 gap-4 px-10">
      <div className="col-span-2">
        <h5 className="text-2xl text-slate-400">Events</h5>
        <div className="w-full border rounded-md mt-4 grid grid-cols-3 gap-4 py-6 relative z-50 bg-white">
          <div className="absolute blur-lg opacity-50 w-full h-full text-center top-0 z-0">
            <Image src={eventImg1} alt="event Image" className="mx-auto h-96" />
          </div>
          <div className="col-span-2 relative z-50">
            <div className="grid-cols-3 flex mb-5">
              <div className="rounded-r-lg flex bg-lime-500 w-40 h-7 text-white pl-10 mr-5 items-center">
                <span className="mr-2">
                  <BarChart />
                </span>
                Airdrop
              </div>
              <div className="rounded-lg flex bg-gray-200 w-24 h-7 px-2 mr-5 font-bold items-center">
                <span className="mr-2">
                  <Calendar />
                </span>
                Harvest
              </div>
              <div className="whitespace-nowrap flex flex-row items-center">
                <span className="mr-2">
                  <Clock />
                </span>
                <strong className="mr-2">Started</strong> 2022-09-13 08:57:15
              </div>
            </div>
            <div className="my-4 mx-5 text-base">
              🍎🍌🍍The Fruit Salad Game🍆🥦🥕
            </div>
            <div className="my-4 mx-5">
              <span className="text-3xl font-bold mr-2">Manure </span> x 100
            </div>
            <div className="my-4 mx-5 text-base">
              Wallet Transactions: <strong className="ml-3 mr-2">44</strong>
              Success <strong className="ml-3 mr-2">8</strong> Processing
              <strong className="ml-3 mr-2">2</strong> Failed
            </div>
            <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600 mx-5 rounded-full">
              <div className="h-5 bg-red-600 w-64 rounded-full"></div>
            </div>
            <div className="mt-4 mx-5">
              <button className="rounded-md text-white w-32 h-10 text-base font-bold bg-black mr-2">
                More Details
              </button>
              <button className="rounded-md w-20 h-10 text-base border-2 border-black mr-2">
                Cancel
              </button>
              <input type="checkbox" className="checked:bg-black mr-2" />
              <span className="text-base">Receive report on email</span>
            </div>
          </div>
          <div>
            <Image className="mt-10" alt="event Image" src={eventImg1} />
          </div>
        </div>
        <div className="w-full border rounded-md mt-6 grid grid-cols-3 gap-4 py-6 relative z-50 bg-white">
          <div className="absolute blur-lg opacity-50 w-full h-full text-center top-0 z-0">
            <Image src={eventImg2} alt="event Image" className="mx-auto h-96" />
          </div>
          <div className="col-span-2 relative z-50">
            <div className="grid-cols-3 flex mb-5">
              <div className="rounded-r-lg flex bg-sky-900 w-40 h-7 text-white pl-10 mr-5 items-center">
                <span className="mr-2">
                  {" "}
                  <Check />
                </span>
                Airdrop
              </div>
              <div className="rounded-lg flex bg-gray-200 w-30 h-7 px-2 mr-5 font-bold items-center">
                <span className="mr-2">
                  <Calendar />
                </span>
                It’s Raining
              </div>
              <div className="whitespace-nowrap flex flex-row items-center">
                <span className="mr-2">
                  <Clock />
                </span>
                <strong className="mr-2">Started</strong> 2022-09-13 08:57:15
              </div>
            </div>
            <div className="my-4 mx-5 text-base">
              🍎🍌🍍The Fruit Salad Game🍆🥦🥕
            </div>
            <div className="my-4 mx-5">
              <span className="text-3xl font-bold mr-2">Water</span> x 100
            </div>
            <div className="my-4 mx-5 text-base">
              Wallet Transactions: <strong className="ml-3 mr-2">100</strong>{" "}
              Success <strong className="ml-3 mr-2">0</strong> Processing{" "}
              <strong className="ml-3 mr-2">0</strong> Failed
            </div>
            <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600 mx-5 rounded-full">
              <div className="h-5 bg-red-600 w-full rounded-full"></div>
            </div>
            <div className="mt-4 mx-5">
              <button className="rounded-md text-white w-32 h-10 text-base font-bold bg-black mr-2">
                More Details
              </button>
            </div>
          </div>
          <div>
            <Image className="mt-10" alt="event Image" src={eventImg2} />
          </div>
        </div>
      </div>
      <OverView />
    </div>
  );
};

export default Events;
