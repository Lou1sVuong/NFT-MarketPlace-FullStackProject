import React, { useState } from "react";
import InputForm from "../components/common/InputForm";
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
                            Today
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
                            This Week
                        </button>
                    </div>
                    <div
                        className={`${activeTab === 2
                            ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                            : "flex justify-around w-[50%] bg-bg py-3"
                            }`}
                    >
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`h-full w-full ${activeTab === 2 ? "text-white" : "text-captiontext"}`}
                        >
                            This Month
                        </button>
                    </div>
                    <div
                        className={`${activeTab === 3
                            ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                            : "flex justify-around w-[50%] bg-bg py-3"
                            }`}
                    >
                        <button
                            onClick={() => setActiveTab(3)}
                            className={`h-full w-full ${activeTab === 3 ? "text-white" : "text-captiontext"}`}
                        >
                            All Time
                        </button>
                    </div>
                </div>
                <div className="tab-content">
                    {activeTab === 0 &&
                        <div className="flex justify-center w-full px-40 py-[5rem] text-6xl">
                            Comming Soon...
                        </div>}
                    {activeTab === 1 &&
                        <div className="flex justify-center w-full px-40 py-[5rem] text-6xl">
                            Comming Soon...
                        </div>}
                    {activeTab === 2 &&
                        <div className="flex justify-center w-full px-40 py-[5rem] text-6xl">
                            Comming Soon...
                        </div>}
                    {activeTab === 3 &&
                        <div className="flex justify-center w-full px-40 py-[5rem] text-6xl">
                            Comming Soon...
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Rankings;
