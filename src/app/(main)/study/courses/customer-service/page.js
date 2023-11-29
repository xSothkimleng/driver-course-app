import PageHeader from '@/components/page-header';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'How to deal with rude customers',
    link: '/study/courses/customer-service/guide',
    readTime: '20 min',
  },
  {
    name: 'How to deal with difficult customers',
    link: '/study/courses/customer-service/guide',
    readTime: '20 min',
  },
  {
    name: 'How to deal with angry customers',
    link: '/study/courses/customer-service/guide',
    readTime: '20 min',
  },
  {
    name: 'How to deal with customers',
    link: '/study/courses/customer-service/guide',
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
          <ImageDetailCard
            key={index}
            detail={item.name}
            readTime={item.readTime}
            url={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerServicePage;
