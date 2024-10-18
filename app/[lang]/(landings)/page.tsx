import Image from 'next/image';
import Analyzes from '../common/components/AnalyzesTabsWithSlider';
import ArticleAirDrop from './homePage/ArticleAirDrop';
import Weblog from './homePage/weblog';
import { getDictionary } from '../dictionaries';
import BannerImage from '#/assets/svg/baner-trading.svg';
import HeroSection from './homePage/heroSection';
import React from 'react';
import HeaderCois from './homePage/HeroCoinListSlider';
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
          newsLabel={home.mostVisitedNew}
          swiperData={mostVisitedNews}
          data={MostVisitedArticleList}
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
            <Analyzes home={home} tab={true} />
          </div>
          <ArticleAirDrop home={home} />
        </section>
      </main>
    </>
  );
}
