'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
type Theme = 'dark' | 'light';
type Props = {
  theme: Theme;
};

export const ThemeSwitcher: FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toogleTheme = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark');
    if (root.classList.contains('dark')) {
      setTheme('dark');
      document.cookie = `theme=${'dark'}`;
    } else {
      setTheme('light');
      document.cookie = `theme=${'light'}`;
    }
  };

  return (
    <button onClick={toogleTheme} className="p-1">
      {_theme == 'dark' ? (
        <p className="text-primary-40">Dark</p>
      ) : (
        <p className="text-primary-40">Light</p>
      )}
    </button>
  );
};
