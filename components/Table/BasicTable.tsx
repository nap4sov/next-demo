import { flexRender } from '@tanstack/react-table';
import { Filter } from './components/Filter';
import { PaginationButtons } from './components/PaginationButtons';

import data from './db.json';
import { useBasicTable } from './tableConfig';

import styles from '../../styles/Table.module.scss';

export const BasicTable = () => {
  const table = useBasicTable(data);

  return (
    <div className={styles.wrapper}>
      <table>
        <thead className={styles.head}>
          <tr>
            {table.getFlatHeaders().map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                {header.column.getCanFilter() ? (
                  <Filter column={header.column} />
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationButtons table={table} />
    </div>
  );
};
