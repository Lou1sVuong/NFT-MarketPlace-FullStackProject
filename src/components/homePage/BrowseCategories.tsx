import PaintBrush from "../../assets/images/category/icons/PaintBrush.svg";
import Swatches from "../../assets/images/category/icons/Swatches.svg";
import MusicNotes from "../../assets/images/category/icons/MusicNotes.svg";
import Camera from "../../assets/images/category/icons/Camera.svg";
import VideoCamera from "../../assets/images/category/icons/VideoCamera.svg";
import MagicWand from "../../assets/images/category/icons/MagicWand.svg";
import Basketball from "../../assets/images/category/icons/Basketball.svg";
import Plant from "../../assets/images/category/icons/Planet.svg";

import twoWhales from "../../assets/images/category/images/twoWhales.svg";
import ball from "../../assets/images/category/images/ball.svg";
import coolMonkey from "../../assets/images/category/images/coolMonkey.svg";
import darkCity from "../../assets/images/category/images/darkCity.svg";
import oldMan from "../../assets/images/category/images/oldMan.svg";
import sunset from "../../assets/images/category/images/sunset.svg";
import violin from "../../assets/images/category/images/violin.svg";
import key from "../../assets/images/category/images/key.svg";


const categories = [
  {
    id: 1,
    name: "Art",
    image: twoWhales,
    icon: PaintBrush,
  },
  {
    id: 2,
    name: "Collectibles",
    image: coolMonkey,
    icon: Swatches,
  },
  {
    id: 3,
    name: "Music",
    image: violin,
    icon: MusicNotes,
  },
  {
    id: 4,
    name: "Photography",
    image: oldMan,
    icon: Camera,
  },
  {
    id: 5,
    name: "Video",
    image: sunset,
    icon: VideoCamera
    ,
  },
  {
    id: 6,
    name: "Utility",
    image: key,
    icon: MagicWand,
  },
  {
    id: 7,
    name: "Sport",
    image: ball,
    icon: Basketball,
  },
  {
    id: 8,
    name: "Virtual Worlds",
    image: darkCity,
    icon: Plant,
  },
];

function BrowseCategories() {
  return (
    <div className="py-20 px-40">
      <h3 className="text-textW text-[2.375rem] font-semibold">
        Browse Categories
      </h3>
      <div className="grid grid-cols-4 gap-y-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="col-span-1 relative w-[16rem] rounded-[1.5rem] overflow-hidden"
          >
            <div>
              <img
                className="w-full h-[16rem] rounded-t-[1.5rem] object-cover backdrop-filter backdrop-blur-md"
                src={category.image}
                alt=""
              />

              <div className="absolute flex items-center justify-center top-0 w-full h-[16rem] rounded-t-[1.5rem] object-cover backdrop-filter backdrop-blur-[5.5px]">
                <img src={category.icon} alt="" />
              </div>
            </div>
            <div className="w-full py-4 px-8 bg-bgsecondary rounded-b-[1.5rem]">
              <h4 className="text-textW text-[1.375rem] font-semibold">
                {category.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories;
