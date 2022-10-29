import { Meta } from '../components/Meta';
import { CanvasRoot } from '../components/Canvas';
import { MainInfo } from '../components/MainInfo';
import { Cloud } from '@react-three/drei';
import { IUser } from '../interfaces/user';
import { Login } from '../components/Form/Login';

const Home: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <>
      <Meta title="* Homepage *" description="lorem ipsum" />
      {user?._id ? <MainInfo user={user} /> : <Login />}

      <CanvasRoot>
        <Cloud
          opacity={0.3}
          speed={0.2} // Rotation speed
          width={8} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
        />
      </CanvasRoot>
    </>
  );
};

export default Home;
