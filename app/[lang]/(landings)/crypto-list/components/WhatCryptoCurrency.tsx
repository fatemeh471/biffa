'use client';
import CustomSwipper from '#/app/[lang]/common/components/CustomSwiper';

export default function CurrencyInfoSlider({ cryptoList }: any) {
  const data = [
    { title: 'Slide 1 Title', description: 'Description for slide 1' },
    { title: 'Slide 2 Title', description: 'Description for slide 2' },
    { title: 'Slide 3 Title', description: 'Description for slide 3' },
  ];
  return (
    <div className="w-[100%] md:w-[50%] h-full flex flex-col justify-between">
      <CustomSwipper
        data={data}
        customPagination={true}
        renderSlideContent={(item) => (
          <div className="flex flex-col justify-start">
            <h2 className="font-[800] text-[28px] text-neutral-0">
              {cryptoList.whatPriceDigitalCurrency}
            </h2>
            <p className="font-[500] text-base text-neutral-25">
              {cryptoList.whatPriceDigitalCurrencyDec}
            </p>
          </div>
        )}
      />
    </div>
  );
}
