import { Column } from '@tanstack/react-table';
import { ChangeEventHandler } from 'react';
import { Input } from './Input';

export const Filter: React.FC<{ column: Column<any, any> }> = ({ column }) => {
  const filterValue = column.getFilterValue() as string | number[];

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => column.setFilterValue(target.value);

  return column.id === 'id' ? null : (
    <Input
      value={(filterValue ?? '') as string}
      handleInputChange={handleInputChange}
    />
  );
};
