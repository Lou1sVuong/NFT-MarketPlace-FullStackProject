import mainImage from "../../assets/images/detailNFT/PlaceHolder.svg";
import globe from "../../assets/icons/Globe.svg";
import avatar from "../../assets/images/avatars/PotraRobot.svg";
import Countdown from "../../components/homePage/Countdown";
import Button from "../../components/common/Button";
function detailNFT() {
  return (
    <div className="w-full bg-bg text-textW">
      <div className="w-full">
        <img
          className="w-full h-[35rem] object-center object-cover"
          src={mainImage}
          alt=""
        />
      </div>
      <div className="w-full px-40 flex gap-[10rem]">
        {/* left */}
        <div className="w-[60%] flex flex-col gap-8">
          <div>
            <h1 className="text-[3.1875rem] font-semibold">The Orbitians</h1>
            <p className="text-[1.375rem] font-normal text-captiontext">
              Minted on Sep 30, 2022
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.375rem] font-bold text-captiontext pt-[3rem]">
              Created By
            </h3>
            <div className="flex gap-3">
              <img
                className="w-[2rem] h-[2rem] rounded-full"
                src={avatar}
                alt=""
              />
              <p className="text-[1.375rem] font-semibold">Orbitian</p>
            </div>
          </div>
          <div>
            <h3 className="text-[1.375rem] font-bold text-captiontext ">
              Description
            </h3>
            <p className="text-[1.375rem] font-normal text-justify">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,There are all sorts of beings in the NFT
              Universe. The most advanced and friendly of the bunch are
              Orbitians. They live in a metal space machines, high up in the sky
              and only have one foot on Earth. These Orbitians are a peaceful
              race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[1.375rem] font-bold text-captiontext">
              Details
            </h3>
            <div className="flex gap-2">
              <img src={globe} alt="" />
              <p>View on Etherscan</p>
            </div>
            <div className="flex gap-2">
              <img src={globe} alt="" />
              <p>View Original</p>
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-3 ">
            <h3 className="text-[1.375rem] font-bold text-captiontext">Tags</h3>
            <div className="">
              <div className="inline-block py-2 px-4 bg-bgsecondary rounded-[1.25rem] mr-3 mb-3">
                Animation
              </div>
              <div className="inline-block py-2 px-4 bg-bgsecondary rounded-[1.25rem] mr-3 mb-3">
                Illustration
              </div>
              <div className="inline-block py-2 px-4 bg-bgsecondary rounded-[1.25rem] mr-3 mb-3">
                Moon
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mt-6">
          <Countdown hours={68}>
            <Button style="secondary">Place a bid</Button>
          </Countdown>
        </div>
      </div>
    </div>
  );
}

export default detailNFT;
