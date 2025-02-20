import { flexRender, HeaderGroup } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

export const TableHeader = <TData,>({
  headerGroups,
}: TableHeaderProps<TData>) => {
  return (
    <thead className="text-sm font-medium text-black-sub">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="sticky top-0 z-10 bg-white">
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="border-b border-black-20-opacity bg-black-3-opacity p-4"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
