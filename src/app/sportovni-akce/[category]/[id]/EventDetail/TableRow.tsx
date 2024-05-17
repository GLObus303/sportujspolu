import { FC, ReactNode } from 'react';

type TableRowProps = {
  label: string;
  value: ReactNode;
};

export const TableRow: FC<TableRowProps> = ({ label, value }) => (
  <tr className="border-b border-low-contrast">
    <td className="py-2 md:py-4">{label}</td>
    <td className="py-2 font-light md:py-4">{value}</td>
  </tr>
);
