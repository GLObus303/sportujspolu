import { useRef } from 'react';
import cx from 'classnames';

import { SanitizedHTML } from '../SanitizedHTML';
import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';

type FaqItemProps = {
  question: any;
  openIndex: number | null;
  handleToggle: (index: number) => void;
  index: number;
};

export const FaqItem = ({
  question,
  openIndex,
  handleToggle,
  index,
}: FaqItemProps) => {
  const isOpen = openIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-low-contrast">
      <dt>
        <button
          onClick={() => handleToggle(index)}
          aria-label={isOpen ? 'Zavřít' : 'Otevřít'}
          aria-expanded={isOpen}
          aria-controls={`faq-${index}`}
          className={cx(
            'w-full text-left text-xl font-medium py-6 flex justify-between items-center',
            index === 0 && 'pt-0',
          )}
        >
          <p className="max-w-screen-md">
            <span className="text-2xl pr-2 font-black text-pistachio [-webkit-text-stroke:1px_black]">
              {index + 1}.
            </span>{' '}
            {question.title}
          </p>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </button>
      </dt>
      <dd
        ref={contentRef}
        id={`faq-${index}`}
        aria-hidden={!isOpen}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-w-screen-md"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 0}px`
            : '0px',
        }}
      >
        <SanitizedHTML
          htmlContent={question.description}
          className="text-xl pb-6 font-light"
        />
      </dd>
    </div>
  );
};
