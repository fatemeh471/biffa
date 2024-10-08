'use client';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Increasing from '#/assets/svg/increasing.svg';
import Decreasing from '#/assets/svg/decreasing.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

interface MostVisitedArticleProps {
  data: any[];
  swiperData: Array<{
    text: string;
    date: string;
    IncCount: string;
    DecCount: string;
  }>;
  title: string;
  newsLabel: string;
}

function MostVisitedArticle({
  data,
  swiperData,
  title,
  newsLabel,
}: MostVisitedArticleProps) {
  return (
    <section className="mt-[70px] mb-6">
      <h1 className="font-[700] text-[24px] md:text-[32px] pb-5 md:pb-6">{title}</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {data.map((most, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 flex-grow-[2] lg:w-[80%]"
          >
            <div className="lg:flex hidden flex-row gap-8">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="pt-[6px] text-neutral-5 font-[600] text-[22px]">
                    {most.boldTopic}
                  </p>
                  <p className="pt-[6px] text-neutral-25 text-[16px]">
                    {most.boldText}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-15 text-[12px]">{most.dateBold}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                      {most.DecCount}
                      <Image
                        width={24}
                        height={24}
                        src={Decreasing}
                        alt="icon"
                      />
                    </span>
                    <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                      {most.IncCount}
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
              <Image
                src={most.boldImage}
                alt="bitfa"
                priority
                className="!w-[596px] !h-[334px] rounded-xl !h-auto p-0 m-0"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-8 pt-10">
              {most.content.map((item: { image: string | StaticImport; text: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; DecCount: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; IncCount: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, i: Key | null | undefined) => (
                <div key={i} className="flex-col mb-4">
                  <Image src={item.image} alt="icon" className="w-full" />
                  <p className="pt-[6px] text-neutral-5 font-[700] text-[16px]">
                    {item.text}
                  </p>
                  <div className="flex items-center pt-5 justify-between">
                    <p className="text-neutral-15 text-[12px]">{item.date}</p>
                    <div className="flex items-center gap-4">
                      <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                        {item.DecCount}
                        <Image
                          width={24}
                          height={24}
                          src={Decreasing}
                          alt="icon"
                        />
                      </span>
                      <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                        {item.IncCount}
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
              ))}
            </div>
          </div>
        ))}
        <div className="flex-grow-[1]">
          <p className="pt-[6px] text-neutral-5 mb-8 font-[600] text-[22px]">
            {newsLabel}
          </p>
          <div className="block lg:hidden">
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
              className="swiper !mx-0"
            >
              {swiperData.map((item: any) => (
                <SwiperSlide key={item.coinName}>
                  <div className="flex-col mb-4">
                    <p className="pt-[6px] text-neutral-50 text-[16px]">
                      {item.text}
                    </p>
                    <div className="flex items-center pt-5 justify-between">
                      <p className="text-neutral-15 text-[12px]">{item.date}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                          {item.DecCount}
                          <Image
                            width={24}
                            height={24}
                            src={Decreasing}
                            alt="icon"
                          />
                        </span>
                        <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                          {item.IncCount}
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:block">
            {swiperData.map((item) => (
              <div className="flex-col mb-4">
                <p className="pt-[6px] text-neutral-50 text-[16px]">
                  {item.text}
                </p>
                <div className="flex items-center pt-5 justify-between">
                  <p className="text-neutral-15 text-[12px]">{item.date}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex justify-center items-center text-center text-error-30 text-sm h-[28px] rounded-full border-[1px] border-error-30 w-[52px]">
                      {item.DecCount}
                      <Image
                        width={24}
                        height={24}
                        src={Decreasing}
                        alt="icon"
                      />
                    </span>
                    <span className="flex justify-center items-center text-center text-secondary-15 bg-secondary-100 text-sm h-[28px] rounded-full border-[1px] border-secondary-15 w-[52px]">
                      {item.IncCount}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostVisitedArticle;
