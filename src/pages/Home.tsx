import HeroSection from "../components/homePage/HeroSection"
import Nav from "../components/common/Nav"
import TopRatedArtists from "../components/homePage/TopRatedArtists"
import TrendingCollection from "../components/homePage/TrendingCollection"
import BrowseCategories from "../components/homePage/BrowseCategories"
import Discover from "../components/homePage/Discover"

function Home() {
  return (
    <div className="bg-bg">
      <Nav />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <Discover />
    </div>
  )
}

export default Home
