'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import Image from 'next/image';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import EditIcon from '#/assets/svg/edit.svg';
import { useState } from 'react';
import { categories } from '#/fakeData';
import CustomPaginationSwipper from './customPaginationSwiper';

interface CategorySwiperProps {
  title: string;
}

export default function CoinAnalyzeSlider({ title }: CategorySwiperProps) {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="flex background-linear-gradient flex-row gap-3 md:mt-10 text-[24px] md:px-[64px] font-[700] text-neutral-5">
      <div className="hidden  md:flex flex-col">
        <h3 className="font-[700] text-[28px]">{title}</h3>
        <div className="flex gap-5 pt-6">
          <CustomPaginationSwipper
            controlledSwiper={controlledSwiper}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        </div>
      </div>
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
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex bg-white my-6 flex-col border-[1px] border-neutral-98 w-[157px] text-center items-center rounded-[20px] py-5 gap-1 px-4">
              <Image src={item.icon} alt="email" />
              <span className="text-[15px] text-neutral-5">{item.title}</span>
              <div className="flex items-center gap-1">
                <Image src={EditIcon} alt="edit icon" />
                <span className="text-[12px] text-neutral-50">{item.text}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
