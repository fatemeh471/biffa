'use client';

import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Flex, Progress, Space } from 'antd';
import CoinIcon from '#/assets/svg/coin-logo.svg';
import Image from 'next/image';

const items: MenuProps['items'] = [
  {
    label: <p>لایت کون</p>,
    key: '0',
  },
  {
    label: <a href="">تتر</a>,
    key: '1',
  },
  {
    label: '3اتریوم',
    key: '3',
  },
];

function AboutCoin({ crptoCurrencyList }: any) {
  const [activeButton, setActiveButton] = useState<string>('bitcoin');

  const tabLinks = [
    { label: crptoCurrencyList.bitcoin, id: 'bitcoin' },
    { label: crptoCurrencyList.buyBitcoin, id: 'buyBitcoin' },
    { label: crptoCurrencyList.deepMarket, id: 'deepMarket' },
    { label: crptoCurrencyList.markets, id: 'markets' },
    { label: crptoCurrencyList.fandamental, id: 'fandamental' },
    { label: crptoCurrencyList.ExtractionDevices, id: 'ExtractionDevices' },
    { label: crptoCurrencyList.profitabilityMining, id: 'profitabilityMining' },
    { label: crptoCurrencyList.newsArticles, id: 'newsArticles' },
  ];
  return (
    <>
      <h1 className="font-[700] pb-4 text-center text-neutral-100 text-[24px] md:text-[44px]">
        {crptoCurrencyList.viewCurrentPrice}
      </h1>
      <p className="font-[700] pb-2 text-neutral-100 text-[20px] md:text-[28px]">
        {crptoCurrencyList.aboutBitcoin}
      </p>
      <p className="font-[400] text-neutral-95 text-[14px] md:text-[18px]">
        {crptoCurrencyList.aboutBitcoinDescription}
      </p>
      <div className="rounded-[16px] bg-neutral-5 my-4 py-[16px] px-2 md:px-3 gap-2 md:gap-10 grid grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            className="md:w-[200px]"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="flex items-center gap-1 md:gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src={CoinIcon}
                    width={36}
                    className="w-[20px] md:w-[36px]"
                    height={36}
                    alt="coin"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-neutral-100 text-[12px] md:text-[32] font-[700]">
                        بیت کوین
                      </span>
                      <span className="text-neutral-70 text-[12px] md:text-[24] font-[700]">
                        (BTC)
                      </span>
                    </div>
                    <span className="text-neutral-30 text-[14px]">Bitcoin</span>
                  </div>
                </div>
                <DownOutlined className="w-[40px] text-neutral-30" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex flex-col md:col-span-1 md:items-start items-end">
          <span className="text-neutral-100 text-[12px] md:text-[22] font-[700]">
            $73,002.14
          </span>
          <span className="text-neutral-70 text-[10px] md:text-[18] font-[500]">
            ۲,۳۷۸,۹۹۸,۰۰۰ تومان
          </span>
        </div>
        <div className="flex items-center justify-center gap-12  col-span-2">
          <div className="flex flex-col">
            <span className="text-neutral-99 text-[10px] md:text-base font-[500]">
              بالاترین قیمت
            </span>
            <span className="text-neutral-99 text-[10px] md:text-base font-[700]">
              ۲,۴۷۸,۲۶۱,۱۲۰ تومان
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-99 text-[10px] md:text-[12px] font-[500]">
              قیمت فعلی: ۲,۳۷۶,۲۶۱,۱۲۰ تومان
            </span>
            <Flex vertical gap="small">
              <Progress
                type="line"
                percent={10}
                trailColor="#444B55"
                strokeColor="#F7A01D"
                size={'small'}
              />
            </Flex>
          </div>
          <div className="flex flex-col pe-6">
            <span className="text-neutral-99 text-[10px] md:text-base font-[400]">
              کمترین قیمت
            </span>
            <span className="text-neutral-99 text-[10px] md:text-base font-[700]">
              ۲,۴۷۸,۲۶۱,۱۲۰ تومان
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between overflow-x-auto gap-4 md:gap-auto pt-4 pb-5">
        {tabLinks.map((tab) => (
          <button
            key={tab.id}
            className={`py-[6px] px-5 md:px-0 w-full text-center font-[700] text-base text-nowrap h-[48px] rounded-[12px]  ${
              activeButton === tab.id
                ? 'text-neutral-100 bg-primary-40'
                : 'border-[1px] border-neutral-40 text-neutral-100  bg-transparent'
            }`}
            onClick={() => setActiveButton(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
export default AboutCoin;
