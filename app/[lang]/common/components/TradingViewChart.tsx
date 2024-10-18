'use client';
import { useEffect, useRef } from 'react';
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from '#/public/static/charting_library';
const mockBars = [
  {
    time: new Date('2023-10-10').getTime(), // باید به صورت تایم‌استمپ باشد
    low: 170,
    high: 175,
    open: 172,
    close: 174,
    volume: 1000,
  },
  {
    time: new Date('2023-10-11').getTime(),
    low: 173,
    high: 178,
    open: 174,
    close: 176,
    volume: 1200,
  },
  {
    time: new Date('2023-10-12').getTime(),
    low: 175,
    high: 180,
    open: 176,
    close: 179,
    volume: 1500,
  },
  {
    time: new Date('2023-10-13').getTime(),
    low: 178,
    high: 183,
    open: 179,
    close: 182,
    volume: 1100,
  },
];

const mockDatafeed = {
  onReady: (callback: any) => {
    setTimeout(
      () => callback({ supported_resolutions: ['1D', '1W', '1M'] }),
      0
    );
  },
  searchSymbols: (
    userInput: string,
    exchange: string,
    symbolType: string,
    onResultReadyCallback: (symbols: any) => void
  ) => {},
  resolveSymbol: (
    symbolName: string,
    onSymbolResolvedCallback: (symbolInfo: any) => void,
    onResolveErrorCallback: (error: any) => void
  ) => {
    setTimeout(() => {
      onSymbolResolvedCallback({
        name: 'AAPL',
        ticker: 'AAPL',
        description: 'Apple Inc.',
        type: 'stock',
        session: '0930-1600',
        timezone: 'America/New_York',
        exchange: 'NASDAQ',
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        has_no_volume: false,
        supported_resolutions: ['1D', '1W', '1M'],
      });
    }, 0);
  },
  getBars: (
    symbolInfo: any,
    resolution: any,
    periodParams: any,
    onHistoryCallback: (bars: any, meta: { noData: boolean }) => void,
    onErrorCallback: (error: any) => void
  ) => {
    // Mock data for candlesticks
    const mockBars = [
      {
        time: new Date('2023-10-10').getTime(),
        low: 170,
        high: 175,
        open: 172,
        close: 174,
        volume: 1000,
      },
      {
        time: new Date('2023-10-11').getTime(),
        low: 173,
        high: 178,
        open: 174,
        close: 176,
        volume: 1200,
      },
      {
        time: new Date('2023-10-12').getTime(),
        low: 175,
        high: 180,
        open: 176,
        close: 179,
        volume: 1500,
      },
      {
        time: new Date('2023-10-13').getTime(),
        low: 178,
        high: 183,
        open: 179,
        close: 182,
        volume: 1100,
      },
    ];

    // Simulate loading data by periodParams
    if (mockBars.length) {
      onHistoryCallback(mockBars, { noData: false });
    } else {
      onHistoryCallback([], { noData: true });
    }
  },
  subscribeBars: (
    symbolInfo: any,
    resolution: any,
    onRealtimeCallback: any,
    subscribeUID: string,
    onResetCacheNeededCallback: any
  ) => {
    // Simulate real-time updates if needed
  },
  unsubscribeBars: (subscriberUID: string) => {},
};

export const TVChartContainer = (
  props: Partial<ChartingLibraryWidgetOptions>
) => {
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.symbol,
      datafeed: mockDatafeed, // Use the mock datafeed
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
    };

    const tvWidget = new widget(widgetOptions);

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();
        button.setAttribute('title', 'Click to show a notification popup');
        button.classList.add('apply-common-tooltip');
        button.addEventListener('click', () =>
          tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'TradingView Charting Library API works correctly',
            callback: () => {
              console.log('Noticed!');
            },
          })
        );

        button.innerHTML = 'Check API';
      });
    });

    return () => {
      tvWidget.remove();
    };
  }, [props]);

  return (
    <>
      <div ref={chartContainerRef} className="w-full h-[500px]" />
    </>
  );
};
