import React, { useState } from "react";
import NFTcard from "../components/homePage/NFTcard";
import marketPlace from '../mockData/MarketPlace/NFTs';
import Search from "../components/common/Search";
import useScrollToTop from "../hooks/useScrollTop";

const MarketPlace: React.FC = () => {
    useScrollToTop();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="w-full bg-bg pt-20 pb-1 px-40 text-textW">
                <h1 className="text-[3.1875rem] font-semibold">Browse Marketplace</h1>
                <p className="text-[1.375rem] font-normal">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </p>
                <div className="w-full my-8">
                    <Search />
                </div>
            </div>
            {/* tab */}
            <div className="w-full bg-bg px-40 text-textW">
                <div className="flex justify-around w-ful">
                        <div
                            className={`${activeTab === 0
                                    ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                                    : "flex justify-around w-[50%] bg-bg py-3"
                                }`}
                        >
                            <button
                                onClick={() => setActiveTab(0)}
                                className={`h-full w-full ${activeTab === 0 ? "text-white" : "text-captiontext"}`}
                            >
                                NFTs
                            </button>
                        </div>
                        <div
                            className={`${activeTab === 1
                                    ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                                    : "flex justify-around w-[50%] bg-bg py-3"
                                }`}
                        >
                            <button
                                onClick={() => setActiveTab(1)}
                                className={`h-full w-full ${activeTab === 1 ? "text-white" : "text-captiontext"}`}
                            >
                                Collections
                            </button>
                        </div>
                </div>
                <div className="tab-content">
                    {activeTab === 0 && (
                            <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                                {marketPlace.map((item, index) => (
                                    <NFTcard key={index} data={item} />
                                ))}
                            </div>
                    )}
                    {activeTab === 1 &&
                        <div className="flex justify-center w-full px-40 py-[5rem] text-6xl">
                            Comming Soon...
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default MarketPlace;
