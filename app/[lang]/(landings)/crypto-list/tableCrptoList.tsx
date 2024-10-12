'use client';
import React, { useState } from 'react';
import { Table, Space } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import CoinIcon from '#/assets/svg/coin.svg';
import Image from 'next/image';
import { favoriteData, metaverseData } from '#/fakeData';

type OnChange = NonNullable<TableProps<any>['onChange']>;
type Sorts = Parameters<OnChange>[2];

const TableCryptoList: React.FC = ({ cryptoList }: any) => {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [activeButton, setActiveButton] = useState<string>('favorite');

  const getDataSource = () => {
    switch (activeButton) {
      case 'favorite':
        return favoriteData;
      case 'metaverse':
        return metaverseData;
      default:
        return [];
    }
  };

  const handleChange: OnChange = (_, __, sorter) => {
    setSortedInfo(sorter as Sorts);
  };

  // تنظیم ستون‌ها
  const columns: TableColumnsType<DataType> = [
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.weeklyChart}
        </span>
      ),
      dataIndex: 'weeklyChart',
      key: 'weeklyChart',
      sorter: (a, b) => a.weeklyChart.length - b.weeklyChart.length,
      sortOrder:
        sortedInfo.columnKey === 'weeklyChart' ? sortedInfo.order : null,
      ellipsis: true,
      render: (text: string) => <Space>-----------------------</Space>,
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.weekly}
        </span>
      ),
      dataIndex: 'weekly',
      key: 'weekly',
      sorter: (a, b) => a.weekly - b.weekly,
      sortOrder: sortedInfo.columnKey === 'weekly' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <div className="flex items-center gap-1">
            <p
              className={` ${
                value > 0 ? 'text-secondary-25' : 'text-error-50'
              } text-[14px]`}
            >
              {value}
            </p>
            {value > 0 ? (
              <CaretUpOutlined className="text-secondary-30 w-[10px]" />
            ) : (
              <CaretDownOutlined className="text-error-50 w-[10px]" />
            )}
          </div>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.daily}
        </span>
      ),
      dataIndex: 'daily',
      key: 'daily',
      sorter: (a, b) => a.daily - b.daily,
      sortOrder: sortedInfo.columnKey === 'daily' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <div className="flex items-center gap-1">
            <p
              className={` ${
                value > 0 ? 'text-secondary-25' : 'text-error-50'
              } text-[14px]`}
            >
              {value}
            </p>
            {value > 0 ? (
              <CaretUpOutlined className="text-secondary-30 w-[10px]" />
            ) : (
              <CaretDownOutlined className="text-error-50 w-[10px]" />
            )}
          </div>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.dailyDeals}
        </span>
      ),
      dataIndex: 'dailyDeals',
      key: 'dailyDeals',
      sorter: (a, b) => a.dailyDeals - b.dailyDeals,
      sortOrder:
        sortedInfo.columnKey === 'dailyDeals' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <div className="flex flex-col">
            <span className="text-neutral-20 text-[16px] font-[400]">
              {value}
            </span>
            <span className="text-neutral-60 text-[12px] font-[400]">
              میلیارد دلار
            </span>
          </div>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.marketSize}
        </span>
      ),
      dataIndex: 'marketSize',
      key: 'marketSize',
      sorter: (a, b) => a.marketSize - b.marketSize,
      sortOrder:
        sortedInfo.columnKey === 'marketSize' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <div className="flex flex-col">
            <span className="text-neutral-20 text-[16px] font-[400]">
              {value}
            </span>
            <span className="text-neutral-60 text-[12px] font-[400]">
              میلیارد دلار
            </span>
          </div>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.rialPrice}
        </span>
      ),
      dataIndex: 'rialPrice',
      key: 'rialPrice',
      sorter: (a, b) => a.rialPrice - b.rialPrice,
      sortOrder: sortedInfo.columnKey === 'rialPrice' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <span className="text-neutral-20 text-[16px] font-[400]">
            {value} ت
          </span>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.dollarPrice}
        </span>
      ),
      dataIndex: 'dollarPrice',
      key: 'dollarPrice',
      sorter: (a, b) => a.dollarPrice - b.dollarPrice,
      sortOrder:
        sortedInfo.columnKey === 'dollarPrice' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value) => {
        return (
          <span className="text-neutral-0 text-[16px] font-[700]">
            {value} ${' '}
          </span>
        );
      },
    },
    {
      title: () => (
        <span className="text-neutral-30 text-[14px] font-[400]">
          {cryptoList.coinName}
        </span>
      ),
      dataIndex: 'coinName',
      key: 'coinName',
      sorter: (a, b) => a.coinName.length - b.coinName.length,
      sortOrder: sortedInfo.columnKey === 'coinName' ? sortedInfo.order : null,
      ellipsis: true,
      render: (value, record) => {
        return (
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-end">
                <span className="text-neutral-0 font-[500] text-[16px]">
                  {record.coinName} (BTC)
                </span>
                <span className="text-neutral-30 text-[12px]">Bitcoin</span>
              </div>
              <Image src={CoinIcon} width={36} height={36} alt="coin" />
            </div>
            <span className="text-neutral-20 text-[14px] font-[500]">
              {record.key}
            </span>
          </div>
        );
      },
    },
  ];

  const tabLinks = [
    { label: cryptoList.myFavorites, id: 'favorite' },
    { label: cryptoList.metaverse, id: 'metaverse' },
    { label: cryptoList.fanTokens, id: 'fanTokens' },
    { label: cryptoList.memeCoins, id: 'memeCoins' },
    { label: cryptoList.stableCoins, id: 'stableCoins' },
  ];

  return (
    <>
      <Space className="pb-8">
        {tabLinks.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-[6px] rounded-[8px] ${
              activeButton === tab.id
                ? 'text-neutral-100 bg-primary-40'
                : 'text-neutral-0 bg-transparent'
            }`}
            onClick={() => setActiveButton(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </Space>
      <Table<DataType>
        columns={columns}
        dataSource={getDataSource()}
        pagination={false}
        onChange={handleChange}
      />
    </>
  );
};

export default TableCryptoList;
