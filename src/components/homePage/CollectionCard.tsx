interface CollectionCardProps {
    data: {
        mainImage: string;
        galleryImages: string[];
        title: string;
        profileImage: string;
        username: string;
        rank: number;
    };
}

function CollectionCard({ data }: CollectionCardProps) {
    const { mainImage, galleryImages, title, profileImage, username, } = data;

    const maxGalleryImages = 2;
    const remainingImages = Math.max(0, galleryImages.length - maxGalleryImages);

    return (
        <div className="text-textW bg-bg w-[20rem] rounded-[1.25rem] overflow-hidden">
            <img className="w-[20rem] h-[20rem] rounded-[1.25rem] object-cover" src={mainImage} alt="" />
            <div className="pt-4">
                <div className="grid grid-cols-3 w-[20rem] gap-2">
                    {galleryImages.slice(0, maxGalleryImages).map((image, index) => (
                        <img
                            key={index}
                            className="w-[6.25rem] h-[6.25rem] rounded-[1.25rem]"
                            src={image}
                            alt=""
                        />
                    ))}
                    {remainingImages > 0 ? (
                        <div className="w-[6.25rem] h-[6.25rem] rounded-[1.25rem] bg-callAcction text-center flex items-center justify-center">
                            +{remainingImages}
                        </div>
                    ) : null}
                </div>
                <div className="p-2">
                    <h3 className="text-[1.375rem] font-semibold pb-3">{title}</h3>
                    <div className="flex gap-2">
                        <img className="w-[1.5rem] h-[1.5rem] rounded-full object-cover" src={profileImage} alt="" />
                        <p className="text-textW text-base font-normal">@{username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;
