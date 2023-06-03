import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={435}
      viewBox='0 0 300 435'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect x='25' y='25' rx='15' ry='15' width='250' height='210' />
      <rect x='25' y='305' rx='10' ry='10' width='250' height='20' />
      <rect x='25' y='360' rx='15' ry='15' width='250' height='50' />
      <rect x='25' y='260' rx='10' ry='10' width='250' height='20' />
    </ContentLoader>
  );
};

export default Skeleton;
