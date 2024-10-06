import { getDictionary } from '#/app/dictionaries';
import Logo from '#/assets/svg/logo.svg';
import Image from 'next/image';
import AppConfig from '../constants/appConfig';
import Instagram from '#/assets/svg/instagram.svg';
import Linkedin from '#/assets/svg/linkedin.svg';
import Telegram from '#/assets/svg/telegram.svg';
import Youtube from '#/assets/svg/youtube.svg';
import Twitter from '#/assets/svg/twitter.svg';
import Button from './Button';
import SendIcon from '#/assets/svg/send.svg';

export default async function Footer({ params }: { params: { lang: string } }) {
  const dictionary = await getDictionary(params.lang);
  const { footer } = dictionary;

  const footerDetails = [
    { label: footer.phoneNumber, value: AppConfig.phoneNumber },
    { label: footer.email, value: AppConfig.email },
    { label: footer.address, value: AppConfig.city },
  ];
  const footerLinks = [
    footer.bitfa,
    footer.bitfanda,
    footer.dextreading,
    footer.learningPan,
    footer.contactUs,
  ];
  const footerAccess = [
    footer.news,
    footer.baseConcept,
    footer.whatsNft,
    footer.whatsTreading,
    footer.contactUs,
  ];
  return (
    <footer className="bg-neutral-5 pt-[48px] pb-10 px-4 lg:px-[99px] bottom-0 ">
      <div className="flex">
        <Image
          src={Logo}
          width={150}
          height={47}
          alt="Bitfa"
          className="pb-6"
        />
      </div>
      <div className="grid lg:grid-cols-3 ">
        <div className="flex flex-col">
          <span className="text-base text-neutral-100 pb-[32px]">
            {footer.title}
          </span>
          <span className="text-2xl font-semibold text-neutral-100 pb-4">
            {footer.contactInfo}
          </span>
          {footerDetails.map((item) => (
            <div className="flex flex-row justify-between">
              <span className="text-base text-neutral-100 pt-4">
                {item.label}
              </span>
              <span className="text-base text-neutral-100 pt-4">
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex w-full lg:px-6 justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-neutral-100 pb-4">
              {footer.products}
            </span>
            {footerLinks.map((item) => (
              <span className="text-base text-neutral-100 pt-4">{item}</span>
            ))}
          </div>
          <div className="flex flex-col ">
            <span className="text-2xl font-semibold text-neutral-100 pb-4">
              {footer.easyAccess}
            </span>
            {footerAccess.map((item) => (
              <span className="text-base text-neutral-100 pt-4">{item}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col ">
          <span className="text-2xl font-semibold text-neutral-100 pb-4">
            {footer.joinBitfa}
          </span>
          <span className="text-base text-neutral-100 pt-4 pb-2">
            {footer.emailEmpty}
          </span>
          <input
            className="p-4 !bg-transparent rounded-md border-[1px] border-neutral-70"
            placeholder={footer.enterEmail}
          />
          <div className="pt-5">
            <Button
              size="medium"
              startIcon={
                <Image src={SendIcon} alt="user" width={16} className="mx-1" />
              }
            >
              {footer.start}
            </Button>
          </div>

          <div className="flex flex-row gap-8 pt-5">
            {[Instagram, Linkedin, Telegram, Youtube, Twitter].map((icon) => (
              <Image src={icon} alt="social" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
