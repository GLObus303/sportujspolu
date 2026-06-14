import { useId } from 'react';

type TooltipProps = {
  text: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  const tooltipId = useId();

  return (
    <span className="group relative mx-1 inline-flex">
      <button
        type="button"
        aria-describedby={tooltipId}
        aria-label="Více informací"
        className="flex h-4 w-4 cursor-help items-center justify-center rounded-full bg-black text-xs font-semibold text-white hover:text-pistachio"
      >
        i
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className="invisible absolute bottom-full left-1/2 z-modal mb-2 w-56 -translate-x-1/2 rounded bg-background p-3 text-xs shadow-md group-hover:visible group-focus-within:visible"
      >
        {text}
      </span>
    </span>
  );
};
