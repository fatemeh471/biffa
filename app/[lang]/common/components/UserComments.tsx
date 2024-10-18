import {
  SendOutlined,
  LikeOutlined,
  DislikeOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import ProfileImage from '#/assets/svg/profile.svg';

export default function UserComments({ cryptoList }: any) {
  return (
    <div>
      <h4 className="text-neutral-0 font-[700] pt-8 md:pt-0 w-full mb-6 md:text-[40px] text-[28px]">
        {cryptoList.userIdea}
      </h4>
      {[1, 2, 3, 4].map(() => (
        <div className="rounded-[24px] mb-6 md:border-[1px] border-neutral-98 px-2 md:p-8">
          <section className="flex bg-neutral-100 rounded-[16px] p-4 justify-between w-full items-center">
            <div className="grid items-center grid-flow-col gap-2">
              <div className="row-span-3">
                <Image src={ProfileImage} width={48} alt={'bitfa'} priority />
              </div>
              <div className="row-span-3">
                <p className="font-[700] text-neutral-0">احمدرضا شاه محمدی</p>
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
  );
}
