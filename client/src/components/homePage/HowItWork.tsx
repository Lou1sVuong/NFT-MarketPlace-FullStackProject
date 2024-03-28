import SetUp from '../../assets/images/infoCard/SetupWalletIcon.svg';
import Create from '../../assets/images/infoCard/CreateCollectionIcon.svg';
import Start from '../../assets/images/infoCard//StartEarningIcon.svg';

const infoCardData = [
    {
        image: SetUp,
        title: 'Setup Your wallet',
        description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },
    {
        image: Create,
        title: 'Create a Collection',
        description: 'Create your own collection of NFTs. Upload your digital art, music, videos, or any other digital content.',
    },
    {
        image: Start,
        title: 'Start Earning',
        description: 'Earn money by selling your digital content. You can also earn money by reselling the digital content you have purchased.',
    },
];
function HowItWork() {
  return (
    <div className='py-20 px-40 text-textW'>
            <div className='relative flex mb-14' >
                <div>
                    <h2 className='text-[2.375rem] font-semibold'>How it works</h2>
                    <p className='text-[1.375rem] font-normal '>Find out how to get started</p>
                </div>
                <div className='absolute bottom-0 right-0'>
                    
                </div>
            </div>
            <div className='grid grid-cols-3  w-full '>
                { infoCardData.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center text-center px-8 pt-1 pb-8 w-[22rem] bg-bgsecondary rounded-3xl'>
                        <img src={item.image} alt="" />
                        <h5 className='text-[1.375rem] text-textW font-semibold pb-3'>{item.title}</h5>
                        <p className='text-base font-normal line-clamp-3'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default HowItWork
