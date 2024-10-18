import { getDictionary } from '#/app/dictionaries';
import {
  SendOutlined,
  LikeOutlined,
  DislikeOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import TableCryptoList from './components/tableCrptoList';
import CoinAnalyzeSlider from '../../common/components/CoinAnalyzeSlider';
import CryptoCurrencyPrice from '#/assets/svg/crypto-currency-price.png';
import CurrencyInfoSlider from './components/WhatCryptoCurrency';
import AnalyzesTabsWithSlider from '../../common/components/AnalyzesTabsWithSlider';
import CollapseComponent from '../../common/components/CollapseComponent';
import ProfileImage from '#/assets/svg/profile.svg';
import MostCoinSlider from './components/CryptoCurrencyInfo';
import RegisterComment from '../../common/components/RegisterComment';
import UserComments from '../../common/components/UserComments';

export default async function CryptoList({ params }: any) {
  const dictionary = await getDictionary(params.lang);
  const { cryptoList, home, aboutUs } = dictionary;
  const item = [
    {
      answer: aboutUs.answer,
      qustion: aboutUs.question,
    },
    {
      answer: aboutUs.answer,
      qustion: aboutUs.question,
    },
    ,
    {
      answer: aboutUs.answer,
      qustion: aboutUs.question,
    },
    {
      answer: aboutUs.answer,
      qustion: aboutUs.question,
    },
  ];
  return (
    <div className="px-4 md:px-[83px] py-[72px]">
      <MostCoinSlider cryptoList={cryptoList} />
      <section className="py-[58px]">
        <h1 className="font-[700] md:text-[40px] text-[24px] text-center md:text-right text-neutral-0 md:pb-[24px]">
          {cryptoList.currentdigitalCurrency}
        </h1>
        <div className="mb-[36px] md:mb-[96px]">
          <TableCryptoList cryptoList={cryptoList} />
        </div>
        <CoinAnalyzeSlider title={home.analysCrypto} />
        <div className="my-[36px] md:my-[96px] h-[100%] md:h-[357px] gap-4 flex flex-col md:flex-row items-start justify-between">
          <Image
            src={CryptoCurrencyPrice}
            className="w-full md:w-[50%] h-[357px]"
            alt="coin"
          />
          <CurrencyInfoSlider cryptoList={cryptoList} />
        </div>
        <div className="mb-[36px] md:mb-[96px]">
          <AnalyzesTabsWithSlider tab={false} home={home} />
        </div>
        <div className="mb-[36px] md:mb-[96px]">
          <h3 className="text-[32px] font-[700] text-primary-35 text-center">
            {cryptoList.commonFAQ}
          </h3>
          <p className="text-[16px] font-[400] text-neutral-5 md:pt-3 mb-4 md:mb-[56px] text-center">
            {cryptoList.commonFAQList}
          </p>
          <div className="md:px-[136px] mb-[36px] md:mb-[96px]">
            <CollapseComponent item={item} />
          </div>
          <section className="md:px-[230px] mb-[36px] md:mb-[96px]">
            <RegisterComment cryptoList={cryptoList} />
          </section>
          <section className="md:px-[230px] mb-[36px] md:mb-[96px]">
            <UserComments cryptoList={cryptoList} />
          </section>
        </div>
      </section>
    </div>
  );
}
