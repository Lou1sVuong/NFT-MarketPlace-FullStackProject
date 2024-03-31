import React, { useState } from "react";
import Search from "../../components/common/Search";
import useScrollToTop from "../../hooks/useScrollTop";
import NavMarketPlace from "../../components/navMarketPlace/NavMarketPlace";
import MainLayout from "../Mainlayout/Mainlayout";

const MarketPlaceLayout: React.FC = ({ children }: any) => {
  useScrollToTop();

  return (
    <div>
      <MainLayout>
        <div className="w-full bg-bg pt-20 pb-1 px-40 text-textW">
          <h1 className="text-[3.1875rem] font-semibold">Browse Marketplace</h1>
          <p className="text-[1.375rem] font-normal">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
          <div className="w-full my-8">
            <Search />
          </div>
        </div>
        <NavMarketPlace />
        <div className="px-40 bg-bg">{children}</div>
      </MainLayout>
    </div>
  );
};

export default MarketPlaceLayout;
