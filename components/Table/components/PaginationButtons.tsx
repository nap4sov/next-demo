import { Table } from '@tanstack/react-table';
import React from 'react';
import { IPerson } from '../constants';
import styles from '../../../styles/Table.module.scss';

export const PaginationButtons: React.FC<{ table: Table<IPerson> }> = ({
  table,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Prev
      </button>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
    </div>
  );
};
