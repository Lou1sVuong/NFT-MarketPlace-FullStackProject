import MainLayout from "../layouts/Mainlayout/Mainlayout";
import ConnectWallet from "../pages/ConnectWallet/ConnectWallet";
import Home from "../pages/Home/Home";
import SignIn from "../components/auth/login/SignIn";
import Register from "../components/auth/register/Register";
import Rankings from "../pages/Rankings/Rankings";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
import detailNFT from "../pages/detailNFT/detailNFT";
import ResetPass from "../components/auth/resetpass/ResetPass";
import Profile from "../pages/Profile/Profile";
import MarketPlaceLayout from "../layouts/MarketPlaceLayout/MarketPlaceLayout";
import NFTs from "../pages/MarketPlace/NFTs";
import Collections from "../pages/MarketPlace/Collections";

interface Route {
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any>;
}

const publicRoutes: Route[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Register",
    component: Register,
    layout: MainLayout,
  },
  {
    path: "/ConnectWallet",
    component: ConnectWallet,
    layout: MainLayout,
  },
  {
    path: "/SignIn",
    component: SignIn,
    layout: MainLayout,
  },
  {
    path: "/ResetPassword",
    component: ResetPass,
    layout: MainLayout,
  },
  {
    path: "/Rankings",
    component: Rankings,
    layout: MainLayout,
  },
  {
    path: "/ArtistPage",
    component: ArtistPage,
    layout: MainLayout,
  },
  {
    path: "/Profile",
    component: Profile,
    layout: MainLayout,
  },
  {
    path: "/detailNFT",
    component: detailNFT,
    layout: MainLayout,
  },
  {
    path: "/Marketplace/NFTs",
    component: NFTs,
    layout: MarketPlaceLayout,
  },
  {
    path: "/Marketplace/Collections",
    component: Collections,
    layout: MarketPlaceLayout,
  },
];
const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
