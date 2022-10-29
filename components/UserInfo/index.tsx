import { IUser } from '../../interfaces/user';
import { GridStack, GridStackElement } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { useEffect, useMemo } from 'react';

export const UserInfo: React.FC<{ user: IUser }> = ({ user }) => {
  const elements = useMemo(
    () =>
      user &&
      Object.keys(user).reduce((acc: string[], key) => {
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
      }, []),
    [user],
  );

  const serializedData = useMemo(
    () =>
      elements.map(element => ({
        w: 6,
        h: 5,
        content: element,
      })),
    [elements],
  );

  useEffect(() => {
    const grid = GridStack.init({
      disableOneColumnMode: true,
      resizable: { handles: 'all' },
    }).removeAll(false);

    grid?.load([...serializedData]);
  }, [serializedData]);

  return <div className="grid-stack"></div>;
};
