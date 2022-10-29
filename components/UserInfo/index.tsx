import { IUser } from '../../interfaces/user';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { useEffect } from 'react';

export const UserInfo: React.FC<{ user: IUser }> = ({ user }) => {
  const grid =
    typeof window === 'undefined'
      ? ''
      : GridStack.init({
          disableOneColumnMode: true,
          resizable: { handles: 'all' },
        });

  useEffect(() => {
    if (!user) return;

    const elements = Object.keys(user).reduce((acc: string[], key) => {
      if (key === '_id' || key === '__v' || key === 'name') return acc;
      const objKey = key as keyof IUser;
      if (user[objKey] === '') return acc;
      return [
        ...acc,
        `<div>
              <h3>${key.toUpperCase()}</h3>
              <p>${user[objKey]}</p>
            </div>`,
      ];
    }, []);

    const serializedData = elements.map(element => ({
      w: 6,
      h: 5,
      content: element,
    }));

    grid && grid.load(serializedData);
  }, [user, grid]);

  return <div className="grid-stack"></div>;
};
