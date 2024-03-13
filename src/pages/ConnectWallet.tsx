import Poster from '../assets/images/registerPage/Poster.png';
import Metamask from '../assets/icons/Metamask.svg';
import WalletConnect from '../assets/icons/WalletConnect.svg';
import Coinbase from '../assets/icons/Coinbase.svg';
import { Link } from 'react-router-dom';

interface ConnectWalletProps {
    icon: string;
    name: string;
    route: string;
}

const Wallets: ConnectWalletProps[] = [
    {
        icon: Metamask,
        name: 'Metamask',
        route: '/Metamask'
    },
    {
        icon: WalletConnect,
        name: 'WalletConnect',
        route: '/WalletConnect'
    },
    {
        icon: Coinbase,
        name: 'Coinbase',
        route: '/Coinbase'
    }
]

function ConnectWallet() {
    return (
        <div className='w-full h-[40rem] flex gap-[3.75rem] text-textW bg-bg'>
            <div className='w-[50%] overflow-hidden'><img src={Poster} alt="" className='w-full h-[40rem] object-cover ' /></div>
            <div className='w-[50%]'>
                <div className='flex flex-col w-full h-full justify-center items-center gap-8'>
                    <h1 className='text-6xl font-semibold'>Connect wallet</h1>
                    <p className='text-2xl text-center w-[60%]'>Choose a wallet you want to connect. There are several wallet providers.</p>
                    <div>
                        {Wallets.map((wallet, index) => (
                            <Link key={index} to={wallet.route}>
                                <div className='flex mt-5'>
                                    <div  className='inline-block bg-bgsecondary rounded-[1.25rem]'>
                                        <div className='flex justify-between items-center gap-5 px-10 py-3 w-[20rem]'>
                                            <img src={wallet.icon} alt="" />
                                            <p className='text-[1.375rem] font-semibold pr-20 '>{wallet.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet
