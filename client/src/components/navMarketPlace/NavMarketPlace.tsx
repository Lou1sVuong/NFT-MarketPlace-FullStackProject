import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavMarketPlace() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listNav = [
    {
      name: "NFTs",
      link: "/Marketplace/NFTs",
    },
    {
      name: "Collections",
      link: "/Marketplace/Collections",
    },
  ];

  useEffect(() => {
    const foundIndex = listNav.findIndex(
      (item) => item.link === location.pathname
    );
    setActiveIndex(foundIndex);
  }, [listNav, location.pathname]);

  return (
    <div className="w-full bg-bg px-40 text-textW">
      <div className="flex justify-around w-full">
        {listNav.map((navItem, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index
                ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                : "flex justify-around w-[50%] bg-bg py-3"
            }`}
          >
            <Link
              to={navItem.link}
              className={`h-full w-full text-center ${
                activeIndex === index ? "text-white" : "text-captiontext"
              }`}
            >
              {navItem.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavMarketPlace;
