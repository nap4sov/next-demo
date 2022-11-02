import { IUser } from '../../interfaces/user';
import { GridStack, GridStackElement } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import { useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';

export const UserInfo: React.FC = () => {
  const { data } = useSession();

  // const elements = useMemo(() => {
  //   const { user } = data?.user && data;

  //   return Object.keys(user).reduce((acc: string[], key) => {
  //     return [
  //       ...acc,
  //       `<div>
  //             <h3>${key.toUpperCase()}</h3>
  //             <p>${user[key]}</p>
  //           </div>`,
  //     ];
  //   }, []);
  // }, [data]);

  // const serializedData = useMemo(
  //   () =>
  //     elements.map((element: any) => ({
  //       w: 6,
  //       h: 5,
  //       content: element,
  //     })),
  //   [elements],
  // );

  const serializedData = [
    {
      w: 6,
      h: 5,
      content: `<div><h3>Email</h3><p>${data?.user?.email}</p></div>`,
    },
    {
      w: 6,
      h: 5,
      content: `<div><img src=${data?.user?.image} width="120"/></div>`,
    },
  ];

  useEffect(() => {
    const grid = GridStack.init({
      disableOneColumnMode: true,
      resizable: { handles: 'all' },
    }).removeAll(false);

    grid?.load([...serializedData]);
  }, [serializedData]);

  return <div className="grid-stack"></div>;
};
