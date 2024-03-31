function HeaderList() {
  return (
    <div className="flex justify-center items-center w-full text-xl text-textW">
      <div className="flex flex-col gap-5 w-full">
        {/* header */}
        <div className="flex w-full text-nowrap border-[0.5px] border-captiontext rounded-[1.25rem] px-5 py-2 text-base font-normal">
          <div className="w-[10%]">
            <p className="inline-block ml-3">#</p>
          </div>
          <div className="w-[40%]">
            <p>Artist</p>
          </div>
          <div className="w-[17%]">
            <p>Change</p>
          </div>
          <div className="w-[16%]">
            <p>NFTs Sold</p>
          </div>
          <div className="w-[17%]">
            <p>Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderList;
