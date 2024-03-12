import React from 'react';
import CollectionCard from './CollectionCard';
import tempPicture from '../../assets/images/homePage/trendingCollection/TrendingCollection.svg';
const TrendingCollection: React.FC = () => {
    const jsonData = [
        {
            mainImage: tempPicture,
            galleryImages: [
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
            ],
            title: 'Happy Robots',
            profileImage: tempPicture,
            username: 'Robotica',
            rank: 1,
        },
        {
            mainImage: tempPicture,
            galleryImages: [
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
            ],
            title: 'Smiling Androids 3',
            profileImage: tempPicture,
            username: 'AndroidJoy',
            rank: 3,
        },
        {
            mainImage: tempPicture,
            galleryImages: [
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
                tempPicture,
            ],
            title: 'Smiling Androids',
            profileImage: tempPicture,
            username: 'AndroidJoy',
            rank: 2,
        },
    ];
    const sortedData = [...jsonData].sort((a, b) => a.rank - b.rank);

    return (
        <div className='py-20 px-40 text-textW'>
            <h2 className='text-[2.375rem] font-semibold'>Trending Collection</h2>
            <p  className='text-[1.375rem] font-normal mb-[3.75rem]'>Checkout our weekly updated trending collection.</p>
            <div className='grid grid-cols-3'>
                {sortedData.map((item, index) => (
                    <CollectionCard key={index} data={item}  />
                ))}
            </div>
        </div>
    );
};

export default TrendingCollection;
