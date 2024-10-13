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
import CryptoSlider from './components/CryptoSlider';
import AnalyzesTabsWithSlider from '../../common/components/AnalyzesTabsWithSlider';
import CollapseComponent from '../../common/components/CollapseComponent';
import ProfileImage from '#/assets/svg/profile.svg';
import MostCoinSlider from './components/MostCoinslider';

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
          <CryptoSlider cryptoList={cryptoList} />
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
          <div className="md:px-[230px] md:mb-[24px]">
            <h4 className="text-neutral-0 font-[700] w-full mb-4 md:text-[40px] text-[28px]">
              {cryptoList.registerComment}
            </h4>
            <div className="rounded-[24px] border-[1px] border-neutral-98 p-8">
              <p className="mb-2 text-neutral-25 text-base font-[500]">
                {cryptoList.writeComment}
              </p>
              <div className="rounded-[12px] bg-neutral-100 flex flex-col justify-between relative h-[149px] border-dashed border-[1px] border-neutral-98 pb-4 pt-5 px-4">
                <textarea
                  className="mb-2 text-neutral-40 text-base font-[400] bg-transparent outline-none resize-none w-full h-[70px]"
                  placeholder={cryptoList.writeYourComment}
                  // value={comment}
                  // onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex items-end justify-end">
                  <button
                    className="py-[10px] self-left text-white font-[500] text-base rounded-[11px] bg-primary-40 px-[24px] flex items-center gap-1"
                    //   onClick={handleSend}
                    //   disabled={!comment.trim()} // Disable button if there's no comment
                  >
                    <SendOutlined
                      className="me-1 w-[20px]"
                      style={{ transform: 'rotate(-45deg)' }}
                    />
                    {cryptoList.sendYourSms}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-[230px] mb-[36px] md:mb-[96px]">
            <h4 className="text-neutral-0 font-[700] pt-8 md:pt-0 w-full mb-6 md:text-[40px] text-[28px]">
              {cryptoList.userIdea}
            </h4>
            {[1, 2, 3, 4].map(() => (
              <div className="rounded-[24px] mb-6 md:border-[1px] border-neutral-98 px-2 md:p-8">
                <section className="flex bg-neutral-100 rounded-[16px] p-4 justify-between w-full items-center">
                  <div className="grid items-center grid-flow-col gap-2">
                    <div className="row-span-3">
                      <Image
                        src={ProfileImage}
                        width={48}
                        alt={'bitfa'}
                        priority
                      />
                    </div>
                    <div className="row-span-3">
                      <p className="font-[700] text-neutral-0">
                        احمدرضا شاه محمدی
                      </p>
                      <p className="text-xs text-neutral-70">3ماه قبل</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-[9px]">
                    <div className="flex items-center gap-1">
                      <LikeOutlined className="w-[16px] text-error-40" />
                      <span className="text-[12px] text-error-40">21</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DislikeOutlined className="w-[16px] text-secondary-30" />
                      <span className="text-[12px] text-secondary-30">25</span>
                    </div>
                  </div>
                </section>
                <h5 className="text-neutral-15 font-[400] w-full mb-6 text-[14px] mt-[12px]">
                  {cryptoList.descComments}
                </h5>
                <div className="flex justify-start gap-[9px]">
                  <div className="flex items-center gap-1">
                    <SendOutlined
                      className="me-1 w-[20px]"
                      style={{ transform: 'rotate(-45deg)' }}
                    />
                    <span className="text-[12px] text-neutral-40">
                      {cryptoList.report}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CopyOutlined className="text-primary-40" />
                    <span className="text-[12px] text-primary-40">
                      {cryptoList.yourAnswer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
