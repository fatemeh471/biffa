import { getDictionary } from '#/app/[lang]/dictionaries';
import ButtonTabLink from '../../components/ButtonTabLink';

async function MarketDepth({ params }) {
  const dic = await getDictionary(params.lang);
  const { buyCrypto } = dic;

  return (
    <section className="bg-neutral-0 px-4 py-5 md:px-[80px] md:py-[64px]">
      <ButtonTabLink buyCrypto={buyCrypto} />
    </section>
  );
}

export default MarketDepth;
