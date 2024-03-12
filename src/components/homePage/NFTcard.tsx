interface NFTcardProps {
    data: {
        image : string;
        title : string;
        avatar: string;
        username: string;
        price: number;
        highestBid: number;
    };
}
function NFTcard({ data }: NFTcardProps) {
    const { image, title, avatar, username,price ,highestBid} = data;
    console.log(image, title, avatar, username,price ,highestBid);
    return (
        <div className="relative flex flex-col w-[22rem] h-[32rem] rounded-[1.25rem]  bg-bgsecondary">
            <img className="absolute top-0 w-full h-[70%] object-cover mb-5 rounded-t-[1.25rem] " src={image} alt="" />
            <div className="w-full absolute bottom-0 py-5 px-[1.88rem] h-[30%]">
                <h3 className="text-[1.375rem] font-semibold mb-[0.3rem]">{title}</h3>
                <div className="flex  gap-3">
                    <img className="h-6 w-6 rounded-full" src={avatar} alt="avatar" />
                    <p className="text-base text-textW font-normal">{username}</p>
                </div>
                <div className="flex flex-col ">
                    <p className="flex justify-between"><span className="text-captiontext">Price</span> <span className="text-captiontext">Highest Bid</span></p>
                    <p className="flex justify-between"><span className="text-textW font-normal">{price} ETH</span> <span className="text-textW font-normal">{highestBid} wETH</span></p>
                </div>
            </div>
        </div>
    );
}

export default NFTcard;
