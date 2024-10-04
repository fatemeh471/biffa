'use client';
import 'swiper/css';
import '#/styles/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { useState } from 'react';
import ProfileImage from '#/assets/svg/profile.svg';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import Image from 'next/image';
import { categoriesArticleList } from '#/fakeData';

function ArticleAirDrop({ home }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="flex items-center gap-2 pb-8">
        <div>
          <p className="font-[700] text-[32px] text-neutral-5">
            {home.articleAirdrop}
          </p>
          <i color="#4D5F6D" />
        </div>
        <div className="flex gap-5">
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
      <div>
        <Swiper
          spaceBetween={30}
          dir="ltr"
          modules={[Controller]}
          controller={{ control: controlledSwiper }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          onSwiper={setControlledSwiper} 
          onSlideChange={handleSlideChange}
          className="swiper"
        >
          {categoriesArticleList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-end flex-col">
                <Image
                  src={item.icon}
                  alt={'bitfa'}
                  priority
                  className="w-full"
                />
                <p className="font-[700] text-[18px] text-neutral-5 text-nowrap my-2">
                  {item.title}
                </p>
                <p className="text-end text-xs text-neutral-5 pb-3">
                  {item.text}
                </p>
                <div className="flex flex-row-reverse gap-1 items-center">
                  <Image src={ProfileImage} alt={'bitfa'} priority />
                  <p className="text-neutral-10 text-xs">{item.profileName}</p>
                  <p className="text-neutral-50 text-xs">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ArticleAirDrop;
