'use client';
import { UpOutlined, CopyOutlined } from '@ant-design/icons';
import { Collapse, List, Space } from 'antd';
import { useState } from 'react';

function Content({ crptoCurrencyList }: any) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <>
      <section className="px-4 md:px-[64px] pb-8 py-9 md:py-[96px]">
        <h1 className="font-[700] pb-4 md:pb-2 text-neutral-0 text-[20px] text-center md:text-start md:text-[28px]">
          {crptoCurrencyList.buyAndSellCoin}
        </h1>
        <p className="font-[500] pb-8 md:pb-[96px] text-neutral-25 text-[16px]">
          {crptoCurrencyList.buyAndSellCoinDescription}
        </p>
        <h2 className="font-[700] pb-4 md:pb-2 text-neutral-0  text-[20px] text-center md:text-start md:text-[28px]">
          {crptoCurrencyList.coinName}
        </h2>
        <p className="font-[500] text-neutral-25 text-[16px]">
          {crptoCurrencyList.buyAndSellCoinDescription}
        </p>
      </section>
    </>
  );
}
export default Content;
