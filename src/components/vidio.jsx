import React from 'react';
import { Player } from 'video-react';

const VidioPromotion = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-200 px-[4px] py-[24px] lg:py-[120px] lg:px-[0px]'>
                <div className='mx-auto w-full block lg:w-10/12  lg:flex lg:gap-[16px]'>
                    <div className='hidden md:hidden lg:block lg:w-1/2 text-left'>
                        <p className='lg:text-3xl lg:mb-[16px] lg:font-bold'>Kami Senang Untuk Memberitahu Anda <br /> Mengenai Pembangunan Kami</p>
                        <p className='lg:text-md lg:mb-[12px] text-gray-600 lg:font-normal'>Kami percaya pembangunan Kabupaten Bogor 
                            Timur nantinya akan berlangsung  pesat. Karena merupakan kebutuhan masyarakat 
                            untuk memiliki lahan yang bisa dijadikan hunian yang terjangkau 
                            (legalitas lengkap termasuk SHM), asri serta secara administrasi masih termasuk Kecamatan Jonggol.
                        </p>
                        <p className='lg:text-md text-gray-600 lg:font-normal'>Kami mengajak Anda yang tertarik berinvestasi di daerah Jonggol untuk menghubungi kami dan mulai berinvestasi di Kavling Kebun Kausar.</p>
                    </div>
                    <div className='z-10 md:mx-auto mb-[32px] lg:w-1/2'>
                        <video src={require('../assets/vidio-promotion.MP4')} className='md:mx-auto rounded-md' controls/>
                    </div>
                    <div className='block md:block md:px-[24px] lg:hidden lg:w-1/2 text-left'>
                        <p className='mb-[24px] text-xl font-bold text-center lg:text-left lg:text-3xl lg:mb-[16px] '>Kami Senang Untuk Memberitahu Anda <br /> Mengenai Pembangunan Kami</p>
                        <p className='text-md mb-[18px] px-[4px] font-normal text-justify lg:px-[0px] lg:text-md lg:mb-[12px] text-gray-600 lg:font-normal'>Kami percaya pembangunan Kabupaten Bogor 
                            Timur nantinya akan berlangsung  pesat. Karena merupakan kebutuhan masyarakat 
                            untuk memiliki lahan yang bisa dijadikan hunian yang terjangkau 
                            (legalitas lengkap termasuk SHM), asri serta secara administrasi masih termasuk Kecamatan Jonggol.
                        </p>
                        <p className='lg:text-md text-gray-600 lg:font-normal'>Kami mengajak Anda yang tertarik berinvestasi di daerah Jonggol untuk menghubungi kami dan mulai berinvestasi di Kavling Kebun Kausar.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default VidioPromotion;