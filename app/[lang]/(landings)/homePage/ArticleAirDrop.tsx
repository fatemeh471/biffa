'use client';
import 'swiper/css';
import '#/styles/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { useState } from 'react';
import ProfileImage from '#/assets/svg/profile.svg';
import Image from 'next/image';
import { categoriesArticleList } from '#/fakeData';
import ArrowUpLeft from '#/assets/svg/Arrow-Up-Left.svg';
import Link from 'next/link';
import CustomPaginationSwipper from '../../common/components/customPaginationSwiper';

function ArticleAirDrop({ home }: { home: any }) {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 pb-8">
        <div className="flex items-center gap-6">
          <p className="font-[700] text-[32px] text-neutral-5">
            {home.articleAirdrop}
          </p>
          <div className="hidden lg:flex gap-2">
            <CustomPaginationSwipper
              controlledSwiper={controlledSwiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link href="#" className="text-primary-40 text-[17px] font-[600]">
            <span className="block md:hidden">{home.all}</span>
            <span className="hidden md:block">{home.seeAll}</span>
          </Link>
          <Image src={ArrowUpLeft} alt="icon" />
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
