'use client';

import Logo from '#/assets/svg/logo-dark.svg';
import Search from '#/assets/svg/search.svg';
import Menu from '#/assets/svg/menu.svg';
import Image from 'next/image';
import UserIcon from '#/assets/svg/user.svg';
import Button from './Button';

const Header = ({ header }) => {
  return (
    <>
      <header className="hidden lg:flex justify-between items-center px-[66px] py-[18px]">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={150}
            height={47}
            alt="Bitfa"
            className="me-[56px]"
          />
          <nav className="flex gap-6">
            <span className="text-primary font-medium fs-[20px]">
              {header.learningArticle}
            </span>
            <span className="text-primary font-medium fs-[20px]">
              {header.cryptoAnalys}
            </span>
            <span className="text-primary font-medium fs-[20px]">
              {header.bitfaAcademi}
            </span>
            <span className="text-primary font-medium fs-[20px]">
              {header.bitfanda}
            </span>
            <span className="text-primary font-medium fs-[20px]">
              {header.learningStart}
            </span>
          </nav>
        </div>
        <nav className="flex flex-row justify-end gap-4">
          <div className='relative'>
            <input
              className="py-[10px] px-[35px] bg-neutral-100 hidden xl:flex rounded-lg px-2"
              placeholder={header.search}
            />
            <span className="absolute right-3 top-3git  text-gray-400">
              <Image src={Search} alt="email" />
            </span>
          </div>
          <Button
            size="medium"
            startIcon={
              <Image src={UserIcon} alt="user" width={16} className="mx-1" />
            }
          >
            {header.userAcount}
          </Button>

          <Image
            src={Search}
            width={24}
            height={24}
            alt="Bitfa"
            className="flex xl:hidden"
          />
        </nav>
      </header>
      <nav className="flex lg:hidden justify-between items-center w-full p-4">
        <div className="flex items-center gap-2">
          <Image src={Menu} width={24} height={24} alt="Bitfa" />
          <Image src={Search} width={24} height={24} alt="Bitfa" />
        </div>
        <Image src={Logo} width={60} height={20} alt="Bitfa" />
      </nav>
    </>
  );
};

export default Header;
