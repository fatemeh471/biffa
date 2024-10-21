'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

function ButtonTabLink({ buyCrypto }: any) {
  const pathName = usePathname();
  const params = useParams();
  const tabLinks = [
    {
      label: buyCrypto.bitcoin,
      link: `/${params.lang}/crypto-currency-list/coins/${params.slug}`,
    },
    {
      label: buyCrypto.buyBitcoin,
      link: `/${params.lang}/crypto-currency-list/buy-coin/${params.slug}`,
    },
    {
      label: buyCrypto.deepMarket,
      link: `/${params.lang}/crypto-currency-list/market-depth/${params.slug}`,
    },
    { label: buyCrypto.markets, link: '' },
    { label: buyCrypto.fandamental, link: '' },
    {
      label: buyCrypto.ExtractionDevices,
      link: '',
    },
    {
      label: buyCrypto.profitabilityMining,
      link: '',
    },
    { label: buyCrypto.newsArticles, id: 'newsArticles', link: '' },
  ];
  return (
    <>
      <div className="flex justify-between overflow-x-auto gap-4 md:gap-auto pt-4 pb-5">
        {tabLinks.map((tab) => (
          <Link href={tab.link} className="w-full">
            <button
              key={tab.id}
              className={`py-[6px] px-5 md:px-0 w-full text-center font-[700] text-base text-nowrap h-[48px] rounded-[12px]  ${
                pathName === tab.link
                  ? 'text-neutral-100 bg-primary-40'
                  : 'border-[1px] border-neutral-40 text-neutral-100  bg-transparent'
              }`}
            >
              {tab.label}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
export default ButtonTabLink;
