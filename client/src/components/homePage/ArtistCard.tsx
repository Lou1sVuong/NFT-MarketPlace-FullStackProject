interface ArtistCardProps {
  data: {
    rank: number;
    avatar: string;
    username: string;
    totalSales: number;
  };
}
function ArtistCard({ data }: ArtistCardProps) {
  const { rank, avatar, username, totalSales } = data;
  console.log(rank, avatar, username, totalSales);
  return (
    <div className="relative flex flex-col items-center justify-center w-[15rem] h-[15rem] rounded-[1.25rem] p-5 bg-bgsecondary">
      <p className="absolute top-4 left-4 flex items-center justify-center w-[1.875rem] h-[1.875rem] rounded-full text-captiontext text-base font-normal bg-bg">
        {rank}
      </p>
      <img
        className="w-[7rem] h-[7rem] object-cover mb-5 rounded-full"
        src={avatar}
        alt=""
      />
      <h3 className="text-[1.375rem] font-semibold mb-[0.3rem]">{username}</h3>
      <p>
        <span className="text-captiontext">Total Sales:</span>{" "}
        <span className="text-textW font-normal">{totalSales} ETH</span>
      </p>
    </div>
  );
}

export default ArtistCard;
