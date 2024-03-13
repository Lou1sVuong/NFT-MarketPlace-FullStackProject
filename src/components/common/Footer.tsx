import logo from '../../assets/logo/logo.svg';
import DiscordLogo from '../../assets/icons/DiscordLogo.svg';
import YoutubeLogo from '../../assets/icons/YoutubeLogo.svg';
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import InstagramLogo from '../../assets/icons/InstagramLogo.svg'
import Subscribe from './Subscribe';
function Footer() {
  return (
    <div className="py-10 px-40">
      <div className='flex justify-between'>
        {/* col */}
        <div>
            <h3 className='pb-10'><img src={logo} alt="" /></h3>
            <div className='text-[#CCC] flex flex-col gap-5'>
                <p className='w-[15rem]'>NFT marketplace UI created with Anima for Figma.</p>
                <p>Join our community</p>
                <div className='flex gap-3'>
                    <img src={DiscordLogo} alt="" />
                    <img src={YoutubeLogo} alt="" />
                    <img src={TwitterLogo} alt="" />
                    <img src={InstagramLogo} alt="" />
                </div>
            </div>
        </div>
        {/* col */}
        <div>
            <h3 className='pb-10 text-[1.375rem] text-textW font-bold'>Explore</h3>
            <div className='text-[#CCC] flex flex-col gap-5'>
                <p className='w-[15rem]'>Marketplace</p>
                <p className='w-[15rem]'>Rankings</p>
                <p className='w-[15rem]'>Connect a wallet.</p>
            </div>
        </div>
        {/* col */}
        <div>
            <h3 className='pb-10 text-[1.375rem] text-textW font-bold'>Join our weekly digest</h3>
            <div className='text-[#CCC] flex flex-col gap-5'>
                <p className='w-[15rem]'>Get exclusive promotions & updates straight to your inbox.</p>
                <div>
                    <Subscribe />
                </div>
            </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#CCC] mt-12'></div>
      <p className='text-[#CCC] py-5'>Ⓒ NFT Market. Use this template freely.</p>
    </div>
  )
}

export default Footer
