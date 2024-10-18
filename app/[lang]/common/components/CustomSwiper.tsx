'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper/modules';
import {
  UpOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

export default function CustomSwipper({
  data,
  renderSlideContent,
  customPagination = false,
  ...props
}: any) {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        dir="rtl"
        modules={[Controller, Pagination]}
        controller={{ control: controlledSwiper }}
        slidesPerView={1}
        onSwiper={setControlledSwiper}
        onSlideChange={handleSlideChange}
        className="swiper w-full"
        {...props}
        pagination={
          !customPagination
            ? { clickable: true, el: 'swiper-pagination' }
            : false
        } // Bullet pagination if customPagination is false
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index} className="w-full">
            {renderSlideContent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Render custom navigation buttons if customPagination is true */}
      {customPagination && (
        <div className="flex gap-5 mt-0 swiper-pagination">
          <button
            onClick={() => controlledSwiper && controlledSwiper.slidePrev()}
            className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isBeginning}
          >
            <RightOutlined className="text-neutral-20" />
          </button>
          <button
            onClick={() => controlledSwiper && controlledSwiper.slideNext()}
            className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
              isEnd ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isEnd}
          >
            <LeftOutlined className="text-neutral-20" />
          </button>
        </div>
      )}
    </div>
  );
}
