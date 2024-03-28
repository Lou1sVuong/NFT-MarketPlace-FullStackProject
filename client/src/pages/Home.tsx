import HeroSection from "../components/homePage/HeroSection";
import Nav from "../components/common/Nav";
import TopRatedArtists from "../components/homePage/TopRatedArtists";
import TrendingCollection from "../components/homePage/TrendingCollection";
import BrowseCategories from "../components/homePage/BrowseCategories";
import Discover from "../components/homePage/Discover";
import NFTHighlight from "../components/homePage/NFTHighlight";
import HowItWork from "../components/homePage/HowItWork";
import SubscribeWidget from "../components/homePage/SubscribeWidget";
import Footer from "../components/common/Footer";
import Register from "../components/auth/register/Register";
function Home() {
  return (
    <div className="bg-bg">
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <Discover />
      <NFTHighlight />
      <HowItWork />
      <SubscribeWidget />
    </div>
  );
}

export default Home;
