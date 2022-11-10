import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  RowData,
} from '@tanstack/react-table';
declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}
import { useState } from 'react';
import { COLUMN_DATA, IPerson } from './constants';
import { EditableCell } from './components/EditableCell';
import { RegularCell } from './components/RegularCell';

const columnHelper = createColumnHelper<IPerson>();

const columns = COLUMN_DATA.map(({ header, accessor, editable }) => {
  const key = accessor as keyof IPerson;
  return columnHelper.accessor(key, {
    header: () => <h3>{header}</h3>,
    cell: info =>
      editable ? <EditableCell info={info} /> : <RegularCell info={info} />,
  });
});

export const useBasicTable = (data: IPerson[]) => {
  const [tableData, setTableData] = useState(data);

  return useReactTable({
    data: tableData,
    columns,
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnFilters: true,
    getFilteredRowModel: getFilteredRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setTableData(prev => {
          return prev.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...prev[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          });
        });
      },
    },
  });
};
