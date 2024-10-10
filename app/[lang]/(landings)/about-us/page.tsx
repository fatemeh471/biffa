import Image from 'next/image';
import { getDictionary } from '../../dictionaries';
import AboutUsImage from '#/assets/svg/about-us.svg';
import AboutUsMobileImage from '#/assets/svg/mobile-hero-about-us.svg';
import MostVisitedArticle from '../../common/components/MostVisitedArticle';
import { MostVisitedArticleList, mostVisitedNews } from '#/fakeData';
import BreakingNews from '../../common/components/BreakingNews';
import CollapseComponent from '../../common/components/CollapseComponent';

export default async function AboutUs({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang);
  const { aboutUs, home } = dictionary;
  const aboutUsList = [
    { title: aboutUs.aboutBitfa, text: aboutUs.aboutBitfaDiscription },
    { title: aboutUs.vision, text: aboutUs.aboutBitfaDiscription },
    { title: aboutUs.mission, text: aboutUs.aboutBitfaDiscription },
    { title: aboutUs.achievements, text: aboutUs.aboutBitfaDiscription },
  ];
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
    <div className="px-4 md:px-[144px] flex-col md:pt-[56px] ">
      <div className="md:border-[1px] md:rounded-[24px] md:p-8 md:border-neutral-98">
        <div className="relative mb-8">
          <Image
            src={AboutUsImage}
            alt="icon"
            className="w-full hidden md:block"
          />
          <Image
            src={AboutUsMobileImage}
            alt="icon"
            className="w-full block md:hidden"
          />
          <div className="absolute flex flex-col bottom-3 md:bottom-8 m rounded-[24px] p-6 md:mx-8 mx-[10px] justify-start z-10 bg-black bg-opacity-30">
            <span className="text-[20px] text-neutral-100 font-[700] pb-1">
              {aboutUs.title}
            </span>
            <span className="text-neutral-100 font-[300] md:font-[400] text-[12px] md:text-[13px]">
              {aboutUs.discription}
            </span>
          </div>
        </div>
        {aboutUsList.map((item) => (
          <div key={item.title} className="mb-8">
            <p className="text-neutral-10 font-[700] text-[24px]">
              {item.title}
            </p>
            <p className="text-neutral-25 font-[400] text-[16px]">
              {item.text}
            </p>
          </div>
        ))}

        <CollapseComponent item={item} />
      </div>

      <MostVisitedArticle
        title={aboutUs.mostVisited}
        swiperData={mostVisitedNews}
        data={MostVisitedArticleList}
        newsLabel={aboutUs.mostVisitedNew}
      />
      <div className="py-10" />
      <BreakingNews home={home} />
      <div className="py-14" />
    </div>
  );
}
