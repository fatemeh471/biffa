'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function CustomPaginationSwipper({
  controlledSwiper,
  isBeginning,
  isEnd,
}: any) {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => controlledSwiper && controlledSwiper.slidePrev()}
        className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
          isBeginning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isBeginning}
      >
        <RightOutlined className="text-neutral-20" />
      </button>
      <button
        onClick={() => controlledSwiper && controlledSwiper.slideNext()}
        className={`flex justify-center items-center border-[1px] border-neutral-80 rounded-[100%] w-[44px] h-[44px] text-white ${
          isEnd ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isEnd}
      >
        <LeftOutlined className="text-neutral-20" />
      </button>
    </div>
  );
}
