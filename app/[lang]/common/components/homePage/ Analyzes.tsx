'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProfileImage from '#/assets/svg/profile.svg';
import { useState } from 'react';
import { Controller, Pagination } from 'swiper/modules';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import LikeIcon from '#/assets/svg/like.svg';
import SmsIcon from '#/assets/svg/sms.svg';
import Image from 'next/image';
import { TabContent, TabNav } from '../Tab';
import { AnalyzesTabItems, categoriesAnalysSwiper } from '#/fakeData';
import ArrowUpLeft from '#/assets/svg/Arrow-Up-Left.svg';
import Link from 'next/link';

interface AnalyzesProps {
  home: {
    breakingNews: string;
    seeAll: string;
    all: string;
  };
}

function Analyzes({ home }: AnalyzesProps) {
  const [activeTab, setActiveTab] = useState('learning');
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
            {home.breakingNews}
          </p>
          <div className="hidden lg:flex gap-2">
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
        <div className="flex items-center gap-1">
          <Link href="#" className="text-primary-40 text-[17px] font-[600]">
            <span className="block md:hidden">{home.all}</span>
            <span className="hidden md:block">{home.seeAll}</span>
          </Link>
          <Image src={ArrowUpLeft} alt="icon" />
        </div>
      </div>
      <ul className="flex overflow-x-auto flex-row items-center justify-start gap-8 mb-6">
        {AnalyzesTabItems.map((tabs) => (
          <TabNav
            id={tabs.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className={` px-2 py-[0px] rounded-full ${
              activeTab !== tabs.id
                ? 'bg-neutral-100'
                : 'border-[1px] border-neutral-90'
            }`}
          >
            {tabs.name}
          </TabNav>
        ))}
      </ul>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          }}
          onSwiper={setControlledSwiper}
          modules={[Controller, Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={handleSlideChange}
          dir="ltr"
          controller={{ control: controlledSwiper }}
          className="swiper "
        >
          {categoriesAnalysSwiper
            .filter((item) => item.tab === activeTab)
            .map((item) => (
              <TabContent id={item.tab} activeTab={activeTab}>
                {item.contents.map((content) => (
                  <SwiperSlide key={content.id}>
                    <div className="flex items-end flex-col bg-neutral-100 p-2 rounded-lg">
                      <Image
                        src={content.icon}
                        alt={'bitfa'}
                        priority
                        className="w-full"
                      />
                      <p className="font-bold text-neutral-50 text-sm text-nowrap mt-2">
                        {content.title}
                      </p>
                      <p className="text-end text-neutral-5 pb-3 pt-[6px] text-neutral-10 font-medium text-[17px]">
                        {content.text}
                      </p>
                      <section className="flex justify-between w-full items-center">
                        <div className="flex justify-between gap-5">
                          <div className="flex items-center gap-2">
                            <Image src={LikeIcon} alt={'bitfa'} priority />
                            <span className="text-[15px] text-neutral-15">
                              {content.lik}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image src={SmsIcon} alt={'bitfa'} priority />
                            <span className="text-[15px] text-neutral-15">
                              {content.sms}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-flow-col gap-2">
                          <div className="row-span-2 ">
                            <p className="text-end text-sm text-neutral-5">
                              {content.name}
                            </p>
                            <p className="text-end text-xs text-neutral-15">
                              {content.date}
                            </p>
                          </div>
                          <div className="row-span-3">
                            <Image
                              src={ProfileImage}
                              alt={'bitfa'}
                              priority
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  </SwiperSlide>
                ))}
              </TabContent>
            ))}
        </Swiper>
      </div>
      <div
        className="swiper-pagination"
        style={{ textAlign: 'center', bottom: '-60px' }}
      ></div>
    </>
  );
}

export default Analyzes;
