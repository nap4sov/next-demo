import Image from 'next/image';
import { Meta } from '../components/Meta';

export default function Home() {
  return (
    <>
      <Meta title="* Homepage *" description="lorem ipsum" />
      <h1>Homepage</h1>
      <Image src="/blog-icon.png" alt="home icon" width="150" height="150" />
    </>
  );
}
