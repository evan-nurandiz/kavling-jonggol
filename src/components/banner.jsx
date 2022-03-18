import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            <div class="bg-cover bg-[url('../src/assets/banner-2.jpeg')] h-[700px] lg:h-[600px] flex items-center justify-center">
                <div class="shadow rounded-md bg-white/[.6] lg:max-w-[1200px]  mx-4 p-4 text-center md:p-8">
                    <p className='mb-[12px] text-2xl md:mb-[24px] lg:mb-[32px] lg:text-6xl font-bold text-black'>Kavling Jonggol Indah</p>
                    <div className='space-y-[8px] md:space-y-[16px] lg:space-y-[12px]'>
                        <div className='block items-center md:gap-[18px] md:flex lg:flex lg:gap-[24px]'>
                            <img className='mb-[8px] mx-auto md:mx-0 lg:mb-[0px] lg:mx-0' src={require('../assets/location-pin.png')} alt="" />
                            <p className='text-lg md:text-xl md:text-left lg:text-xl font-normal text-black'>investasi properti tanah kebun terjangkau (termasuk SHM)  di bakal Ibukota Kabupaten Bogor Timur.</p>
                        </div>
                        <div className='block items-center md:gap-[18px] md:flex lg:flex lg:gap-[24px]'>
                            <img className='mb-[8px] mx-auto md:mx-0 lg:mb-[0px] lg:mx-0' src={require('../assets/hills.png')} alt="" />
                            <p className='text-lg md:text-xl md:text-left lg:text-xl font-normal text-black'>Berada di Desa Sukanegara, Kecamatan Jonggol, Jawa Barat.</p>
                        </div>
                        <div className='block items-center md:gap-[18px] md:flex lg:flex lg:gap-[24px]'>
                            <img className='mb-[8px] mx-auto md:mx-0 lg:mb-[0px] lg:mx-0' src={require('../assets/house.png')} alt="" />
                            <p className='text-lg md:text-xl md:text-left lg:text-xl font-normal text-black'>Lokasi Strategis. Dekat dengan Pasar Dayeuh, Islamic International Borading School IDN, SDN Dayeuh dan lainnya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Banner;