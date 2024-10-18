'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';

const CandleChart = ({ crptoCurrencyList }: any) => {
  const chartContainerRef: any = useRef(null);
  const chartRef = useRef(null);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart: any = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 550,
      layout: {
        background: { type: 'solid' as any, color: '#1E2125' },
        textColor: 'white',
      },
      grid: {
        vertLines: {
          color: '#3D424B',
        },
        horzLines: {
          color: '#3D424B',
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    const setDataByTimeframe = (timeframe: any) => {
      let data: any = [];
      if (timeframe === 'hourly') {
        data = [
          {
            time: '2024-10-01',
            open: 104.56,
            high: 121.21,
            low: 96.65,
            close: 108.99,
          },
          {
            time: '2024-10-02',
            open: 110.17,
            high: 111.36,
            low: 82.66,
            close: 110.47,
          },
        ];
      } else if (timeframe === 'daily') {
        data = [
          {
            time: '2024-10-01',
            open: 108.64,
            high: 111.26,
            low: 99.59,
            close: 109.13,
          },
          {
            time: '2024-10-02',
            open: 108.93,
            high: 120.92,
            low: 104.32,
            close: 117.81,
          },
          {
            time: '2024-10-03',
            open: 82.72,
            high: 107.07,
            low: 76.12,
            close: 97.78,
          },
          {
            time: '2024-10-04',
            open: 115.89,
            high: 124.21,
            low: 88.55,
            close: 97.6,
          },
          {
            time: '2024-10-05',
            open: 80.94,
            high: 82.11,
            low: 77.64,
            close: 82.04,
          },
          {
            time: '2024-10-06',
            open: 113.83,
            high: 116.59,
            low: 77.41,
            close: 86.18,
          },
          {
            time: '2024-10-07',
            open: 113.58,
            high: 121.95,
            low: 109.85,
            close: 119.02,
          },
          {
            time: '2024-10-08',
            open: 83.52,
            high: 96.94,
            low: 80.53,
            close: 90.37,
          },
          {
            time: '2024-10-09',
            open: 117.71,
            high: 121.8,
            low: 92.24,
            close: 97.54,
          },
          {
            time: '2024-10-10',
            open: 93.16,
            high: 127.7,
            low: 88.29,
            close: 119.11,
          },
          {
            time: '2024-10-11',
            open: 105.08,
            high: 106.41,
            low: 95.08,
            close: 99.39,
          },
          {
            time: '2024-10-12',
            open: 87.43,
            high: 112.37,
            low: 81.17,
            close: 103.9,
          },
          {
            time: '2024-10-13',
            open: 112.93,
            high: 118.19,
            low: 104.0,
            close: 104.15,
          },
          {
            time: '2024-10-14',
            open: 110.57,
            high: 118.28,
            low: 80.16,
            close: 84.52,
          },
          {
            time: '2024-10-15',
            open: 104.57,
            high: 106.46,
            low: 95.28,
            close: 104.27,
          },
          {
            time: '2024-10-16',
            open: 88.54,
            high: 108.15,
            low: 82.56,
            close: 103.19,
          },
          {
            time: '2024-10-17',
            open: 115.48,
            high: 118.69,
            low: 105.15,
            close: 107.1,
          },
          {
            time: '2024-10-18',
            open: 103.4,
            high: 104.76,
            low: 101.76,
            close: 104.02,
          },
          {
            time: '2024-10-19',
            open: 84.88,
            high: 98.93,
            low: 76.92,
            close: 96.47,
          },
        ];
      } else if (timeframe === 'weekly') {
        data = [
          {
            time: '2024-09-29',
            open: 104.56,
            high: 121.21,
            low: 96.65,
            close: 108.99,
          },
          {
            time: '2024-10-06',
            open: 110.17,
            high: 111.36,
            low: 82.66,
            close: 110.47,
          },
          {
            time: '2024-10-13',
            open: 105.03,
            high: 109.2,
            low: 82.3,
            close: 90.62,
          },
        ];
      } else if (timeframe === 'monthly') {
        data = [
          {
            time: '2024-09-12',
            open: 104.56,
            high: 121.21,
            low: 96.65,
            close: 108.99,
          },
          {
            time: '2024-10-10',
            open: 110.17,
            high: 111.36,
            low: 82.66,
            close: 110.47,
          },
        ];
      }

      candlestickSeries.setData(data);
    };

    setDataByTimeframe(timeframe);

    setDataByTimeframe(timeframe);

    return () => chart.remove();
  }, [timeframe]);

  return (
    <div className="border-[1px] border-neutral-20 mt-6 rounded-[16px]">
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 pt-6">
        <p className="font-[700] text-neutral-100 text-base self-start pb-4 md:pb-0 md:text-[28px] ps-4">
          {crptoCurrencyList.viewCurrentPriceCoins}
        </p>
        <div className="flex items-center gap-6 justify-end pe-12">
          <button
            className={`bg-transparent border-none ${
              timeframe === 'hourly' ? 'text-primary-40' : 'text-neutral-100'
            }`}
            onClick={() => setTimeframe('hourly')}
          >
            {crptoCurrencyList.hourly}
          </button>
          <button
            className={`bg-transparent border-none ${
              timeframe === 'daily' ? 'text-primary-40' : 'text-neutral-100'
            }`}
            onClick={() => setTimeframe('daily')}
          >
            {crptoCurrencyList.daily}
          </button>
          <button
            className={`bg-transparent border-none ${
              timeframe === 'weekly' ? 'text-primary-40' : 'text-neutral-100'
            }`}
            onClick={() => setTimeframe('weekly')}
          >
            {crptoCurrencyList.weekly}
          </button>
          <button
            className={`bg-transparent border-none ${
              timeframe === 'monthly' ? 'text-primary-40' : 'text-neutral-100'
            }`}
            onClick={() => setTimeframe('monthly')}
          >
            {crptoCurrencyList.monthly}
          </button>
        </div>
      </div>
      <div ref={chartContainerRef} />
    </div>
  );
};

export default CandleChart;
