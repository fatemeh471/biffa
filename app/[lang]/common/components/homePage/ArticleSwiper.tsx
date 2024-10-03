'use client';
import 'swiper/css';
import '#/styles/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { useState } from 'react';
import Article1 from '#/assets/svg/article-1.svg';
import ProfileImage from '#/assets/svg/profile.svg';
import ChevronIcon from '#/assets/svg/chevron-left.svg';
import Image from 'next/image';

function ArticleSwiper() {
  const categories = [
    {
      id: 1,
      text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
      title: 'میم‌کوین چیست؟',
      icon: Article1,
      link: '',
    },
    {
      id: 2,
      text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
      title: 'لوازم سوارکار',
      icon: Article1,
      link: '',
    },
    {
      id: 3,
      text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
      title: 'لوازم دامپزشکی ',
      icon: Article1,
      link: '',
    },
    {
      id: 4,
      text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
      title: 'مکمل ها',
      icon: Article1,
      link: '',
    },
    {
      id: 5,
      text: 'هاوینگ بعدی بیت کوین در سال ۲۰۲۸ رخ می‌دهد. براساس زمان تقریبی استخراج هر بلاک و اینکه هر رویداد هاوینگ بعد از استخراج ۲۱۰۰۰۰ بلاک روی می‌دهد، پیش‌بینی می‌شود',
      title: 'مکمل ها',
      icon: Article1,
      link: '',
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
            disabled={isEnd} // Disable button if at the end
          >
            <Image width={24} height={24} src={ChevronIcon} alt="icon" />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        dir="ltr"
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        slidesPerView={4}
        onSwiper={setControlledSwiper} // Store swiper instance here
        onSlideChange={handleSlideChange} // Track slide change
        className="swiper"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-end flex-col">
              <Image
                src={item.icon}
                alt={'bitfa'}
                priority
                className="w-full"
              />
              <p className="font-bold text-[18px] text-neutral-5 text-nowrap mt-2">
                {item.title}
              </p>
              <p className="text-end text-xs text-neutral-5 pb-3">
                {item.text}
              </p>
              <div className="flex flex-row-reverse gap-1 items-center">
                <Image src={ProfileImage} alt={'bitfa'} priority />
                <p className="text-neutral-10 text-xs">احمدرضا شاه‌محمدی</p>
                <p className="text-neutral-50 text-xs">۲ دی ۱۴۰۲</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ArticleSwiper;
