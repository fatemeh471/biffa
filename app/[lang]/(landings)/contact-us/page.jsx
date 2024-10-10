import { getDictionary } from '../../dictionaries';
import MostVisitedArticle from '../../common/components/MostVisitedArticle';
import { MostVisitedArticleList, mostVisitedNews } from '#/fakeData';
import BreakingNews from '../../common/components/BreakingNews';
import ContactPhone from '#/assets/svg/contact-us-phone.svg';
import TelegrammIcon from '#/assets/svg/Telegram.svg';
import TwitterIcon from '#/assets/svg/Twitter.svg';
import InstagramIcon from '#/assets/svg/Instagram.svg';
import GoogleIcon from '#/assets/svg/Google.svg';
import YouTubeIcon from '#/assets/svg/YouTube.svg';
import FacebookIcon from '#/assets/svg/Facebook.svg';
import Image from 'next/image';

export default async function ContactUs({ params }) {
  const dictionary = await getDictionary(params.lang);
  const { contactUs, home } = dictionary;
  const socialIconList = [
    TelegrammIcon,
    TwitterIcon,
    InstagramIcon,
    GoogleIcon,
    FacebookIcon,
    YouTubeIcon,
  ];
  return (
    <div className="px-4 md:px-[144px] flex-col pt-8 md:pt-[56px] ">
      <div className=" flex flex-col md:flex-row justify-between  gap-2 md:gap-[90px]">
        <div className="flex flex-col w-full">
          <h3 className="font-[700] pb-[6px] md:pb-4 text-neutral-0 text-6 md:text-[40px]">
            {contactUs.contactUs}
          </h3>
          <span className="font-[400] text-neutral-25 text-[12px] md:text-[16px] pt-[6px] md:pt-4 pb-[10px] md:pb-6">
            {contactUs.contactWithus}
          </span>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row  w-full gap-4">
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[14px] font-[500] text-neutral-25">
                  {contactUs.lastName}
                </label>
                <input
                  className="py-[20px] bg-neutral-100 rounded-[12px] px-4"
                  placeholder={contactUs.phoneOrEmail}
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label className="text-[14px] font-[500] text-neutral-25">
                  {contactUs.email}
                </label>
                <input
                  className="py-[20px] bg-neutral-100 rounded-[12px] px-4"
                  placeholder={contactUs.enterPersian}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label className="text-[14px] font-[500] text-neutral-25">
                {contactUs.text}
              </label>
              <textarea
                className="py-[20px] bg-neutral-100 rounded-[12px] px-4"
                rows={10}
                cols={10}
                placeholder={contactUs.enterText}
              />
            </div>
            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="bg-primary-40 w-full md:w-[450px] text-neutral-100 font-[600] py-3 rounded-[11px] text-[16px]"
              >
                {contactUs.registerContact}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full justify-end flex flex-col items-center">
          <Image src={ContactPhone} />
          <div className="flex flex-col mt-[35px] items-center justify-center">
            <div className="flex gap-1 md:gap-6">
              {socialIconList.map((social) => (
                <Image src={social} />
              ))}
            </div>
            <p className="text-center text-[18px] text-neutral-25 text-center md:w-[350px] pt-2">
              {contactUs.contactUsDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-[70px]" />
      <MostVisitedArticle
        title={contactUs.mostVisited}
        swiperData={mostVisitedNews}
        data={MostVisitedArticleList}
        newsLabel={contactUs.mostVisitedNew}
      />
      <div className="py-8 md:py-[70px]" />
      <BreakingNews home={home} />
      <div className="py-8 md:py-[70px]" />
    </div>
  );
}
