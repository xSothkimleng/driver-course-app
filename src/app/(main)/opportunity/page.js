import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import ImageDetailCard from '@/components/card/image-detail';
import Image from 'next/image';

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
          <div className='flex items-center justify-between p-[1rem]'>
            <div className=' text-left md:text-center'>
              <p className='font-medium text-2xl text-white'>Opportunity Board</p>
              <p className='text-xl text-white'>You may your next move here!</p>
            </div>
            <div className='w-[3rem] h-[3rem] flex items-center'>
              <Image
                src={'/assets/image/logo/logo.png'}
                alt='logo'
                width={100}
                height={100}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
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
