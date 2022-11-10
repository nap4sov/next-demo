import { CellContext } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { IPerson } from '../constants';
import styles from '../../../styles/Table.module.scss';

export const EditableCell: React.FC<{
  info: CellContext<IPerson, string | number>;
}> = ({ info: { getValue, row, column, table } }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value as string}
      onChange={({ target }) => setValue(target.value)}
      onBlur={onBlur}
      className={styles.editable}
    />
  );
};
