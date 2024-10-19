import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';

// داده‌های مربوط به بازه‌های زمانی مختلف
const dayData = [
  { time: '2018-12-22', value: 32.51 },
  { time: '2018-12-23', value: 31.11 },
  { time: '2018-12-24', value: 27.02 }, // حذف داده‌های تکراری
  { time: '2018-12-25', value: 27.32 },
  { time: '2018-12-26', value: 25.17 },
];

const weekData = [
  { time: '2018-12-22', value: 30.51 },
  { time: '2018-12-23', value: 32.11 },
  { time: '2018-12-24', value: 33.02 },
  { time: '2018-12-25', value: 35.32 },
  { time: '2018-12-26', value: 36.17 },
];

const monthData = [
  { time: '2018-12-01', value: 28.51 },
  { time: '2018-12-10', value: 29.11 },
  { time: '2018-12-15', value: 27.02 },
  { time: '2018-12-20', value: 28.32 },
  { time: '2018-12-25', value: 30.17 },
];

const yearData = [
  { time: '2018-01-01', value: 20.51 },
  { time: '2018-03-01', value: 22.11 },
  { time: '2018-06-01', value: 23.02 },
  { time: '2018-09-01', value: 24.32 },
  { time: '2018-12-01', value: 25.17 },
];
const seriesData = new Map([
  ['1D', dayData],
  ['1W', weekData],
  ['1M', monthData],
  ['1Y', yearData],
]);

const AreaChartComponent = (props:any) => {
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

  const chartContainerRef:any = useRef(null);

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
    <div ref={chartContainerRef} style={{ width: '100%', height: '445px' }} />
  );
};

export function AreaChart({ crptoCurrencyList }: any) {
  const [interval, setInterval] = useState('1D');
  const chartData = seriesData.get(interval);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 pt-6">
        <p className="font-[700] text-neutral-100 text-base self-start pb-4 md:pb-0 md:text-[28px] ps-4">
          {crptoCurrencyList.chartTechnical}
        </p>
        <div className="flex items-center gap-6 justify-end pe-12">
          {['1D', '1W', '1M', '1Y'].map((intervalLabel) => (
            <button
              key={intervalLabel}
              onClick={() => setInterval(intervalLabel)}
              className={`bg-transparent border-none ${
                interval === intervalLabel
                  ? 'text-primary-40'
                  : 'text-neutral-100'
              }`}
            >
              {intervalLabel === '1D' && 'ساعتی'}
              {intervalLabel === '1W' && 'هفتگی'}
              {intervalLabel === '1M' && 'ماهانه'}
              {intervalLabel === '1Y' && 'سالانه'}
            </button>
          ))}
        </div>
      </div>
      <AreaChartComponent data={chartData} />
    </div>
  );
}
