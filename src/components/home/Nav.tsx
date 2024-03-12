import logo from "../../assets/logo/logo.svg";
import userIcon from "../../assets/icons/User.svg";

import Button from "../common/Button";

function Nav() {
  return (
    <nav className="flex items-center justify-between  w-full py-5 px-[3.125rem] text-textW text-center text-base font-semibold bg-bg">
      <div>
        <img src={logo} alt=""></img>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex">
          <li className="py-1 px-5"><a href="#">Marketplace</a></li>
          <li className="py-1 px-5"><a href="#">Rankings</a></li>
          <li className="py-1 px-5"><a href="#">Connect a wallet</a></li>
        </ul >
        <Button style="secondary" onClick={() => console.log("clicked")}>
            <img src={userIcon} alt="" />
          Sign Up
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
