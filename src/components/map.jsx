import React from 'react';

const Map = () => {
    return (
        <div>
            <div className='mx-auto lg:w-10/12 '>
                <p className='text-3xl font-bold mb-[32px] lg:text-3xl lg:mb-[48px] lg:font-bold'>Denah Tanah Kavling Jonggol Indah</p>
                <div className='mx-auto lg:p-2 bg-gray-200 rounded-md lg:w-2/3'>
                    <img src={require('../assets/denah.jpeg')} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Map