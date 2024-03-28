import React from 'react';
import CollectionCard from './CollectionCard';
import trendingCollection from '../../mockData/HomePage/trendingCollection'
const TrendingCollection: React.FC = () => {
    
    const sortedData = [...trendingCollection].sort((a, b) => a.rank - b.rank);

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
