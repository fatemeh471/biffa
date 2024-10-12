'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import Image from 'next/image';
import CryptoCurrencyPrice from '#/assets/svg/crypto-currency-price.png';
import { useState } from 'react';

export default function CryptoSlider({ cryptoList }: any) {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Swiper
      spaceBetween={30}
      dir="ltr"
      modules={[Controller]}
      controller={{ control: controlledSwiper }}
      slidesPerView={2}
      onSwiper={setControlledSwiper}
      onSlideChange={handleSlideChange}
      className="swiper m-0"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 7,
        },
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <SwiperSlide key={item} className="w-full">
          <div className="flex flex-col justify-start w-[50%]">
            <h2 className="font-[800] text-[28px] text-neutral-0">
              {cryptoList.whatPriceDigitalCurrency}
            </h2>
            <p className="font-[500] text-base text-neutral-25">
              {cryptoList.whatPriceDigitalCurrencyDec}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
