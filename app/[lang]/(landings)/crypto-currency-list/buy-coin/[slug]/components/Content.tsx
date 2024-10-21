'use client';
import { useState } from 'react';

function Content({ buyCrypto }: any) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <>
      <section className="px-4 md:px-[64px] pb-8 py-9 md:py-[96px]">
        <h1 className="font-[700] pb-4 md:pb-2 text-neutral-0 text-[20px] text-center md:text-start md:text-[28px]">
          {buyCrypto.buyAndSellCoin}
        </h1>
        <p className="font-[500] pb-8 md:pb-[96px] text-neutral-25 text-[16px]">
          {buyCrypto.buyAndSellCoinDescription}
        </p>
      </section>
    </>
  );
}
export default Content;
