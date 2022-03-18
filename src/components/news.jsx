import React from 'react';

const News = () => {
    return (
        <React.Fragment>
            <div>
                <p className='mb-[24px] text-lg lg:mb-[48px] lg:text-4xl font-bold'>Berita Tentang Kavling Jonggol Indah</p>
                <div className='mx-auto w-11/12 block lg:w-10/12  lg:flex lg:gap-[16px]'>
                    <div className='w-full mb-[16px] md:mb-[20px] lg:mb-[0px] lg:w-1/2'>
                        <img
                        className='rounded-md mb-[16px] lg:mb-[24px]' 
                        src="https://blue.kumparan.com/image/upload/c_fill,f_jpg,h_676,q_auto,w_1200/g_south,l_og_kumparan_zscykb/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20Redaksi%20kumparan%0DkumparanNEWS,x_140,y_26/gqiera2caablzjq7etde.jpg" alt="" />
                        <div className='flex mb-[4px] lg:mb-[8px] gap-[8px] items-center'>
                            <img className='w-[16px] h-[16px]' src={require('../assets/calendar.png')} alt="" />
                            <p className='font-normal text-md text-gray-500'>Jumat, 23 Maret 2022</p>
                        </div>
                        <div>
                            <p className='text-left leading-[32px] text-xl font-bold text-black'>Ridwan Kamil Setujui Kabupaten Baru Bogor Timur dan Indramayu Barat</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 gap-[8px] grid grid-cols-2'>
                        <div className="col-span-1">
                            <img
                            className='rounded-md mb-[12px] lg:mb-[16px]' 
                            src="https://blue.kumparan.com/image/upload/c_fill,f_jpg,h_676,q_auto,w_1200/g_south,l_og_kumparan_zscykb/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20Redaksi%20kumparan%0DkumparanNEWS,x_140,y_26/gqiera2caablzjq7etde.jpg" alt="" />
                            <div className='flex mb-[8px] lg:mb-[4px] gap-[8px] items-center'>
                                <img className='w-[16px] h-[16px]' src={require('../assets/calendar.png')} alt="" />
                                <p className='font-normal text-xs lg:text-md text-gray-500'>Jumat, 23 Maret 2022</p>
                            </div>
                            <div>
                                <p className='text-left mb-[4px] leading-[24px] lg:mb-[0px] lg:leading-[32px] lg:text-lg font-semibold text-black'>Ridwan Kamil Setujui Kabupaten Baru Bogor Timur dan Indramayu Barat</p>
                                <p className='text-left leading-[20px] lg:leading-[28px] text-sm font-normal text-gray-400'>Jakarta - Gubernur Jawa Barat (Jabar) Ridwan Kamil menandatangani surat persetujuan bersama antara Pemda Provinsi Jabar dan DPRD Jabar…</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img
                            className='rounded-md mb-[12px] lg:mb-[16px]' 
                            src="https://blue.kumparan.com/image/upload/c_fill,f_jpg,h_676,q_auto,w_1200/g_south,l_og_kumparan_zscykb/co_rgb:ffffff,g_south_west,l_text:Heebo_20_bold:Konten%20Redaksi%20kumparan%0DkumparanNEWS,x_140,y_26/gqiera2caablzjq7etde.jpg" alt="" />
                            <div className='flex mb-[8px] lg:mb-[4px] gap-[8px] items-center'>
                                <img className='w-[16px] h-[16px]' src={require('../assets/calendar.png')} alt="" />
                                <p className='font-normal text-xs lg:text-md text-gray-500'>Jumat, 23 Maret 2022</p>
                            </div>
                            <div>
                                <p className='text-left mb-[4px] leading-[24px] lg:mb-[0px] lg:leading-[32px] lg:text-lg font-semibold text-black'>Ridwan Kamil Setujui Kabupaten Baru Bogor Timur dan Indramayu Barat</p>
                                <p className='text-left leading-[20px] lg:leading-[28px] text-sm font-normal text-gray-400'>Jakarta - Gubernur Jawa Barat (Jabar) Ridwan Kamil menandatangani surat persetujuan bersama antara Pemda Provinsi Jabar dan DPRD Jabar…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default News;