import { getDictionary } from '#/app/dictionaries';
import dynamic from 'next/dynamic';
import Content from './components/Content';
import SectionCoinDetails from './components/SectionCoinDetails';
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from '#/public/static/charting_library/charting_library';
import { MostVisitedArticleList, mostVisitedNews } from '#/fakeData';
import MostVisitedArticle from '#/app/[lang]/common/components/MostVisitedArticle';
import AnalyzesTabsWithSlider from '#/app/[lang]/common/components/AnalyzesTabsWithSlider';
import CollapseComponent from '#/app/[lang]/common/components/CollapseComponent';
import RegisterComment from '#/app/[lang]/common/components/RegisterComment';
import UserComments from '#/app/[lang]/common/components/UserComments';
import ProfitableCurrencies from './components/profitableCurrencies';

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: 'AAPL',
  interval: '1D' as ResolutionString,
  library_path: '/static/charting_library/',
  locale: 'en',
  charts_storage_url: 'https://saveload.tradingview.com',
  charts_storage_api_version: '1.1',
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  fullscreen: false,
  autosize: true,
};

const TVChartContainer = dynamic(
  () =>
    import('#/app/[lang]/common/components/TradingViewChart').then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
);

const CoinPage = async ({
  params,
}: {
  params: { lang: string; slug: string };
}) => {
  const dictionary = await getDictionary(params.lang);
  const { crptoCurrencyList, home, cryptoList } = dictionary;
  const item = [
    {
      answer: crptoCurrencyList.answer,
      qustion: crptoCurrencyList.question,
    },
    {
      answer: crptoCurrencyList.answer,
      qustion: crptoCurrencyList.question,
    },
    ,
    {
      answer: crptoCurrencyList.answer,
      qustion: crptoCurrencyList.question,
    },
    {
      answer: crptoCurrencyList.answer,
      qustion: crptoCurrencyList.question,
    },
  ];
  return (
    <>
      <section className="bg-neutral-0 px-4 py-5 md:px-[80px] md:py-[64px]">
        <SectionCoinDetails crptoCurrencyList={crptoCurrencyList} />
      </section>
      <Content crptoCurrencyList={crptoCurrencyList} />
      <section className="px-4 md:px-[64px] pb-8 md:pb-[96px]">
        <TVChartContainer {...defaultWidgetProps} />
      </section>
      <section className="px-4 md:px-[64px] pb-8 md:pb-[96px]">
        <MostVisitedArticle
          data={MostVisitedArticleList}
          title={home.mostVisited}
          newsLabel={home.mostVisitedNew}
          swiperData={mostVisitedNews}
        />
      </section>
      <section className="px-4 md:px-[96px] mb-[36px] md:mb-[96px]">
        <ProfitableCurrencies crptoCurrencyList={crptoCurrencyList} />
      </section>
      <section className="px-4 md:px-[64px] pb-8 md:pb-[96px]">
        <AnalyzesTabsWithSlider home={home} />
      </section>
      <section className="px-4 md:px-[150px] mdLpb-8 md:pb-[96px]">
        <h3 className="text-[32px] font-[700] text-primary-35 text-center">
          {cryptoList.commonFAQ}
        </h3>
        <p className="text-[16px] font-[400] text-neutral-5 md:pt-3 mb-4 md:mb-[56px] text-center">
          {cryptoList.commonFAQList}
        </p>
        <CollapseComponent item={item} />
      </section>
      <section className="px-4 md:px-[230px]">
        <RegisterComment cryptoList={cryptoList} />
        <div className="pt-4">
          <UserComments cryptoList={cryptoList} />
        </div>
      </section>
    </>
  );
};

export default CoinPage;
