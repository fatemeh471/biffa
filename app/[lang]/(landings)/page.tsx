import Image from 'next/image';
import Analyzes from '../common/components/homePage/ Analyzes';
import ArticleAirDrop from '../common/components/homePage/ArticleAirDrop';
import News from '../common/components/homePage/news';
import Weblog from '../common/components/homePage/weblog';
import { getDictionary } from '../dictionaries';
import BannerImage from '#/assets/svg/baner-trading.svg';
import { headerCoinList } from '#/fakeData/index';
import HeroSection from '../common/components/homePage/heroSection';
import MostVisitedArticle from '../common/components/homePage/MostVisitedArticle';
import React from 'react';
import HeaderCois from '../common/components/homePage/headerCoins';

export default async function Home({ params }: { params: { lang: string } }) {
  const dic = await getDictionary(params.lang);
  const { home } = dic;

  return (
    <>
      <HeaderCois home={home} />
      <HeroSection home={home} />
      <main className="w-full overflow-auto px-4 md:px-[64px]">
        <MostVisitedArticle home={home} />
        <section className="md:py-[60px]">
          <Image src={BannerImage} alt="icon" className=" w-full my-8 md:mb-[120px]" />
          <div className="mb-[120px]">
            <Weblog home={home} />
          </div>
          <div className="mb-[120px]">
            <News home={home} />
          </div>
          <div className="mb-[120px]">
            <Analyzes home={home} />
          </div>
          <ArticleAirDrop home={home} />
        </section>
      </main>
    </>
  );
}
