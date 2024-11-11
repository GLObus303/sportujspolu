'use client';

import { useMemo, useState } from 'react';
import cx from 'classnames';

import { Message } from '../../types/Message';
import { MessageCard } from '../MessageCard';

type MessageBoxProps = {
  messages?: Message[];
  requests?: Message[];
  className?: string;
};

const tabs: { value: 'received' | 'sent'; label: string }[] = [
  { value: 'received', label: 'Příchozí žádosti' },
  { value: 'sent', label: 'Poslané žádosti' },
];

const subTabs: {
  value: 'pending' | 'accepted' | 'rejected';
  label: string;
  colorClass: string;
  hoverClass: string;
}[] = [
  {
    value: 'pending',
    label: 'nevyřízené',
    colorClass: 'text-mandarin',
    hoverClass: 'hover:text-mandarin',
  },
  {
    value: 'accepted',
    label: 'schválené',
    colorClass: 'text-primary',
    hoverClass: 'hover:text-primary',
  },
  {
    value: 'rejected',
    label: 'zamítnuté',
    colorClass: 'text-secondary',
    hoverClass: 'hover:text-secondary',
  },
];

export const MessageBox = ({
  messages,
  requests,
  className,
}: MessageBoxProps) => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent'>('received');
  const [activeSubTab, setActiveSubTab] = useState<
    'pending' | 'accepted' | 'rejected'
  >('pending');

  const activeSubTabLabel =
    subTabs.find((tab) => tab.value === activeSubTab)?.label || '';

  const filteredItems = useMemo(() => {
    const items = activeTab === 'received' ? messages : requests;

    const filterByApprovalState = (item: Message) => {
      if (activeSubTab === 'pending') {
        return item.approved === null;
      }
      if (activeSubTab === 'accepted') {
        return item.approved === true;
      }
      if (activeSubTab === 'rejected') {
        return item.approved === false;
      }

      return true;
    };

    return items ? items.filter(filterByApprovalState) : [];
  }, [messages, requests, activeTab, activeSubTab]);

  if (!messages && !requests) {
    return null;
  }

  return (
    <section className={cx('w-full', className)}>
      <div className="flex gap-10 w-full">
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            className={cx('hover:text-primary', {
              underline: activeTab === value,
            })}
            onClick={() => setActiveTab(value)}
          >
            <h2 className="text-xl font-medium leading-normal md:text-lg lg:text-xl xl:text-2xl">
              {label}
            </h2>
          </button>
        ))}
      </div>

      <div className="flex gap-5 mt-5 w-full">
        {subTabs.map(({ value, label, colorClass, hoverClass }) => (
          <button
            key={value}
            className={cx(hoverClass, {
              [colorClass]: activeSubTab === value,
            })}
            onClick={() => setActiveSubTab(value)}
          >
            <h3 className="text-center font-medium leading-normal lg:text-start md:text-lg">
              {label}
            </h3>
          </button>
        ))}
      </div>

      <ul className="mt-10 space-y-5 w-full">
        {filteredItems.length > 0 ? (
          filteredItems.map((item: Message) => (
            <MessageCard key={item.id} message={item} />
          ))
        ) : (
          <li>Žádné {activeSubTabLabel} zprávy.</li>
        )}
      </ul>
    </section>
  );
};
