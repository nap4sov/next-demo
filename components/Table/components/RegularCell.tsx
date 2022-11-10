import { CellContext } from '@tanstack/react-table';
import { IPerson } from '../constants';
import { formatDate } from '../helpers';

export const RegularCell: React.FC<{
  info: CellContext<IPerson, string | number>;
}> = ({ info: { getValue, column } }) => {
  return (
    <span>
      {column.id === 'date_of_birth'
        ? formatDate(getValue() as string)
        : getValue()}
    </span>
  );
};
