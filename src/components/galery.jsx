import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Galery = () => {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>
            <div>
                <p className='mb-[24px] lg:mb-[48px] lg:text-4xl font-bold'>Galeri Kavling Jonggol Indah</p>
            </div>
            <div className='mx-auto w-11/12 md:w-10/12 lg:w-10/12 rounded-md'>
                <Slider {...settings}>
                    <div className='rounded-lg h-[250px] md:h-[400px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/banner-2.jpeg')} alt="" />
                    </div>
                    <div className='rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/banner.png')} alt="" />
                    </div>
                    <div className='rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/galery-2.jpeg')} alt="" />
                    </div>
                    <div className='rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/galery-4.jpeg')} alt="" />
                    </div>
                    <div className='rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/galery-4.jpeg')} alt="" />
                    </div>
                    <div className='rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'>
                        <img
                        className='w-full rounded-lg h-[250px] md:h-[400px] lg:h-[540px]'
                        src={require('../assets/galery-5.jpeg')} alt="" />
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    );
};

export default Galery;