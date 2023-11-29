import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'Learner Drivers First Ever Driving Lesson - #1',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'Learner Drivers First Ever Driving Lesson - #2',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'Learner Drivers First Ever Driving Lesson - #3',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'Learner Drivers First Ever Driving Lesson - #4',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'Learner Drivers First Ever Driving Lesson - #5',
    link: '/',
    readTime: '20 min',
  },
];

const TrafficSignPage = () => {
  return (
    <div>
      <div>
        <PageHeader isRoute title='Traffic Law' />
      </div>
      <div className='grid grid-cols-1 gap-4 p-[5%]'>
        {Data.map((item, index) => (
          <ImageDetailCard key={index} detail={item.name} readTime={item.readTime} />
        ))}
      </div>
    </div>
  );
};

export default TrafficSignPage;
