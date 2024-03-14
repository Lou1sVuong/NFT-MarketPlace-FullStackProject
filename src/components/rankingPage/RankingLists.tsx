import React from 'react';

interface ArtistData {
  avatar: string;
  name: string;
}

interface RankingListsProps {
  data: {
    rank: number;
    artist: ArtistData;
    change: number;
    nftSold: number;
    volume: number;
  };
}

function RankingLists({ data }: RankingListsProps) {
  const { rank, artist, change, nftSold, volume } = data;

  return (
    <div>
      <div className="flex justify-center items-center w-full text-xl mt-8">
        <div className="flex flex-col gap-5 w-full">
          {/* body */}
          <div className="flex w-full items-center text-nowrap text-left bg-bgsecondary rounded-[1.25rem] px-5 py-4">
            <div className="w-[10%]">
              <div className="inline-block  text-base text-captiontext  rounded-full bg-bg"><p className='flex text-center justify-center items-center h-8 w-8 '>{rank}</p></div>
            </div>
            <div className="w-[40%] flex gap-4 items-center">
              <img className='h-[2.2rem] w-[2.2rem] rounded-full' src={artist.avatar} alt={artist.name} />
              <p className="text-[1.375rem] font-semibold">{artist.name}</p>
            </div>
            <div className="w-[17%]">
              <p className="text-[#00AC4F] font-normal text-base">{change}%</p>
            </div>
            <div className="w-[16%]">
              <p className="font-normal text-base">{nftSold}</p>
            </div>
            <div className="w-[17%]">
              <p className="font-normal text-base">{volume} ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingLists;
