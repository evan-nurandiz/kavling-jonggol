import React from 'react';

const Price = () => {
    return (
        <React.Fragment>
            <div className='py-[16px] lg:py-[0px] lg:py bg-gray-200'>
                <div className="grid items-center gap-[16px] grid-cols-3">
                    <div className="hidden md:hidden cols-span-0 lg:block lg:col-span-1">
                        <img src={require('../assets/price-list.jpeg')} alt="" />
                    </div>
                    <div className='col-span-3 lg:col-span-2 lg:py-[12px]'>
                        <p className='text-center text-2xl mb-[32px] font-bold lg:text-3xl lg:mb-[48px] lg:font-bold'>Daftar Harga di <br className='block lg:hidden'/> Kavling Jonggol Indah</p>
                        <div className='block px-[8px] md:flex md:gap-6 lg:lex lg:items-center lg:px-[24px] lg:gap-8'>
                            <div className='shadow-xl mb-[40px] bg-white/[.4] w-full rounded-md md:w-1/2 lg:mb-[0px] lg:w-1/2 lg:shadow-lg p-[16px]'>
                                <div className='mb-[12px] flex items-center justify-between lg:mb-[16px]'>
                                    <div className='text-left'>
                                        <p className='lg:text-md font-semibold text-gray-400'>Luas Tanah 
                                        <p className='lg:text-lg font-bold text-black'>100M<sup>2</sup></p></p>
                                    </div>
                                    <div>
                                        <span>
                                            <p className='text-xl font-bold text-black'>Rp 630,000/ <sub>M<sup>2</sup></sub></p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-left px-4'>
                                    <ol className='list-decimal space-y-2'>
                                        <li className='text-gray-700'>Termasuk SHM</li>
                                        <li className='text-gray-700'>Berlokasi di Desa Sukanegara, Kecamatan Jonggol masa depan Ibukota Kabupaten Bogor Timur</li>
                                        <li className='text-gray-700'>Dekat jalur tol</li>
                                        <li className='text-gray-700'>Berada di pinggir jalan raya jalur puncak 2</li>
                                        <li className='text-gray-700'>Row jalan 10 & 6 meter</li>
                                        <li className='text-gray-700'>View pegunungan indah</li>
                                        <li className='text-gray-700'>Drainase kiri kanan</li>
                                        <li className='text-gray-700'>Dekat berbagai tempat wisata</li>
                                        <li className='text-gray-700'>Dapat dibangun rumah kebun dengan berbagai pilihan</li>
                                    </ol>
                                </div>
                            </div>
                            <div className='shadow-xl mb-[40px] bg-green-500 w-full rounded-md md:w-1/2 lg:mb-[0px] lg:w-1/2 lg:shadow-lg p-[16px]'>
                                <div className='mb-[12px] flex items-center justify-between lg:mb-[16px]'>
                                    <div className='text-left'>
                                        <p className='lg:text-md font-semibold text-gray-100'>Luas Tanah</p>
                                        <p className='lg:text-lg font-bold text-white'>1 Hektar</p>
                                    </div>
                                    <div>
                                        <span>
                                            <p className='text-xl font-bold text-white'>Rp 350,000/ <sub>M<sup>2</sup></sub></p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-left px-4'>
                                    <ol className='list-decimal space-y-2'>
                                        <li className='text-gray-100'>Termasuk SHM</li>
                                        <li className='text-gray-100'>Berlokasi di Desa Sukanegara, Kecamatan Jonggol masa depan Ibukota Kabupaten Bogor Timur</li>
                                        <li className='text-gray-100'>Dekat jalur tol</li>
                                        <li className='text-gray-100'>Berada di pinggir jalan raya jalur puncak 2</li>
                                        <li className='text-gray-100'>Row jalan 10 & 6 meter</li>
                                        <li className='text-gray-100'>View pegunungan indah</li>
                                        <li className='text-gray-100'>Drainase kiri kanan</li>
                                        <li className='text-gray-100'>Dekat berbagai tempat wisata</li>
                                        <li className='text-gray-100'>Dapat dibangun rumah kebun dengan berbagai pilihan</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Price;