function Search() {
    return (
        <div className="relative inline-block justify-center items-center py-3 px-5 w-full border-bgsecondary border-[0.5px] rounded-[1.25rem]">
            <div className="flex justify-center items-center">
                <div className="w-full ml-12">
                    <input
                        type="text"
                        className=" placeholder:text-textW focus:outline-none mr-4 w-[80%] text-textW bg-bg "
                        placeholder="Search your favourite NFTs"
                    />
                </div>
                
                    <span className="absolute right-9 mr-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#FFF"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
                                fill="#FFF"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.913 15.913C16.2059 15.6201 16.6808 15.6201 16.9737 15.913L21.5299 20.4693C21.8228 20.7622 21.8228 21.237 21.5299 21.5299C21.237 21.8228 20.7622 21.8228 20.4693 21.5299L15.913 16.9737C15.6201 16.6808 15.6201 16.2059 15.913 15.913Z"
                                fill="#FFF"
                            />
                        </svg>
                    </span>
            </div>
        </div>
    );
}
export default Search;
