import { flexRender, HeaderGroup } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: { index: number; size: number }[];
}

export const TableHeader = <TData,>({
  headerGroups,
  virtualPaddingLeft,
  virtualPaddingRight,
  virtualColumns,
}: TableHeaderProps<TData>) => {
  return (
    <thead className="text-sm font-medium text-black-sub">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="sticky top-0 z-10 bg-white">
          {virtualPaddingLeft > 0 && (
            <th style={{ width: virtualPaddingLeft }} />
          )}
          {virtualColumns.map((virtualColumn) => {
            const header = headerGroup.headers[virtualColumn.index];
            return (
              <th
                key={header.id}
                style={{ width: virtualColumn.size }}
                className="border-b border-black-20-opacity bg-black-3-opacity p-4"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            );
          })}
          {virtualPaddingRight > 0 && (
            <th style={{ width: virtualPaddingRight }} />
          )}
        </tr>
      ))}
    </thead>
  );
};
TableHeader.displayName = "TableHeader";
