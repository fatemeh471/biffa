'use client';
import Image from 'next/image';
import BannerImage from '#/assets/svg/baner-hero.jpg';
import EmailIcon from '#/assets/svg/email.svg';
import CoinAnalyzeSlider from '../CoinAnalyzeSlider';

export default function HeroSection({ home }: any) {

  return (
    <>
      <section className="relative w-full h-[500px]">
        <Image
          src={BannerImage}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-start md:ps-[100px] z-10 bg-black bg-opacity-30">
          <form className=" p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-2xl font-[800] text-[54px] text-neutral-100 mb-4">
                {home.bitfa}
              </h2>
              <h2 className="text-2xl text-neutral-100 mb-6 mt-5">
                {home.lookAt}
              </h2>
            </div>
            <div className="bg-surface-dark-4 p-4 rounded">
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder={home.enterEmail}
                  className="w-full bg-surface-dark-1 border-none py-[18px] ps-10 border border-gray-300 rounded"
                />
                <span className="absolute right-3 top-4 text-gray-400">
                  <Image src={EmailIcon} alt="email" />
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-40 text-white py-2 mt-4 rounded-lg text-[18px]"
              >
                {home.start}
              </button>
            </div>
          </form>
        </div>
      </section>
      <CoinAnalyzeSlider title={home.analysCrypto} />
    </>
  );
}
