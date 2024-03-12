import HeroSection from "../components/homePage/HeroSection"
import Nav from "../components/common/Nav"
import TopRatedArtists from "../components/homePage/TopRatedArtists"
import TrendingCollection from "../components/homePage/TrendingCollection"
import BrowseCategories from "../components/homePage/BrowseCategories"
import Discover from "../components/homePage/Discover"
import Countdown from "../components/homePage/Countdown"
import NFTHighlight from "../components/homePage/NFTHighlight"
import HowItWork from "../components/homePage/HowItWork"

function Home() {
  return (
    <div className="bg-bg">
      <Nav />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <Discover />
      <NFTHighlight />
      <HowItWork />
    </div>
  )
}

export default Home
