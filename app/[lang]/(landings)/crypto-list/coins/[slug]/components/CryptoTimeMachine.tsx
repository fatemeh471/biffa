'use client';
import { DownOutlined, ShoppingOutlined } from '@ant-design/icons';
import Image from 'next/image';
import CoinIcon from '#/assets/svg/coin.svg';
import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';

function CryptoTimeMachine({ crptoCurrencyList }: any) {
  const [selectedCoin, setSelectedCoin] = useState('میلادی');

  const currentlyCoin = [
    {
      label: crptoCurrencyList.currentAssets,
      img: CoinIcon,
      value: 12313,
      coinName: 'Bitcoin',
    },
    {
      label: crptoCurrencyList.efficiency,
      img: CoinIcon,
      value: 12313,
      coinName: 'Bitcoin',
    },
    {
      label: crptoCurrencyList.efficiency,
      img: CoinIcon,
      value: 12313,
      coinName: 'Bitcoin',
    },
  ];
  const items = [
    {
      label: <p onClick={() => setSelectedCoin('میلادی')}>میلادی</p>,
      key: '0',
    },
    {
      label: <p onClick={() => setSelectedCoin('شمسی')}>شمسی</p>,
      key: '2',
    },
  ];
  return (
    <>
      <section className="mt-8">
        <p className="text-neutral-100 font-[700] text-[20px] md:text-[28px]">
          {crptoCurrencyList.cryptoTimeMachine}
        </p>
        <p className="text-neutral-100 font-[400] pt-2 text-[14px]">
          {crptoCurrencyList.cryptoTimeMachineDescription}
        </p>
        <section className="flex flex-col md:flex-row justify-between item-center mt-3 gap-3">
          <div className="flex flex-col gap-2 md:w-[50%]">
            <div className="bg-neutral-5 rounded-[8px] p-5">
              <div className=" flex flex-row-reverse gap-5 items-center justify-between">
                <Dropdown menu={{ items }} trigger={['click']} className="">
                  <Space className="flex items-center gap-5">
                    <DownOutlined className="w-[10px] text-neutral-30 divide-x divide-neutral-15  " />
                    <span className="text-neutral-100 text-[32] font-[700]">
                      {selectedCoin}
                    </span>
                  </Space>
                </Dropdown>
                <p className="font-[400] text-neutral-50">
                  {crptoCurrencyList.amountLastThirty}
                </p>
              </div>
            </div>
            <div className="bg-neutral-5 rounded-[8px] p-5">
              <div className=" flex flex-row-reverse gap-5 items-center justify-between">
                <Dropdown menu={{ items }} trigger={['click']} className="">
                  <Space className="flex items-center gap-5">
                    <DownOutlined className="w-[10px] text-neutral-30 divide-x divide-neutral-15  " />
                    <span className="text-neutral-100 text-[32] font-[700]">
                      {selectedCoin}
                    </span>
                  </Space>
                </Dropdown>
                <p className="font-[400] text-neutral-50">
                  {crptoCurrencyList.amountOfCapital}
                </p>
              </div>
            </div>
            <button className="flex text-[18px] font[500] py-[19px] w-full rounded-[11px] justify-center items-center bg-primary-40 gap-2 rounded-[100%] text-white">
              <ShoppingOutlined className="text-neutral-100" />
              {crptoCurrencyList.calculationOfChanges}
            </button>
          </div>
          <div className="flex flex-col md:w-[50%] gap-2">
            {currentlyCoin.map((item) => (
              <div className="flex items-center justify-between p-4 gap-1 border-[1px] border-neutral-10 rounded-[8px]">
                <span className="text-neutral-50 text-[14] font-[400]">
                  {item.label}
                </span>
                <div className="flex items-center flex-row-reverse gap-7 divide-x divide-neutral-15">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-100 text-[16] font-[700]">
                      {item.coinName}
                    </span>
                    <Image src={CoinIcon} width={32} height={32} alt="coin" />
                  </div>
                  <span className="text-neutral-100 text-[14] font-[500] pe-7">
                    {item.value} BTC
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
export default CryptoTimeMachine;
