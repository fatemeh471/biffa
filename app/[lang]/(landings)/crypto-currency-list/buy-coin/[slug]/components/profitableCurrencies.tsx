'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { CaretUpOutlined } from '@ant-design/icons';
import Image from 'next/image';
import CoinIcon from '#/assets/svg/coin-logo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper/modules';
import CustomPaginationSwipper from '#/app/[lang]/common/components/customPaginationSwiper';
import { useState } from 'react';

function ProfitableCurrencies({ buyCrypto }: any) {
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
    <div>
      <div className="flex justify-between items-center pb-5 ">
        <h4 className="text-neutral-0 font-[700] text-[22px]">
          {buyCrypto.profitableCurrencies}
        </h4>
        <CustomPaginationSwipper
          controlledSwiper={controlledSwiper}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        dir="ltr"
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        onSlideChange={handleSlideChange}
        className="swiper"
      >
        <div className="flex flex-row justify-between gap-4 items-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="rounded-[12px] w-full flex flex-col divide-y divide-neutral-98 p-4 border-[1px] border-neutral-98 ">
                <div className="flex justify-between items-center pb-4">
                  <div>---------------</div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                      <span className="text-neutral-0 text-[18px] font-[700]">
                        Bitcoin
                      </span>
                      <span className="text-neutral-50 text-[12px] font-[400]">
                        BTC
                      </span>
                    </div>
                    <Image src={CoinIcon} width={44} height={44} alt="coin" />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 gap-1">
                  <div className="flex items-center gap-1">
                    <p className="text-secondary-30">0.35 %</p>
                    <CaretUpOutlined className="text-secondary-30" />
                  </div>
                  <span className="text-neutral-0 font-[700] text-[16px]">
                    $45,321.28
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
export default ProfitableCurrencies;
