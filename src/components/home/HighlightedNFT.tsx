import mockImgaes from '../../assets/images/homePage/highlighted/highlighted.png';
import mockUserAvatar from '../../assets/images/avatars/animakid.svg';
interface HighlightNFT {
  title: string;
  image: string;
  userInfo: {
    avatar: string;
    username: string;
  };
}

function HighlightedNFT() {
  const highlightNFT: HighlightNFT = {
    title: 'Space Walking',
    image: mockImgaes,
    userInfo: {
      avatar: mockUserAvatar,
      username: 'Animakid',
    },
  };

  return (
    <div className="h-[31.875rem] w-[31.875rem] text-textW bg-bgsecondary rounded-[1.25rem] overflow-hidden">
      <img
        src={highlightNFT.image} 
        alt={highlightNFT.title} 
        className="h-4/5 w-full object-cover rounded-t-[1.25rem]"
      />
      <div className="flex flex-col justify-center p-5 gap-[0.62rem] h-1/5">
        <h3 className="text-textW text-[1.375rem] font-semibold ">
          {highlightNFT.title} 
        </h3>
        <div className="flex items-center gap-[0.75rem]">
            {/* avatar */}
          <img
            src={highlightNFT.userInfo.avatar} 
            alt="avatar"
            className="w-[1.75rem] rounded-full object-cover"
          />
            {/* username */}
          <span className="text-textW font-semibold">
            {highlightNFT.userInfo.username} 
          </span>
        </div>
      </div>
    </div>
  );
}

export default HighlightedNFT;
