import { Link, useLocation } from "react-router-dom";

function NavRankings() {
  const location = useLocation();

  // Define your list of navigation items
  const listNav = [
    {
      name: "Today",
      link: "/Rankings/Today",
    },
    {
      name: "This Week",
      link: "/Rankings/ThisWeek",
    },
    {
      name: "This Month",
      link: "/Rankings/ThisMonth",
    },
    {
      name: "All Time",
      link: "/Rankings/AllTime",
    },
  ];

  // Determine active tab based on the current location
  const activeTab = listNav.findIndex(
    (navItem) => navItem.link === location.pathname
  );

  return (
    <div className="w-full bg-bg px-40 py-10 text-textW ">
      <div className="flex justify-around w-full bg-rose-300">
        {/* Map through listNav to render navigation buttons */}
        {listNav.map((navItem, index) => (
          <div
            key={index}
            className={`${
              activeTab === index
                ? "border-b-[3px] border-captiontext flex justify-around w-[25%] bg-bg py-3"
                : "border-b-[3px] border-bg flex justify-around w-[25%] bg-bg py-3"
            }`}
          >
            <Link
              to={navItem.link}
              className={`h-full w-full text-center ${
                activeTab === index ? "text-white" : "text-captiontext"
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

export default NavRankings;
