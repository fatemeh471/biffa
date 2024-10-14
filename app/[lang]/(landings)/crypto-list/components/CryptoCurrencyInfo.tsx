'use client';
import { LeftOutlined, CaretUpOutlined } from '@ant-design/icons';
import CoinIcon from '#/assets/svg/coin.svg';
import Link from 'antd/es/typography/Link';
import Image from 'next/image';
import CustomSwipper from '#/app/[lang]/common/components/CustomSwiper';

export default async function MostCoinSlider({ cryptoList }: any) {
  const list = [
    {
      heading: {
        label: cryptoList.mostPrific,
        link: '/',
      },
      body: [
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '3.12' },
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '32' },
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
      ],
    },
    {
      heading: {
        label: cryptoList.newOportunity,
        link: '/',
      },
      body: [
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '3.12' },
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '32' },
        { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
      ],
    },
    {
      heading: {
        label: cryptoList.malState,
        link: '/',
      },
      body: [
        {
          symbol: 'BTC',
          coin: cryptoList.amoutAllmarket,
          link: '/',
          value: '3.12',
        },
        {
          symbol: 'BTC',
          coin: cryptoList.transactionVolume,
          link: '/',
          value: '32',
        },
        {
          symbol: 'BTC',
          coin: cryptoList.tetherRate,
          link: '/',
          value: '133',
        },
      ],
    },
  ];
  return (
    <div className="">
      <div className="hidden md:flex gap-4">
        {list.map((i) => (
          <div className="flex-col w-full">
            <div className="flex mb-2 justify-between">
              <p className="text-neutral-10 font-[700] text-[24px]">
                {i.heading.label}
              </p>
              <div className="flex justify-between items-center gap-2 ">
                <p className="text-primary-50 text-base">{cryptoList.allSee}</p>
                <Link href={i.heading.link}>
                  <LeftOutlined className="text-primary-50 text-[10px]" />
                </Link>
              </div>
            </div>
            {i.body.map((coin) => (
              <div className="bg-neutral-99 h-[60px] flex justify-between mb-4 px-[16px] rounded-[8px]">
                <div className="flex items-center gap-2">
                  {i.heading.label !== cryptoList.malState && (
                    <Image src={CoinIcon} width={36} height={36} alt="coin" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-neutral-0 font-[500] text-[16px]">
                      {coin.coin}
                    </span>
                    {i.heading.label !== cryptoList.malState && (
                      <span className="text-neutral-30 text-[14px]">
                        {coin.symbol}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {i.heading.label !== cryptoList.malState ? (
                    <>
                      <p className="text-secondary-30">{coin.value}</p>
                      <CaretUpOutlined className="text-secondary-30 w-[10px]" />
                    </>
                  ) : (
                    <p className="text-neutral-25">{coin.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <section className="block md:hidden">
          <CustomSwipper
            data={list}
            renderSlideContent={(i: { heading: { label: string; link: string | undefined; }; body: any[]; }) => (
              <div className="flex-col w-full">
                <div className="flex mb-2 justify-between">
                  <p className="text-neutral-10 font-[700] text-[24px]">
                    {i.heading.label}
                  </p>
                  <div className="flex justify-between items-center gap-2 ">
                    <p className="text-primary-50 text-base">
                      {cryptoList.allSee}
                    </p>
                    <Link href={i.heading.link}>
                      <LeftOutlined className="text-primary-50 text-[10px]" />
                    </Link>
                  </div>
                </div>
                {i.body.map((coin: any) => (
                  <div className="bg-neutral-99 h-[60px] flex justify-between mb-4 px-[16px] rounded-[8px]">
                    <div className="flex items-center gap-2">
                      {i.heading.label !== cryptoList.malState && (
                        <Image src={CoinIcon} width={36} height={36} alt="coin" />
                      )}
                      <div className="flex flex-col">
                        <span className="text-neutral-0 font-[500] text-[16px]">
                          {coin.coin}
                        </span>
                        {i.heading.label !== cryptoList.malState && (
                          <span className="text-neutral-30 text-[14px]">
                            {coin.symbol}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {i.heading.label !== cryptoList.malState ? (
                        <>
                          <p className="text-secondary-30">{coin.value}</p>
                          <CaretUpOutlined className="text-secondary-30 w-[10px]" />
                        </>
                      ) : (
                        <p className="text-neutral-25">{coin.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
      </section>
    </div>
  );
}
