import background from '../assets/images/artistPage/backgroundArtist.svg';
import avatar from '../assets/images/artistPage/avt.png';
import Button from '../components/common/Button';
import DiscordLogo from '../assets/icons/DiscordLogo.svg'
import YoutubeLogo from '../assets/icons/YoutubeLogo.svg';
import TwitterLogo from '../assets/icons/TwitterLogo.svg';
import InstagramLogo from '../assets/icons/InstagramLogo.svg'
import Globe from '../assets/icons/Globe.svg'
import { useState } from 'react';
import NFTcard from '../components/homePage/NFTcard';
import artistPage from '../mockData/ArtistPage/NFTs';
import useScrollToTop from '../hooks/useScrollTop';

interface MockData {
    totalSale: number;
    description: string;
}
const mockData: MockData[] = [
    { totalSale: 240, description: "Volume" },
    { totalSale: 150, description: "NFTs Sold" },
    { totalSale: 300, description: "Followers" },
];
function ArtistPage() {
    useScrollToTop();
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='bg-bgsecondary text-textW'>
            <div>
                <div className='w-full h-auto bg-bg '>
                    <div className=' w-full '>
                        <img className=' relative h-[20rem] mb-28  w-full object-center object-cover' src={background} alt="" />
                        <img className='absolute  top-[22rem] left-[10rem] h-[8.5rem] w-[8.5rem] border-2 border-bg object-cover bg-slate-500 rounded-[1.25rem]' src={avatar} alt="" />
                    </div>
                    <div className='flex flex-col gap-8 px-40'>
                        <div className='flex  justify-between items-center '>
                            <h2 className='text-[3.1875rem] font-semibold'>Animakid</h2>
                            <div className='flex gap-5'>
                                <Button style='secondary'>0xc0E3...B79C</Button>
                                <Button style='nofillSecondary'>Follow</Button>
                            </div>
                        </div>
                        <div className="w-[30rem] grid grid-cols-3 pt-10">
                            {mockData.map((data, index) => (
                                <div key={index}>
                                    <h3 className="text-3xl font-bold">{data.totalSale}k +</h3>
                                    <p className="text-2xl font-normal">{data.description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4 className='text-[1.375rem] text-captiontext font-semibold'>Bio</h4>
                            <p className='text-[1.375rem] text-textW font-normal'>The internet's friendliest designer kid.</p>
                        </div>
                        <div>
                            <h4 className='text-[1.375rem] text-captiontext font-semibold'>Links</h4>
                            <div className='flex gap-3'>
                                <img src={Globe} alt="" />
                                <img src={DiscordLogo} alt="" />
                                <img src={YoutubeLogo} alt="" />
                                <img src={TwitterLogo} alt="" />
                                <img src={InstagramLogo} alt="" />
                            </div>
                        </div>
                        {/* Tab */}
                        <div className="flex justify-around w-full text-[1.375rem] font-semibold">
                            <div
                                className={`${activeTab === 0
                                    ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                                    : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveTab(0)}
                                    className={`h-full w-full ${activeTab === 0 ? "text-white" : "text-captiontext"
                                        }`}
                                >
                                    Created
                                </button>
                            </div>
                            <div
                                className={`${activeTab === 1
                                    ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                                    : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveTab(1)}
                                    className={`h-full w-full ${activeTab === 1 ? "text-white" : "text-captiontext"
                                        }`}
                                >
                                    Owned
                                </button>
                            </div>
                            <div
                                className={`${activeTab === 2
                                    ? "border-b-[3px] border-captiontext flex justify-around w-[50%] bg-bg py-3"
                                    : "border-b-[3px] border-bg flex justify-around w-[50%] bg-bg py-3"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveTab(2)}
                                    className={`h-full w-full ${activeTab === 2 ? "text-white" : "text-captiontext"
                                        }`}
                                >
                                    Collection
                                </button>
                            </div>

                        </div>
                        <div className="tab-content">
                            {activeTab === 0 && (
                                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                                    {artistPage.map((item, index) => (
                                        <NFTcard key={index} data={item} />
                                    ))}
                                </div>
                            )}
                            {activeTab === 1 && (
                                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                                    {artistPage.slice().reverse().map((item, index) => (
                                        <NFTcard key={index} data={item} />
                                    ))}
                                </div>
                            )}

                            {activeTab === 2 &&
                                <div className="grid grid-cols-3 justify-between gap-y-10 py-[3.75rem]">
                                {artistPage.slice().sort(() => Math.random() - 0.5).map((item, index) => (
                                    <NFTcard key={index} data={item} />
                                ))}
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistPage
