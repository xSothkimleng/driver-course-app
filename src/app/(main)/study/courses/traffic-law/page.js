import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'Traffic Law Books',
    link: '/',
  },
  {
    name: 'Traffic Law Lessons',
    link: '/',
  },
  {
    name: 'Traffic Law Questionnaire ',
    link: '/',
  },
  {
    name: 'Prioritizations',
    link: '/',
  },
  {
    name: 'Traffic Signs',
    link: '/study/courses/traffic-sign',
  },
];

const CoursePage = () => {
  return (
    <div>
      <div>
        <PageHeader isRoute title='Traffic Law' />
      </div>
      <div className='grid grid-cols-1 gap-4 p-[5%]'>
        {Data.map((item, index) => (
          <ImageDetailCard key={index} detail={item.name} url={item.link} arrowRight />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
