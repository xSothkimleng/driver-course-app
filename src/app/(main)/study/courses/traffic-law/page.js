import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';

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
          <Card key={index}>
            <Link href={item.link}>
              <div className='h-[10vh] p-2 flex items-center justify-between'>
                <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
                <div className='p-4 w-full '>
                  <p className='font-medium tracking-wider pl-5 text-[#F0A714]'>{item?.name}</p>
                </div>
                <div className='w-10 h-10 flex items-center '>{IconLogo?.arrowRight}</div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
