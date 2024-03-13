
import MainLayout from "../layouts/Mainlayout";
import ConnectWallet from "../pages/ConnectWallet";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import MarketPlace from "../pages/MarketPlace";
import Register from "../pages/Register";
import ResetPass from "../pages/ResetPass";
import Rankings from "../pages/Rankings";


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
        layout: MainLayout
    },
    {
        path: "/ConnectWallet",
        component: ConnectWallet,
        layout: MainLayout
    },
    {
        path: "/Marketplace",
        component: MarketPlace,
        layout: MainLayout
    },
    {
        path: "/SignIn",
        component: SignIn,
        layout: MainLayout
    },
    {
        path: "/ResetPassword",
        component: ResetPass,
        layout: MainLayout
    },
    {
        path: "/Rankings",
        component: Rankings,
        layout: MainLayout
    },
];
const privateRoutes: Route[] = []; 

export { publicRoutes, privateRoutes };
