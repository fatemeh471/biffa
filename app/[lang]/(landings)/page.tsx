import Image from 'next/image';
import AnalysSwiper from '../common/components/homePage/Analyis';
import ArticleSwiper from '../common/components/homePage/ArticleSwiper';
import News from '../common/components/homePage/news';
import Weblog from '../common/components/homePage/weblog';
import { getDictionary } from '../dictionaries';
import BannerImage from '#/assets/svg/baner-trading.svg';
import HeroSection from '../common/components/homePage/heroSection';

export default async function Home({ params }: { params: { lang: string } }) {
  const dic = await getDictionary(params.lang);
  const { home } = dic;
  return (
    <>
      <HeroSection home={home} />
      <main className="w-full overflow-auto px-[64px]">
        <section>
          <h1 className="font-[700] text-[32px]">{home.mostVisited}</h1>
        </section>
        <section className="py-[60px]">
          <Image src={BannerImage} alt="icon" className="w-full my-[60px]" />
          <div className="mb-[120px]">
            <Weblog />
          </div>
          <div className="mb-[120px]">
            <News />
          </div>
          <div className="mb-[120px]">
            <AnalysSwiper />
          </div>
          <ArticleSwiper />
        </section>
      </main>
    </>
  );
}
