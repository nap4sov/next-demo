import { Stars } from '@react-three/drei';
import { CanvasRoot } from '../components/Canvas';
import { Chart } from '../components/Chart/Chart';
import { Meta } from '../components/Meta';
import { getPriceData } from '../components/Chart/api';
import { PriceData } from '../components/Chart/types';

const ChartPage: React.FC<{ data: PriceData }> = ({ data }) => {
  console.log(data);

  return (
    <>
      <Meta title="BTC/USD chart" description="In real time!" />
      <Chart data={data} />
      <CanvasRoot className="dark">
        <Stars />
      </CanvasRoot>
    </>
  );
};

export default ChartPage;

export const getServerSideProps = async () => {
  const data = await getPriceData();

  return {
    props: {
      data,
    },
  };
};
