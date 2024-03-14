import React, { useState } from "react";
import InputForm from "../components/common/InputForm";
import NFTcard from "../components/homePage/NFTcard";
import marketPlace from '../mockData/MarketPlace/NFTs';
import Search from "../components/common/Search";

const MarketPlace: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="w-full bg-bg pt-20 pb-1 px-40 text-textW">
                <h1 className="text-[3.1875rem] font-semibold">Browse Marketplace</h1>
                <p className="text-[1.375rem] font-normal">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </p>
                <div className="w-full my-8">
                    {/* <InputForm
                        placeholder="Search your favourite NFTs"
                        rightIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#000000"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
                                    fill="#000000"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.913 15.913C16.2059 15.6201 16.6808 15.6201 16.9737 15.913L21.5299 20.4693C21.8228 20.7622 21.8228 21.237 21.5299 21.5299C21.237 21.8228 20.7622 21.8228 20.4693 21.5299L15.913 16.9737C15.6201 16.6808 15.6201 16.2059 15.913 15.913Z"
                                    fill="#000000"
                                />
                            </svg>
                        }
                    /> */}
                    <Search />
                </div>
            </div>
            {/* tab */}
            <div className="w-full bg-bg px-40 text-textW">
                <div className="flex justify-around w-full bg-rose-300">
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
