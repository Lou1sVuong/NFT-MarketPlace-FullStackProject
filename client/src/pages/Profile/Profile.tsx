import background from "../../assets/images/artistPage/backgroundArtist.svg";
import avatar from "../../assets/images/artistPage/avt.png";
import Button from "../../components/common/Button";
import DiscordLogo from "../../assets/icons/DiscordLogo.svg";
import YoutubeLogo from "../../assets/icons/YoutubeLogo.svg";
import TwitterLogo from "../../assets/icons/TwitterLogo.svg";
import InstagramLogo from "../../assets/icons/InstagramLogo.svg";
import Globe from "../../assets/icons/Globe.svg";
import { useState } from "react";
import NFTcard from "../../components/homePage/NFTcard";
import artistPage from "../../mockData/ArtistPage/NFTs";
import useScrollToTop from "../../hooks/useScrollTop";

interface MockData {
  totalSale: number;
  description: string;
}
const mockData: MockData[] = [
  { totalSale: 240, description: "Volume" },
  { totalSale: 150, description: "NFTs Sold" },
  { totalSale: 300, description: "Followers" },
];
function Profile() {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-bgsecondary text-textW">
      <div>
        <div className="w-full h-auto bg-bg ">
          <div className=" w-full ">
            <img
              className=" relative h-[20rem] mb-28  w-full object-center object-cover"
              src={background}
              alt=""
            />
            <img
              className="absolute  top-[22rem] left-[10rem] h-[8.5rem] w-[8.5rem] border-2 border-bg object-cover bg-slate-500 rounded-[1.25rem]"
              src={avatar}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8 px-40">
            <div className="flex  justify-between items-center ">
              <h2 className="text-[3.1875rem] font-semibold">Animakid</h2>
              <div className="flex gap-5">
                <Button
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 4C16.5523 4 17 4.44772 17 5V27C17 27.5523 16.5523 28 16 28C15.4477 28 15 27.5523 15 27V5C15 4.44772 15.4477 4 16 4Z"
                        fill="white"
                      />
                    </svg>
                  }
                  style="secondary"
                >
                  New Product
                </Button>
                <Button
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <path
                        d="M7.8125 84.375H35.9375C39.9549 84.375 43.8821 83.1837 47.2225 80.9517C50.5629 78.7198 53.1664 75.5474 54.7038 71.8358C56.2412 68.1241 56.6435 64.04 55.8597 60.0997C55.0759 56.1595 53.1414 52.5402 50.3006 49.6994C47.4598 46.8586 43.8405 44.9241 39.9003 44.1403C35.96 43.3565 31.8759 43.7588 28.1642 45.2962C24.4526 46.8336 21.2802 49.4371 19.0483 52.7775C16.8163 56.1179 15.625 60.0451 15.625 64.0625C15.625 78.125 7.8125 84.375 7.8125 84.375Z"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M43.9058 45.3906C51.4058 35.2734 70.4683 12.1094 87.8901 12.1094C87.8901 29.5312 64.7261 48.5938 54.6089 56.0938"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M51.9531 35.3916C57.246 38.3787 61.6223 42.755 64.6094 48.0479"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  style="nofillSecondary"
                >
                  Edit Profile
                </Button>
              </div>
            </div>
            <div className="w-[30rem] grid grid-cols-3 pt-10">
              {mockData.map((data, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold">{data.totalSale}k +</h3>
                  <p className="text-2xl font-normal">{data.description}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-[1.375rem] text-captiontext font-semibold">
                Bio
              </h4>
              <p className="text-[1.375rem] text-textW font-normal">
                The internet's friendliest designer kid.
              </p>
            </div>
            <div>
              <h4 className="text-[1.375rem] text-captiontext font-semibold">
                Links
              </h4>
              <div className="flex gap-3">
                <img src={Globe} alt="" />
                <img src={DiscordLogo} alt="" />
                <img src={YoutubeLogo} alt="" />
                <img src={TwitterLogo} alt="" />
                <img src={InstagramLogo} alt="" />
              </div>
            </div>
            {/* Tab */}
            <div className="flex justify-around w-full text-[1.375rem] font-semibold">
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
                  Created
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
                  Owned
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
                  Collection
                </button>
              </div>
            </div>
            <div className="tab-content">
              {activeTab === 0 && (
                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                  {artistPage.map((item, index) => (
                    <NFTcard key={index} data={item} />
                  ))}
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                  {artistPage
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <NFTcard key={index} data={item} />
                    ))}
                </div>
              )}

              {activeTab === 2 && (
                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                  {artistPage
                    .slice()
                    .sort(() => Math.random() - 0.5)
                    .map((item, index) => (
                      <NFTcard key={index} data={item} />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
