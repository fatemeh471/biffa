import Image from 'next/image';
import Analyzes from '../common/components/homePage/ Analyzes';
import ArticleAirDrop from '../common/components/homePage/ArticleAirDrop';
import Weblog from '../common/components/homePage/weblog';
import { getDictionary } from '../dictionaries';
import BannerImage from '#/assets/svg/baner-trading.svg';
import HeroSection from '../common/components/homePage/heroSection';
import React from 'react';
import HeaderCois from '../common/components/homePage/headerCoins';
import { MostVisitedArticleList, mostVisitedNews } from '#/fakeData';
import MostVisitedArticle from '../common/components/MostVisitedArticle';
import BreakingNews from '../common/components/BreakingNews';

export default async function Home({ params }: { params: { lang: string } }) {
  const dic = await getDictionary(params.lang);
  const { home } = dic;

  return (
    <>
      <HeaderCois />
      <HeroSection home={home} />
      <main className="w-full overflow-auto px-4 md:px-[64px]">
        <MostVisitedArticle
          title={home.mostVisited}
          swiperData={mostVisitedNews}
          data={MostVisitedArticleList}
          newsLabel={home.mostVisitedNew}
        />
        <section className="md:py-[60px]">
          <Image
            src={BannerImage}
            alt="icon"
            className=" w-full my-8 md:mb-[120px]"
          />
          <div className="mb-[120px]">
            <Weblog home={home} />
          </div>
          <div className="mb-[120px]">
            <BreakingNews home={home} />
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
