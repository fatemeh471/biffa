'use client';
import 'swiper/css';
import '#/styles/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import Image from 'next/image';
import BannerImage from '#/assets/svg/baner-hero.jpg';
import EmailIcon from '#/assets/svg/email.svg';
import CoinIcon from '#/assets/svg/coin.svg';
import EditIcon from '#/assets/svg/edit.svg';
import { useState } from 'react';
import ChevronIcon from '#/assets/svg/chevron-left.svg';

export default function HeroSection() {
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

  const categories = [
    {
      id: 1,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 2,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 3,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 4,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 5,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 5,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
    {
      id: 5,
      text: '2ساعت پیش ',
      title: 'تحلیل بیت کوین',
      icon: CoinIcon,
    },
  ];
  return (
    <>
      <section className="relative w-full h-[500px]">
        <Image
          src={BannerImage}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-start ps-[100px] z-10 bg-black bg-opacity-30">
          <form className=" p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-2xl font-[800] text-[54px] text-neutral-100 mb-4">
                بیتفا
              </h2>
              <h2 className="text-2xl text-neutral-100 mb-6 mt-5">
                نگاهی جدید به بازار رمزارزها
              </h2>
            </div>
            <div className="bg-surface-dark-4 p-4 rounded">
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="ایمیل یا شماره همراه خود را وارد کنید"
                  className="w-full bg-surface-dark-1 border-none py-[18px] ps-10 border border-gray-300 rounded"
                />
                <span className="absolute right-3 top-4 text-gray-400">
                  <Image src={EmailIcon} alt="email" />
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-40 text-white py-2 mt-4 rounded-lg text-[18px]"
              >
                شروع
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="flex flex-row gap-3 mt-10 text-[24px] px-[64px] font-[700] text-neutral-5">
        <div className="flex flex-col">
          <h3>تحلیل ها ارزها</h3>
          <div className="flex gap-5 pt-6">
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
          slidesPerView={7}
          onSwiper={setControlledSwiper}
          onSlideChange={handleSlideChange}
          className="swiper"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col border-[1px] border-neutral-98 w-[157px] text-center items-center rounded-[20px] py-5 gap-1 px-4">
                <Image src={item.icon} alt="email" />
                <span className="text-[15px] text-neutral-5">{item.title}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-neutral-50">
                    {' '}
                    {item.text}
                  </span>
                  <Image src={EditIcon} alt="email" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
