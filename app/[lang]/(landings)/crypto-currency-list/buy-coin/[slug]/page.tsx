import { getDictionary } from '#/app/dictionaries';

const BuyCoinPage = async ({
  params,
}: {
  params: { lang: string; slug: string };
}) => {
  const dictionary = await getDictionary(params.lang);
  const { buyCripto } = dictionary;
  return (
    <section className="bg-neutral-0 flex flex-col justify-center items-center px-4 py-5 md:px-[80px] md:py-[64px]">
      <h1 className="text-[44px] font-[700] text-neutral-100">خرید بیت کوین</h1>
      <span className="text-neutral-99 text-[18px] pt-[17px]">
        {buyCripto.buyCheapSpotPrice}
        <span className="text-neutral-70 text-[18px] pt-[17px]">
          Buy Bitcoin (BTC)
        </span>
      </span>
    </section>
  );
};

export default BuyCoinPage;
