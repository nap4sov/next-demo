import { Stars } from '@react-three/drei';
import { CanvasRoot } from '../components/Canvas';
import { Chart } from '../components/Chart/Chart';
import { Meta } from '../components/Meta';

const ChartPage = () => {
  return (
    <>
      <Meta title="BTC/USD chart" description="In real time!" />
      <Chart />
      <CanvasRoot className="dark">
        <Stars />
      </CanvasRoot>
    </>
  );
};

export default ChartPage;
