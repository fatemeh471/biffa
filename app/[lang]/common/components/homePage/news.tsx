'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Analys1 from '#/assets/svg/news.svg';
import Article from '#/assets/svg/article-1.svg';
import { useState } from 'react';
import { Controller, Pagination } from 'swiper/modules';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import Increasing from '#/assets/svg/increasing.svg';
import Decreasing from '#/assets/svg/decreasing.svg';
import Image from 'next/image';
import { TabContent, TabNav } from '../Tab';

function News() {
  const [activeTab, setActiveTab] = useState('allCategories');
  console.log(activeTab, 'activeTab');
  const categories = [
    {
      tab: 'allCategories',
      contents: [
        {
          contentInfo: [
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
          ],
        },
        {
          contentInfo: [
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
          ],
        },
        {
          contentInfo: [
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
          ],
        },
        {
          contentInfo: [
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
          ],
        },
        {
          contentInfo: [
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
            {
              id: 1,
              text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
              icon: Analys1,
              link: '',
              lik: '25',
              sms: 20,
              name: 'احمدرضا',
              date: '2 ساعت قبل',
            },
          ],
        },
      ],
    },
    {
      tab: 'learning',
      contents: [
        {
          id: 1,
          text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '2 ساعت قبل',
        },
        {
          id: 2,
          text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
          title: 'لوازم سوارکار',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '2 ساعت قبل',
        },
        {
          id: 2,
          text: 'رابرت کیوساکی: برداشته شدن سقف بدهی ثروتمندان را با فقیرتر شدن آمریکا پول‌دارتر می‌کند',
          title: 'لوازم سوارکار',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '2 ساعت قبل',
        },
      ],
    },
  ];

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
          <p className="font-bold text-primary">{'dict.home.articleAirdrop'}</p>
          <i color="#4D5F6D" />
        </div>
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
        <TabNav
          id="allCategories"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className={` px-2 py-[0px] rounded-full ${
            activeTab !== 'allCategories'
              ? 'bg-neutral-100'
              : 'border-[1px] border-neutral-90'
          }`}
        >
          {'allCategories'}
        </TabNav>
        <TabNav
          className={` px-2 py-[0px] rounded-full ${
            activeTab !== 'learning'
              ? 'bg-neutral-100'
              : 'border-[1px] border-neutral-90'
          }`}
          id="learning"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {'آموزش دیفای'}
        </TabNav>
      </ul>

      <Swiper
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        }}
        modules={[Controller, Pagination]}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
        dir="ltr"
        controller={{ control: controlledSwiper }}
        className="swiper "
      >
        {categories
          .filter((item) => item.tab === activeTab)
          .map((item) => (
            <TabContent id={item.tab} activeTab={activeTab}>
              {item.contents.map((content) => (
                <SwiperSlide key={content.id}>
                  <div className="grid grid-cols-1 grid  gap-8">
                    {content?.contentInfo?.map((c) => (
                      <div className="flex flex-row gap-6">
                        <Image
                          src={c.icon}
                          alt={'bitfa'}
                          priority
                          className="w-[96px] rounded-xl !h-auto p-0 m-0"
                        />
                        <div>
                          <p className="text-end text-neutral-5 pt-[6px] text-neutral-50 font-medium text-[15px]">
                            {c.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                                25
                                <Image
                                  width={24}
                                  height={24}
                                  src={Decreasing}
                                  alt="icon"
                                />
                              </span>
                              <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                                25
                                <Image
                                  width={24}
                                  height={24}
                                  src={Increasing}
                                  alt="icon"
                                />
                              </span>
                            </div>
                            <p className="text-neutral-15 text-[12px]">
                              2 ساعت قبل
                            </p>
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

      <div
        className="swiper-pagination"
        style={{ textAlign: 'center', bottom: '-60px' }}
      ></div>
    </>
  );
}

export default News;
