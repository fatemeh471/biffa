import { ReactNode } from 'react';

type TabContentProps = {
  id: string;
  activeTab: string;
  children: ReactNode;
};
type TabNavProps = TabContentProps & {
  setActiveTab: (id: string) => void;
  className: string
};
export function TabContent({ id, activeTab, children }: TabContentProps) {
  return activeTab === id ? (
    <div className="flex items-center justify-center py-12">
      {children}
    </div>
  ) : null;
}
export function TabNav({
  id,
  children,
  activeTab,
  setActiveTab,
  className,
}: TabNavProps) {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <li
      className={`nds-title-md-medium--medium nds-title-medium--small text-nowrap cursor-pointer text-center ${
        activeTab === id
          ? 'nds-primary-color nds-border-primary nds-border-bottom-xsmall'
          : 'nds-on-surface-variant-color'
      } ${className}`}
    >
      <div
        className="py-[14px]"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {children}
      </div>
    </li>
  );
}
