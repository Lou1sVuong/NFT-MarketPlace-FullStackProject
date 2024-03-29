import MainLayout from "../layouts/Mainlayout";
import ConnectWallet from "../pages/ConnectWallet";
import Home from "../pages/Home";
import SignIn from "../components/auth/login/SignIn";
import MarketPlace from "../pages/MarketPlace";
import Register from "../components/auth/register/Register";
import Rankings from "../pages/Rankings";
import ArtistPage from "../pages/ArtistPage";
import detailNFT from "../pages/detailNFT";
import ResetPass from "../components/auth/resetpass/ResetPass";
import Profile from "../pages/Profile";

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
    path: "/Marketplace",
    component: MarketPlace,
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
];
const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
