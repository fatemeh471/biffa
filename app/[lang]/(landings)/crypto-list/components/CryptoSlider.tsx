'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import ChevronIcon from '#/assets/svg/chevron-left.svg';

export default function CryptoSlider({ cryptoList }: any) {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="w-[100%] md:w-[50%] h-full flex flex-col justify-between">
      <Swiper
        spaceBetween={30}
        dir="rtl"
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        slidesPerView={1}
        onSwiper={setControlledSwiper}
        onSlideChange={handleSlideChange}
        className="swiper w-full"
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item} className="w-full">
            <div className="flex flex-col justify-start">
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
      <div className="flex gap-5 pt-6">
        <button
          onClick={() => controlledSwiper && controlledSwiper.slidePrev()}
          className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
            isBeginning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isBeginning}
        >
          <Image width={24} height={24} src={ChevronIcon} alt="icon" />
        </button>
        <button
          onClick={() => controlledSwiper && controlledSwiper.slideNext()}
          className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
            isEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isEnd}
        >
          <Image width={24} height={24} src={ChevronIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}
