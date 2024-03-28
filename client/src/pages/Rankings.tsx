import React, { useState } from "react";
import RankingLists from "../components/rankingPage/RankingLists";
import HeaderList from "../components/rankingPage/HeaderList";
import todayRankingList from "../mockData/Rankings/todayRankingList";
import weekRankingList from "../mockData/Rankings/weekRankingList";
import monthRankingList from "../mockData/Rankings/monthRankingList";
import allRankingList from "../mockData/Rankings/allRankingList";
import useScrollToTop from "../hooks/useScrollTop";


const Rankings: React.FC = () => {
  useScrollToTop();
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
                : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
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
                : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
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
                : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
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
                : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
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
        {/* content tab */}
        <div className="w-full">
          {activeTab === 0 && (
            <>
              <HeaderList />
              {todayRankingList.map((data, index) => (
                <RankingLists key={index} data={data} />
              ))}
            </>
          )}
          {activeTab === 1 && (
            <>
              <HeaderList />
              {weekRankingList.map((data, index) => (
                <RankingLists key={index} data={data} />
              ))}
            </>
          )}
          {activeTab === 2 && (
            <>
              <HeaderList />
              {monthRankingList.map((data, index) => (
                <RankingLists key={index} data={data} />
              ))}
            </>
          )}
          {activeTab === 3 && (
            <>
              <HeaderList />
              {allRankingList.map((data, index) => (
                <RankingLists key={index} data={data} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rankings;
