'use client';

import React from 'react';
import { AreaChart } from './AreaChart';
import CandleChart from './CandleChart';
import ConversionCalculator from './ConversionCalculator';
import CryptoTimeMachine from './CryptoTimeMachine';
import AboutCoin from './aboutCoin';

function SectionCoinDetails({ crptoCurrencyList, buyCrypto }: any) {
  const listCoinDetail = [
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
    { label: crptoCurrencyList.volumnDeal, value: 11231131 },
  ];
  return (
    <>
      <AboutCoin crptoCurrencyList={crptoCurrencyList} buyCrypto={buyCrypto} />
      <div className="md:border-[1px] md:border-neutral-15 rounded-[16px]">
        <AreaChart crptoCurrencyList={crptoCurrencyList} />
      </div>
      <section className="pt-6 flex flex-col md:flex-row justify-between gap-4">
        <div className="md:w-[70%]">
          <p className="font-[700] pb-6 text-center md:text-start text-neutral-100 text-[28px] md:text-[28px] ps-4">
            {crptoCurrencyList.detailCoins}
          </p>
          <div className="flex gap-3 md:gap-3 flex-wrap">
            {listCoinDetail.map((item) => (
              <div className="flex flex-col w-[48%] md:w-[19%]">
                <div className="bg-neutral-5 text-center rounded-[6px] text-neutral-100 text-[14px] py-2">
                  {item.label}
                </div>
                <div className="text-center rounded-[6px] text-neutral-100 text-[12px] pt-2">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <CandleChart crptoCurrencyList={crptoCurrencyList} />
            <CryptoTimeMachine crptoCurrencyList={crptoCurrencyList} />
          </div>
        </div>
        <ConversionCalculator crptoCurrencyList={crptoCurrencyList} />
      </section>
    </>
  );
}
export default SectionCoinDetails;
