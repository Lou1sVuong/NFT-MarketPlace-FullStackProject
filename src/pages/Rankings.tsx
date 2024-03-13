import React, { useState } from "react";
// import InputForm from "../components/common/InputForm";
import tempAvatar from "../assets/images/avatars/RustyRobot.svg";
// import NFTcard from "../components/homePage/NFTcard";

const Rankings: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="w-full bg-bg pt-20 py-20 px-40 text-textW">
        <h1 className="text-[3.1875rem] font-semibold">Top Creators</h1>
        <p className="text-[1.375rem] font-normal">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
      {/* tab */}
      <div className="w-full bg-bg px-40 py-10 text-textW ">
        <div className="flex justify-around w-full bg-rose-300">
          <div
            className={`${
              activeTab === 0
                ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                : "flex justify-around w-[50%] bg-bg py-3"
            }`}
          >
            <button
              onClick={() => setActiveTab(0)}
              className={`h-full w-full ${
                activeTab === 0 ? "text-white" : "text-captiontext"
              }`}
            >
              Today
            </button>
          </div>
          <div
            className={`${
              activeTab === 1
                ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                : "flex justify-around w-[50%] bg-bg py-3"
            }`}
          >
            <button
              onClick={() => setActiveTab(1)}
              className={`h-full w-full ${
                activeTab === 1 ? "text-white" : "text-captiontext"
              }`}
            >
              This Week
            </button>
          </div>
          <div
            className={`${
              activeTab === 2
                ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                : "flex justify-around w-[50%] bg-bg py-3"
            }`}
          >
            <button
              onClick={() => setActiveTab(2)}
              className={`h-full w-full ${
                activeTab === 2 ? "text-white" : "text-captiontext"
              }`}
            >
              This Month
            </button>
          </div>
          <div
            className={`${
              activeTab === 3
                ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                : "flex justify-around w-[50%] bg-bg py-3"
            }`}
          >
            <button
              onClick={() => setActiveTab(3)}
              className={`h-full w-full ${
                activeTab === 3 ? "text-white" : "text-captiontext"
              }`}
            >
              All Time
            </button>
          </div>
        </div>
        <div className="w-full">
          {activeTab === 0 && (
            <div className="flex justify-center items-center w-full text-xl mt-8">
              <div className="flex flex-col gap-5 w-full">
                {/* header */}
                <div className="flex w-full text-nowrap border-[0.5px] border-captiontext rounded-[1.25rem] px-5 py-2 text-base font-normal">
                  <div className="w-[10%]">
                    <p className="inline-block ml-3">#</p>
                  </div>
                  <div className="w-[40%]">
                    <p>Artist</p>
                  </div>
                  <div className="w-[17%]">
                    <p>Change</p>
                  </div>
                  <div className="w-[16%]">
                    <p>NFTs Sold</p>
                  </div>
                  <div className="w-[17%]">
                    <p>Volume</p>
                  </div>
                </div>
                {/* body */}
                <div className="flex w-full items-center text-nowrap text-left bg-bgsecondary rounded-[1.25rem] px-5 py-4">
                  <div className="w-[10%]">
                    <p className="inline-block  text-center h-8 w-8 rounded-full bg-bg">1</p>
                  </div>
                  <div className="w-[40%] flex gap-4 items-center">
                    <img className='h-[2.2rem] w-[2.2rem] rounded-full' src={tempAvatar} alt="" />
                    <p className="text-[1.375rem] font-semibold">Jaydon Ekstrom Bothman</p>
                  </div>
                  <div className="w-[17%]">
                    <p className="text-[#00AC4F] font-normal text-base">+1.41%</p>
                  </div>
                  <div className="w-[16%]">
                    <p className="font-normal text-base">602</p>
                  </div>
                  <div className="w-[17%]">
                    <p className="font-normal text-base">12.4 ETH</p>
                  </div>
                </div>
                
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="flex justify-center items-center w-full text-xl mt-8">
            <div className="flex flex-col gap-5 w-full">
              {/* header */}
              <div className="flex w-full text-nowrap border-[0.5px] border-captiontext rounded-[1.25rem] px-5 py-2 text-base font-normal">
                <div className="w-[10%]">
                  <p className="inline-block ml-3">#</p>
                </div>
                <div className="w-[40%]">
                  <p>Artist</p>
                </div>
                <div className="w-[17%]">
                  <p>Change</p>
                </div>
                <div className="w-[16%]">
                  <p>NFTs Sold</p>
                </div>
                <div className="w-[17%]">
                  <p>Volume</p>
                </div>
              </div>
              {/* body */}
              <div className="flex w-full items-center text-nowrap text-left bg-bgsecondary rounded-[1.25rem] px-5 py-4">
                <div className="w-[10%]">
                  <p className="inline-block  text-center h-8 w-8 rounded-full bg-bg">1</p>
                </div>
                <div className="w-[40%] flex gap-4 items-center">
                  <img className='h-[2.2rem] w-[2.2rem] rounded-full' src={tempAvatar} alt="" />
                  <p className="text-[1.375rem] font-semibold">Jaydon Ekstrom Bothman</p>
                </div>
                <div className="w-[17%]">
                  <p className="text-[#00AC4F] font-normal text-base">+1.41%</p>
                </div>
                <div className="w-[16%]">
                  <p className="font-normal text-base">602</p>
                </div>
                <div className="w-[17%]">
                  <p className="font-normal text-base">12.4 ETH</p>
                </div>
              </div>
              
            </div>
          </div>
          )}
          {activeTab === 2 && (
            <div className="flex justify-center items-center w-full text-xl mt-8">
            <div className="flex flex-col gap-5 w-full">
              {/* header */}
              <div className="flex w-full text-nowrap border-[0.5px] border-captiontext rounded-[1.25rem] px-5 py-2 text-base font-normal">
                <div className="w-[10%]">
                  <p className="inline-block ml-3">#</p>
                </div>
                <div className="w-[40%]">
                  <p>Artist</p>
                </div>
                <div className="w-[17%]">
                  <p>Change</p>
                </div>
                <div className="w-[16%]">
                  <p>NFTs Sold</p>
                </div>
                <div className="w-[17%]">
                  <p>Volume</p>
                </div>
              </div>
              {/* body */}
              <div className="flex w-full items-center text-nowrap text-left bg-bgsecondary rounded-[1.25rem] px-5 py-4">
                <div className="w-[10%]">
                  <p className="inline-block  text-center h-8 w-8 rounded-full bg-bg">1</p>
                </div>
                <div className="w-[40%] flex gap-4 items-center">
                  <img className='h-[2.2rem] w-[2.2rem] rounded-full' src={tempAvatar} alt="" />
                  <p className="text-[1.375rem] font-semibold">Jaydon Ekstrom Bothman</p>
                </div>
                <div className="w-[17%]">
                  <p className="text-[#00AC4F] font-normal text-base">+1.41%</p>
                </div>
                <div className="w-[16%]">
                  <p className="font-normal text-base">602</p>
                </div>
                <div className="w-[17%]">
                  <p className="font-normal text-base">12.4 ETH</p>
                </div>
              </div>
              
            </div>
          </div>
          )}
          {activeTab === 3 && (
            <div className="flex justify-center items-center w-full text-xl mt-8">
            <div className="flex flex-col gap-5 w-full">
              {/* header */}
              <div className="flex w-full text-nowrap border-[0.5px] border-captiontext rounded-[1.25rem] px-5 py-2 text-base font-normal">
                <div className="w-[10%]">
                  <p className="inline-block ml-3">#</p>
                </div>
                <div className="w-[40%]">
                  <p>Artist</p>
                </div>
                <div className="w-[17%]">
                  <p>Change</p>
                </div>
                <div className="w-[16%]">
                  <p>NFTs Sold</p>
                </div>
                <div className="w-[17%]">
                  <p>Volume</p>
                </div>
              </div>
              {/* body */}
              <div className="flex w-full items-center text-nowrap text-left bg-bgsecondary rounded-[1.25rem] px-5 py-4">
                <div className="w-[10%]">
                  <p className="inline-block  text-center h-8 w-8 rounded-full bg-bg">1</p>
                </div>
                <div className="w-[40%] flex gap-4 items-center">
                  <img className='h-[2.2rem] w-[2.2rem] rounded-full' src={tempAvatar} alt="" />
                  <p className="text-[1.375rem] font-semibold">Jaydon Ekstrom Bothman</p>
                </div>
                <div className="w-[17%]">
                  <p className="text-[#00AC4F] font-normal text-base">+1.41%</p>
                </div>
                <div className="w-[16%]">
                  <p className="font-normal text-base">602</p>
                </div>
                <div className="w-[17%]">
                  <p className="font-normal text-base">12.4 ETH</p>
                </div>
              </div>
              
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rankings;
