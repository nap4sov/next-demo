import Head from 'next/head';

export const Meta: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: '* Homepage *',
  description: 'Next.js demo project',
};
