import './header.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { HeaderSwiperText } from './Header';


export const HeaderSwiper = () => {
    return (<Swiper className='header-swiper'
        modules={[EffectFade, Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        effect='fade'
        fadeEffect={{
            crossFade: true

        }}
        speed={1100}
    >
        <SwiperSlide className='background-slide background-slide-1'>
            <HeaderSwiperText title={` The Best Coffee Testing Experience `} subTitle='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        </SwiperSlide>
        <SwiperSlide className='background-slide background-slide-2'>
            <HeaderSwiperText title='Amazing Taste & Beautiful Place' subTitle='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        </SwiperSlide>
        <SwiperSlide className='background-slide background-slide-3'>
            <HeaderSwiperText title='Creamy Hot and Ready to Serve' subTitle='A small river named Duden flows by their place and supplies it with the necessary regelialia.' />
        </SwiperSlide>

    </Swiper>
    )
}
