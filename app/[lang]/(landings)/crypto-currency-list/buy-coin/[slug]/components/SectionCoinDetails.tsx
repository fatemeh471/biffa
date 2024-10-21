'use client';

import React from 'react';
import { AreaChart } from './AreaChart';
import CandleChart from './CandleChart';
import ConversionCalculator from './ConversionCalculator';
import AboutCoin from './aboutCoin';
import CalculatingProfit from './CalculatingProfit';

function SectionCoinDetails({ buyCrypto }: any) {
  const listCoinDetail = [
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
    { label: buyCrypto.volumnDeal, value: 11231131 },
  ];
  return (
    <>
      <AboutCoin buyCrypto={buyCrypto} />
      <div className="flex flex-col md:flex-row justify-between gap-1 w-full rounded-[16px]">
        <div className="!w-full">
          <AreaChart buyCrypto={buyCrypto} />
        </div>

        <ConversionCalculator buyCrypto={buyCrypto} />
      </div>
      <div className="pt-6 pb-2">
        <p className="font-[700] pb-6 text-center md:text-start text-neutral-100 text-[28px] md:text-[28px]">
          {buyCrypto.bitcoinGrowping}
        </p>
        <p className="font-[400] pb-6 md:text-start text-center text-neutral-70 text-[18px]">
          {buyCrypto.bitcoinGrowpingDiscription}
        </p>
      </div>
      <section className="pt-6 flex flex-col md:flex-row justify-between gap-4">
        <div className="md:w-[70%]">
          <p className="font-[700] pb-6 text-center md:text-start text-neutral-100 text-[28px] md:text-[28px] ps-4">
            {buyCrypto.detailCoins}
          </p>
          <div className="flex flex-wrap">
            {listCoinDetail.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2"
              >
                <div className="bg-neutral-5 text-center rounded-[6px] text-neutral-100 text-[14px] py-1">
                  {item.label}
                </div>
                <div className="text-center rounded-[6px] text-neutral-100 text-[12px] pt-1">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <CandleChart buyCrypto={buyCrypto} />
        </div>
        <div className="md:w-[30%] md:mt-[60px] bg-neutral-5 px-4 py-7 rounded-[16px]">
          <p className="text-[20px] font-[700] text-right pb-2 text-neutral-100 ">
            {buyCrypto.thevalueBitcoin}
          </p>
          {[1, 2, 3, 3, 4, 4, 4, 4, 5, 5].map((item) => (
            <div className="flex flex-col border-b-[1px] border-neutral-15">
              <div className="flex py-[20px] w-full rounded-[11px] justify-between items-center">
                <p className="text-[16px] text-neutral-100 font[500]">BTC</p>
                <p className="text-[16px] text-neutral-100 font[500]">
                  $63,493
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
        <CalculatingProfit buyCrypto={buyCrypto} />
    </>
  );
}
export default SectionCoinDetails;
