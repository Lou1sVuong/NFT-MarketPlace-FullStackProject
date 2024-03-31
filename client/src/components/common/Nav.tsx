import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import userIcon from "../../assets/icons/User.svg";
import Button from "./Button";
import useScroll from "../../hooks/eventSrollNav";

function Nav() {
  const scrollingUp = useScroll();

  return (
    <nav
      className={`flex z-10 items-center fixed justify-between w-full py-5 px-[3.125rem]  text-textW text-center text-base font-semibold bg-bgsecondary 
      ${scrollingUp ? "" : "hidden"}`}
    >
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex">
          <li className="py-1 px-5">
            <Link to="/Marketplace/NFTs">Marketplace</Link>
          </li>
          <li className="py-1 px-5">
            <Link to="/Rankings">Rankings</Link>
          </li>
          <li className="py-1 px-5">
            <Link to="/ConnectWallet">Connect a wallet</Link>
          </li>
        </ul>
        <Link to="/SignIn">
          <Button style="secondary" onClick={() => console.log("clicked")}>
            <img src={userIcon} alt="" />
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
