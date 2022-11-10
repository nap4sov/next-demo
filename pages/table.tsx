import { Cloud, Sky } from '@react-three/drei';
import { CanvasRoot } from '../components/Canvas';
import { Meta } from '../components/Meta';
import { BasicTable } from '../components/Table/BasicTable';

const Table: React.FC = () => {
  return (
    <>
      <Meta title="Interactive table" description="With static data" />
      <BasicTable />
      <CanvasRoot>
        <Sky azimuth={0.5} distance={11000} sunPosition={[0, 1, 1]} />
        <Cloud opacity={0.4} speed={0.3} width={20} depth={3} segments={10} />
      </CanvasRoot>
    </>
  );
};

export default Table;
