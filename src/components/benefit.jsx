import React from 'react';

const Benefit = () => {
    return (
        <div>
            <p className='md:mb-[36px] lg:mb-[48px] lg:text-4xl font-bold'>Berbagai Keunggulan Berinvestasi di <br /> Kavling Jonggol Indah</p>
            <div className="grid px-[4px] lg:px-[0px] lg:gap-[12px] grid-cols-2">
                <div className="mb-[24px] col-span-2 md:col-span-2 md:w-10/12 md:mx-auto lg:mb-[0px] lg:w-full lg:col-span-1">
                    <img src={require('../assets/banner.png')} className="rounded-md" alt="" />
                </div>
                <div className="col-span-2 md:col-span-2 md:grid md:w-10/12 md:mx-auto md:grid-cols-3 lg:w-full lg:col-span-1 lg:block lg:space-y-4">
                    <div className='flex mb-[16px] md:block md:col-span-1 gap-[4px] lg:mb-[0px] lg:gap-[12px] lg:flex'>
                        <div className='w-1/5 md:mb-[16px] md:mx-auto md:w-4/12 lg:w-1/6 p-2'>
                            <div className='p-2 bg-green-200 rounded-full'>
                                <img className='' src={require('../assets/price-tag.png')} alt="" />
                            </div>
                        </div>
                        <div className='w-4/5 md:w-full lg:w-5/6'>
                            <p className='mb-[4px] text-left  text-xl font-semibold md:mb-[8px] md:text-center md:text-lg lg:text-left '>Harga Terjangkau</p>
                            <p className='text-left text-gray-500 md:text-center lg:text-left text-sm font-normal'>Dengan harga terjangkau yang ditawarkan, kami ingin menawarkan tanah kebun (termasuk SHM) dengan lokasi terbaik di daerah Jonggol.</p>
                        </div>
                    </div>
                    <div className='flex mb-[16px] md:block md:col-span-1 gap-[4px] lg:mb-[0px] lg:gap-[12px] lg:flex'>
                        <div className='w-1/5 md:mb-[16px] md:mx-auto md:w-4/12 lg:w-1/6 p-2'>
                            <div className='p-2 bg-green-200 rounded-full'>
                                <img className='' src={require('../assets/profits.png')} alt="" />
                            </div>
                        </div>
                        <div className='w-4/5 md:w-full lg:w-5/6'>
                            <p className='mb-[4px] text-left  text-xl font-semibold md:mb-[8px] md:text-center md:text-lg lg:text-left '>Investasi Menjanjikan</p>
                            <p className='text-left text-gray-500 md:text-center text-sm font-normal'>Dengan lokasi yang strategi dan satu-satunya tanah kebun yang berada di Kecamatan Jonggol yang akan menjadi Ibukota Kabupaten Bogor Timur, hal ini menjadikan Kebun Kausar merupakan investasi properti yang menjanjikan.</p>
                        </div>
                    </div>
                    <div className='flex mb-[16px] md:block md:col-span-1 gap-[4px] lg:mb-[0px] lg:gap-[12px] lg:flex'>
                        <div className='w-1/5 md:mb-[16px] md:mx-auto md:w-4/12 lg:w-1/6 p-2'>
                            <div className='p-2 bg-green-200 rounded-full'>
                                <img className='' src={require('../assets/forest.png')} alt="" />
                            </div>
                        </div>
                        <div className='w-4/5 md:w-full lg:w-5/6'>
                            <p className='mb-[4px] text-left  text-xl font-semibold md:mb-[8px] md:text-center md:text-lg lg:text-left '>Linkungan Asri</p>
                            <p className='text-left text-gray-500 md:text-center text-sm font-normal'>Tanah Kebun Kausar dikelilingi oleh alam yang sangat asri menjadikannya calon hunian yang cocok untuk bersantai bersama keluarga.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;