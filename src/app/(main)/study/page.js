import PageHeader from '@/components/page-header';
import ImageDetailCard from '@/components/card/image-detail';

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
          <div className='p-[1rem] text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>Study</p>
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
