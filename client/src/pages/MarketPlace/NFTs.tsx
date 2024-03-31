import { Link } from "react-router-dom";
import marketPlace from "../../mockData/MarketPlace/NFTs";
import NFTcard from "../../components/homePage/NFTcard";

function NFTs() {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
        {marketPlace.map((item, index) => (
          <Link key={index} to="/detailNFT">
            <NFTcard data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NFTs;
