'use client';

import { useMemo, useState } from 'react';
import cx from 'classnames';

import { OwnerRequestType, UserRequestType } from '../../types/Message';
import { MessageCard } from '../MessageCard';

type MessageBoxProps = {
  ownerRequest?: OwnerRequestType[];
  userRequests?: UserRequestType[];
  className?: string;
};

type Tab = {
  value: 'received' | 'sent';
  label: string;
  items: OwnerRequestType[] | UserRequestType[];
};

type SubTabType = {
  value: 'pending' | 'accepted' | 'rejected';
  label: string;
  colorClass: string;
  hoverClass: string;
};

const getTabs = (
  ownerRequest?: OwnerRequestType[],
  userRequests?: UserRequestType[],
): Tab[] => [
  { value: 'received', label: 'Příchozí žádosti', items: ownerRequest || [] },
  ...(userRequests?.length
    ? ([
        { value: 'sent', label: 'Poslané žádosti', items: userRequests },
      ] as const)
    : []),
];

const subTabs: SubTabType[] = [
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

export const MessageBox: React.FC<MessageBoxProps> = ({
  ownerRequest,
  userRequests,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent'>('received');
  const [activeSubTab, setActiveSubTab] =
    useState<SubTabType['value']>('pending');

  const tabs = getTabs(ownerRequest, userRequests);

  const activeSubTabLabel =
    subTabs.find((tab) => tab.value === activeSubTab)?.label || '';

  const filteredItems = useMemo(() => {
    const items = activeTab === 'received' ? ownerRequest : userRequests;

    const filterByApprovalState = (
      item: UserRequestType | OwnerRequestType,
    ) => {
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
  }, [ownerRequest, userRequests, activeTab, activeSubTab]);

  if (!ownerRequest && !userRequests) {
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
          filteredItems.map((item: OwnerRequestType | UserRequestType) => (
            <MessageCard key={item.id} message={item} />
          ))
        ) : (
          <li>Žádné {activeSubTabLabel} zprávy.</li>
        )}
      </ul>
    </section>
  );
};
