type TableRowProps = {
  label: string;
  value: React.ReactNode;
};

export const TableRow: React.FC<TableRowProps> = ({ label, value }) => (
  <tr className="border-b border-low-contrast">
    <td className="py-2 md:py-4">{label}</td>
    <td className="py-2 font-light md:py-4">{value}</td>
  </tr>
);
