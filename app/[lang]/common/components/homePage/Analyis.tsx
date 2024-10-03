'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Analys1 from '#/assets/svg/analys-1.svg';
import Article from '#/assets/svg/article-1.svg';
import Analys2 from '#/assets/svg/analys-3.svg';
import Analys3 from '#/assets/svg/analys-3.svg';
import ProfileImage from '#/assets/svg/profile.svg';
import { useState } from 'react';
import { Controller, Pagination } from 'swiper/modules';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import LikeIcon from '#/assets/svg/like.svg';
import SmsIcon from '#/assets/svg/sms.svg';
import Image from 'next/image';
import { TabContent, TabNav } from '../Tab';

function AnalysSwiper() {
  const [activeTab, setActiveTab] = useState('allCategories');
  console.log(activeTab, 'activeTab');
  const categories = [
    {
      tab: 'allCategories',
      contents: [
        {
          id: 1,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'میم‌کوین چیست؟',
          icon: Analys1,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
        {
          id: 2,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'لوازم سوارکار',
          icon: Analys2,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
        {
          id: 3,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'لوازم دامپزشکی ',
          icon: Analys3,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
        {
          id: 4,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'مکمل ها',
          icon: Analys1,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
      ],
    },
    {
      tab: 'learning',
      contents: [
        {
          id: 1,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'میم‌کوین چیست؟',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
        {
          id: 2,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'لوازم سوارکار',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
        {
          id: 2,
          text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
          title: 'لوازم سوارکار',
          icon: Article,
          link: '',
          lik: '25',
          sms: 20,
          name: 'احمدرضا',
          date: '1403-07-07',
        },
      ],
    },
  ];

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const [isBeginning, setIsBeginning] = useState(true); // To disable "Prev" when at the start
  const [isEnd, setIsEnd] = useState(false); // To disable "Next" when at the end

  // Update state on slide change
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
          .filter((item) => item.tab === activeTab) // Only show the active tab's content
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
                          <Image src={ProfileImage} alt={'bitfa'} priority />
                        </div>
                      </div>
                    </section>
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

export default AnalysSwiper;
