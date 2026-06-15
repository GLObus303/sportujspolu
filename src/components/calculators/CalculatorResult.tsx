'use client';

type CalculatorResultProps = {
  children: React.ReactNode;
};

export const CalculatorResult: React.FC<CalculatorResultProps> = ({
  children,
}) => (
  <div
    aria-live="polite"
    className="rounded-lg bg-soft-background p-5 sm:p-8 mt-6 space-y-3"
  >
    {children}
  </div>
);

export const CalculatorResultRow: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => (
  <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
    <span className="text-dark-gray dark:text-text">{label}</span>
    <span className="font-semibold text-lg">{value}</span>
  </p>
);
