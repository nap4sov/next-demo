import { ChangeEventHandler } from 'react';
import styles from '../../../styles/Table.module.scss';

export const Input: React.FC<{
  value: string | number[];
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ value, handleInputChange }) => {
  return typeof value === 'string' ? (
    <div>
      <input
        type="text"
        value={(value ?? '') as string}
        placeholder={`Search...`}
        onChange={handleInputChange}
        className={styles.filter}
      />
    </div>
  ) : null;
};
