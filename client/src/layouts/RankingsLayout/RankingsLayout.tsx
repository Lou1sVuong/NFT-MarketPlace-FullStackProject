import NavRankings from "../../components/navRankings/NavRankings";
import HeaderList from "../../components/rankingPage/HeaderList";
import MainLayout from "../Mainlayout/Mainlayout";

function RankingsLayout({ children }: any) {
  return (
    <div className="bg-bg">
      <MainLayout>
        {/* intro */}
        <div className="w-full bg-bg pt-20 py-20 px-40 text-textW">
          <h1 className="text-[3.1875rem] font-semibold">Top Creators</h1>
          <p className="text-[1.375rem] font-normal">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
        {/* nav */}
        <NavRankings />
        {/* content */}
        <div className=" px-40 pb-7">
          <HeaderList />
          {children}
        </div>
      </MainLayout>
    </div>
  );
}

export default RankingsLayout;
