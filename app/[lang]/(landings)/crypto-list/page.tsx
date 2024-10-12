import { getDictionary } from '#/app/dictionaries';
import { LeftOutlined, CaretUpOutlined } from '@ant-design/icons';
import Link from 'next/link';
import CoinIcon from '#/assets/svg/coin.svg';
import Image from 'next/image';
import TableCryptoList from './tableCrptoList';
import CoinAnalyzeSlider from '../../common/components/CoinAnalyzeSlider';
import CryptoCurrencyPrice from '#/assets/svg/crypto-currency-price.png';
import CryptoSlider from './CryptoSlider';

export default async function CryptoList({ params }: any) {
  const dictionary = await getDictionary(params.lang);
  const { cryptoList, home } = dictionary;
  const items = [
    { label: cryptoList.mostPrific, link: '/' },
    { label: cryptoList.newOportunity, link: '/' },
    { label: cryptoList.malState, link: '/' },
  ];
  const bestcoinList = [
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '3.12' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '32' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
    { symbol: 'BTC', coin: 'Bitcoin', link: '/', value: '133' },
  ];
  return (
    <div className="px-[83px] py-[72px]">
      <div className="grid grid-cols-3 gap-4">
        {items.map((i) => (
          <div className="flex justify-between">
            <p className="text-neutral-10 font-[700] text-[24px]">{i.label}</p>
            <div className="flex justify-between items-center gap-2 ">
              <p className="text-primary-50 text-base">{cryptoList.allSee}</p>
              <Link href={i.link}>
                <LeftOutlined className="text-primary-50 text-[10px]" />
              </Link>
            </div>
          </div>
        ))}
        {bestcoinList.map((coin) => (
          <div className="bg-neutral-99 flex justify-between py-[11px] px-[16px] rounded-[8px]">
            <div className="flex items-center gap-2">
              <Image src={CoinIcon} width={36} height={36} alt="coin" />
              <div className="flex flex-col">
                <span className="text-neutral-0 font-[500] text-[16px]">
                  {coin.coin}
                </span>
                <span className="text-neutral-30 text-[14px]">
                  {coin.symbol}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-secondary-30">{coin.value}</p>
              <CaretUpOutlined className="text-secondary-30 w-[10px]" />
            </div>
          </div>
        ))}
      </div>
      <section className="py-[58px]">
        <h1 className="font-[700] text-[40px] text-neutral-0 pb-[24px]">
          {cryptoList.currentdigitalCurrency}
        </h1>
        <div className="mb-[36px] md:mb-[96px]">
          <TableCryptoList cryptoList={cryptoList} />
        </div>
        <CoinAnalyzeSlider title={home.analysCrypto} />
        <div className="my-[36px] md:my-[96px] gap-4 flex items-start justify-between">
          <Image src={CryptoCurrencyPrice} className="w-[50%]" />
          <CryptoSlider cryptoList={cryptoList} />
        </div>
      </section>
    </div>
  );
}
