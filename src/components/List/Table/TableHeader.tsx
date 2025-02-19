import { flexRender, HeaderGroup } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

export const TableHeader = <TData,>({
  headerGroups,
}: TableHeaderProps<TData>) => {
  return (
    <thead className="bg-black-3-opacity border-b border-black-20-opacity text-sm font-medium text-black-sub">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
