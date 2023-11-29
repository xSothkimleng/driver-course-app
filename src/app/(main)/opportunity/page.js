import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import ImageDetailCard from '@/components/card/image-detail';

const blogPost = [
  {
    name: '🎈 Emergency Driver needed for 2 weeks 🎊',
  },
  {
    name: '🎈 Emergency Driver needed for 2 weeks 🎊',
  },
  {
    name: '🎈 Emergency Driver needed for 2 weeks 🎊',
  },
];

const OpportunityPage = () => {
  return (
    <div>
      <div>
        <PageHeader>
          <div className='p-[1rem] text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>Opportunity Board</p>
            <p className='text-xl text-white'>You may your next move here!</p>
          </div>
        </PageHeader>
      </div>
      <div className='grid grid-cols-1 gap-4 p-[5%]'>
        {blogPost.map((item, index) => (
          <ImageDetailCard key={index} detail={item.name} />
        ))}
      </div>
    </div>
  );
};

export default OpportunityPage;
