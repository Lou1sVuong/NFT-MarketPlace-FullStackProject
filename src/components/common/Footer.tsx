import logo from '../../assets/logo/logo.svg';
import DiscordLogo from '../../assets/icons/DiscordLogo.svg';
import YoutubeLogo from '../../assets/icons/YoutubeLogo.svg';
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import InstagramLogo from '../../assets/icons/InstagramLogo.svg'
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
      </div>
    </div>
  )
}

export default Footer
