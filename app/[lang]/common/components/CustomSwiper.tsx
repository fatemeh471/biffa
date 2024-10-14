'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper/modules';
import {
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import CustomPaginationSwipper from './customPaginationSwiper';

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
            ? { clickable: true, bulletClass: 'swiper-pagination-bullet' }
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
        <div className="flex gap-5 pt-6">
          <CustomPaginationSwipper
            controlledSwiper={controlledSwiper}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        </div>
      )}
    </div>
  );
}
