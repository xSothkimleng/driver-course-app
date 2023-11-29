import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';

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
          <Card key={index}>
            <Link href='/study/courses'>
              <div className='h-[10vh] p-2 flex items-center justify-between'>
                <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
                <div className='p-4 w-full '>
                  <p className='font-medium pl-5'>{item?.name}</p>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrafficSignPage;
