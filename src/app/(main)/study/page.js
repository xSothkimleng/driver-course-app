import PageHeader from '@/components/page-header';
import ImageDetailCard from '@/components/card/image-detail';
import Image from 'next/image';

const StudyList = [
  {
    title: 'Traffic Law',
    url: '/study/courses/traffic-law',
  },
  {
    title: 'Customer Service',
    url: '/study/courses/customer-service',
  },
  {
    title: 'Road Sign',
    url: '/study/courses/traffic-sign',
  },
  {
    title: 'Test',
    url: '/study/test',
  },
  {
    title: 'Practice Question',
    url: '/study/test',
  },
];

const LabPage = () => {
  return (
    <div>
      <div>
        <PageHeader>
          <div className='flex items-center justify-between p-[1rem]'>
            <div className='text-left md:text-center'>
              <p className='font-medium text-2xl text-white'>Study</p>
              <p className='text-xl text-white'>Speculate to Accumulate</p>
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
        {StudyList.map((item, index) => (
          <ImageDetailCard key={index} detail={item.title} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default LabPage;
