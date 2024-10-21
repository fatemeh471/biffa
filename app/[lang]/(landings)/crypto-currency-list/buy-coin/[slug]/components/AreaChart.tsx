import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import { UpOutlined, CopyOutlined, CaretUpOutlined } from '@ant-design/icons';

// داده‌های مربوط به بازه‌های زمانی مختلف
const all = [
  { time: '2018-12-22', value: 32.51 },
  { time: '2018-12-23', value: 31.11 },
  { time: '2018-12-24', value: 27.02 }, // حذف داده‌های تکراری
  { time: '2018-12-25', value: 27.32 },
  { time: '2018-12-26', value: 25.17 },
];

const AreaChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = 'rgba(30, 33, 37, 1)',
      lineColor = '#F7A01D',
      textColor = 'rgba(255, 255, 255, 1)',
      areaTopColor = '#F7A01D',
      areaBottomColor = '#212121',
      gridColor = 'rgba(61, 66, 75, 1)',
    } = {},
  } = props;

  const chartContainerRef: any = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      grid: {
        vertLines: {
          color: gridColor,
          style: 1,
        },
        horzLines: {
          color: gridColor,
          style: 1,
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 445,
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });

    // مرتب‌سازی داده‌ها بر اساس time به صورت صعودی
    const sortedData = [...data].sort((a, b) => a.time - b.time);

    if (Array.isArray(sortedData) && sortedData.length > 0) {
      newSeries.setData(sortedData);
    } else {
      console.error('No valid data provided for the chart.');
    }

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
    gridColor,
  ]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '450px' }} />
  );
};

export function AreaChart({ buyCrypto }: any) {
  const chartData = all;

  return (
    <div className="bg-neutral-5 rounded-[18px] p-5">
      <p className="font-[700] text-neutral-100 text-base self-start mb-4 md:pb-0 md:text-[22px]">
        نمودار خرید بیت‌کوین ‌BTC
      </p>
      <div className="flex justify-between w-full">
        {[1, 2].map((item) => (
          <div className="border-[1px] w-[49%] gap-2 p-4 py-2 border-neutral-15 rounded-[8px]">
            <div className="flex justify-between pb-4">
              <p className="text-neutral-100 text-[12px]">
                {buyCrypto.priceCurrentlyCoin}
              </p>
              <p className="text-neutral-100 text-[12px]">USDT</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="flex items-center gap-1">
                <p className="text-primary-40 self-end text-[15px]">123</p>
                <CaretUpOutlined className="text-primary-40 text-[10px]" />
              </div>
              <p className="text-neutral-100 self-end text-[15px]">
                $65,884,883
              </p>
            </div>
          </div>
        ))}
      </div>
      <AreaChartComponent data={chartData} />
    </div>
  );
}
