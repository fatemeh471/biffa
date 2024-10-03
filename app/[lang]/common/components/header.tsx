import { getDictionary } from "#/app/dictionaries";
import Logo from '#/assets/svg/logo-dark.svg'
import Image from "next/image";
import Button from "./Button";

export default async function Header({params}) {
    const dictionary = await getDictionary(params.lang);
  const {header} = dictionary;
  return (
    <header className="flex justify-between items-center px-[66px] py-[18px] shadow-md">
        <div className="flex items-center">
        <Image
        src={Logo}
        width={150}
        height={47}
        alt="Bitfa"
        className='me-[56px]'
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
      <nav className="flex flex-row justify-end">
        <input
        className='p-[6px] bg-neutral-100 rounded-md px-2'
        placeholder={header.search}
        />
        <Button color="primary">
          lkjkl
        </Button>
      </nav>
    </header>
  );
}
