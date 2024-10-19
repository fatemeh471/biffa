'use client';
import './segment.scss';
import React, { useState } from 'react';
import { Dropdown, Segmented, Space } from 'antd';
type Align = 'start' | 'end';
import CoinIcon from '#/assets/svg/coin-logo.svg';
import { DownOutlined, ShoppingOutlined } from '@ant-design/icons';
import Image from 'next/image';

function ConversionCalculator({ crptoCurrencyList }: any) {
  const [alignValue, setAlignValue] = React.useState<Align>(
    crptoCurrencyList.buyCrypto
  ); // Fix type issue
  const [selectedCoin, setSelectedCoin] = useState('Bitcoin'); // State for selected coin

  const onChange = (key: string) => {
    console.log(key);
  };

  // const items: TabsProps['items'] = [
  //   { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  //   { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
  // ];
  const items = [
    {
      label: <p onClick={() => setSelectedCoin('Litecoin')}>Litecoin</p>, // Update state on click
      key: '0',
    },
    {
      label: (
        <a href="" onClick={() => setSelectedCoin('Tether')}>
          Tether
        </a>
      ), // Update state on click
      key: '1',
    },
    {
      label: <p onClick={() => setSelectedCoin('Ethereum')}>Ethereum</p>, // Update state on click
      key: '2',
    },
  ];
  return (
    <div className="bg-neutral-5 text-center pt-6 px-4 rounded-[6px] text-neutral-100 md:w-[30%]">
      <p className="font-[700] text-neutral-100 text-[28px] text-center">
        {crptoCurrencyList.convertCalculatorBitcoin}
      </p>
      <div className="w-full mt-6">
        <Segmented
          className="w-full"
          block
          dir="ltr"
          size="large"
          value={alignValue}
          onChange={(value) => setAlignValue(value as Align)}
          options={[crptoCurrencyList.selCrypto, crptoCurrencyList.buyCrypto]}
        />
        <p className="text-base font-[700] text-start text-neutral-100 pt-6">
          {crptoCurrencyList.youGiveAmount}
        </p>
        <div className="divide-x divide-neutral-15 py-3 mt-4 flex flex-row-reverse gap-5 items-center justify-start">
          <Dropdown menu={{ items }} trigger={['click']}>
            <div>
              <Space className="flex items-center gap-5">
                <DownOutlined className="w-[10px] text-neutral-30" />
                <div className="flex items-center gap-1">
                  <span className="text-neutral-100 text-[32] font-[700]">
                    {selectedCoin}
                  </span>
                  <Image src={CoinIcon} width={32} height={32} alt="coin" />
                </div>
              </Space>
            </div>
          </Dropdown>
          <p className="pl-5 font-[200] text-neutral-100">0.00345</p>
        </div>
        <p className="text-base font-[700] text-start text-neutral-100 pt-6">
          {crptoCurrencyList.gitveYouRecive}
        </p>
        <div className="divide-x divide-neutral-15 py-3 mt-4 flex flex-row-reverse gap-5 items-center justify-start">
          <Dropdown menu={{ items }} trigger={['click']}>
            <div>
              <Space className="flex items-center gap-5">
                <DownOutlined className="w-[10px] text-neutral-30" />
                <div className="flex items-center gap-1">
                  <span className="text-neutral-100 text-[32] font-[700]">
                    {selectedCoin}
                  </span>
                  <Image src={CoinIcon} width={32} height={32} alt="coin" />
                </div>
              </Space>
            </div>
          </Dropdown>
          <p className="pl-5 font-[200] text-neutral-100">0.00345</p>
        </div>
        <button className="flex text-[18px] font[500] py-[17px] w-full rounded-[11px] mt-6 justify-center items-center bg-primary-40 gap-2 rounded-[100%] text-white">
          <ShoppingOutlined className="text-neutral-100" />
          {crptoCurrencyList.buyCryptoCurrency}
        </button>
        <p className="text-[20px] font-[700] text-right pb-2 text-neutral-100 mt-[56px]">
          {crptoCurrencyList.thevalueBitcoin}
        </p>
        {[1, 2, 3, 3, 4, 4, 4, 4].map((item) => (
          <div className="flex flex-col border-b-[1px] border-neutral-15">
            <div className="flex py-[20px] w-full rounded-[11px] justify-between items-center">
              <p className="text-[16px] font[500]">BTC</p>
              <p className="text-[16px] font[500]">$63,493</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ConversionCalculator;
