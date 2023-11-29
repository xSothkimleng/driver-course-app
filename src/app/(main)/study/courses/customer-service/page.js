import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'How to deal with rude customers',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'How to deal with difficult customers',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'How to deal with angry customers',
    link: '/',
    readTime: '20 min',
  },
  {
    name: 'How to deal with customers',
    link: '/',
    readTime: '20 min',
  },
];

const CustomerServicePage = () => {
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

export default CustomerServicePage;
