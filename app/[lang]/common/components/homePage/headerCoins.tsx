'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { headerCoinList } from '#/fakeData';

export default async function HeaderCoins({ home }) {
  return (
    <>
      <div className="md:px-[64px]">
        <Swiper
          spaceBetween={10}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
            992: {
              slidesPerView: 3, 
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Controller, Pagination, Autoplay]}
          className="swiper !mx-0"
        >
          {headerCoinList.map((item) => (
            <SwiperSlide key={item.coinName}>
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-secondary-40 text-base">
                    {item.amountInc}
                  </span>
                  <Image src={item.logoInc} alt="logo" />
                </div>
                <span className="text-neutral-50 text-base">
                  {item.amountToman}
                </span>
                <span className="text-neutral-10 text-base">
                  {item.amountDollor}
                </span>
                <div className="flex items-center gap-1">
                  <Image src={item.logoInc} alt="logo" />
                  <span className="text-neutral-15 text-base">
                    {item.coinName}
                  </span>
                  <Image src={item.coinLogo} alt="logo" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
