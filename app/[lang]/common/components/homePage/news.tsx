'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Controller, Pagination } from 'swiper/modules';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import Increasing from '#/assets/svg/increasing.svg';
import Decreasing from '#/assets/svg/decreasing.svg';
import Image from 'next/image';
import { TabContent, TabNav } from '../Tab';
import { AnalyzesTabItems, categoriesNewsList } from '#/fakeData';

function News({ home }: any) {
  const [activeTab, setActiveTab] = useState('allCategories');
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
        <p className="font-[700] text-[32px] text-neutral-5">
          {home.breakingNews}
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => controlledSwiper && controlledSwiper.slidePrev()}
            className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isBeginning} // Disable button if at the beginning
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

      <ul className="flex flex-row items-center justify-start gap-8 mb-6">
        {AnalyzesTabItems.map((tabs) => (
          <TabNav
            id={tabs.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className={` px-4 py-[0px] rounded-full ${
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
          }}
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
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          className="swiper m-0"
        >
          {categoriesNewsList
            .filter((item) => item.tab === activeTab)
            .map((item) => (
              <TabContent key={item.tab} id={item.tab} activeTab={activeTab}>
                {item.contents.map((content, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="grid grid-cols-1 gap-8">
                      {content?.contentInfo?.map((c) => (
                        <div key={c.id} className="flex flex-row gap-6">
                          <Image
                            src={c.icon}
                            alt="bitfa"
                            priority
                            className="w-[96px] rounded-xl !h-auto p-0 m-0"
                          />
                          <div>
                            <p className="text-neutral-5 pt-[6px] text-neutral-50 font-medium text-[15px]">
                              {c.text}
                            </p>
                            <div className="flex items-center justify-between">
                              <p className="text-neutral-15 text-[12px]">
                                {c.date}
                              </p>
                              <div className="flex items-center gap-4">
                                <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                                  {c.countInc}
                                  <Image
                                    width={24}
                                    height={24}
                                    src={Decreasing}
                                    alt="icon"
                                  />
                                </span>
                                <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                                  {c.countInc}
                                  <Image
                                    width={24}
                                    height={24}
                                    src={Increasing}
                                    alt="icon"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default News;
