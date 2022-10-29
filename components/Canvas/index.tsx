import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

type IProps = {
  children: ReactNode;
  className?: string;
};

export const CanvasRoot: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={`canvas ${className ? className : ''}`}>
      <Canvas>{children}</Canvas>
    </div>
  );
};
