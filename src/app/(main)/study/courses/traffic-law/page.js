import PageHeader from '@/components/page-header';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'Traffic Law Books',
    link: '/study/courses/lesson-chapter',
  },
  {
    name: 'Traffic Law Lessons',
    link: '/study/courses/lesson-chapter',
  },
  {
    name: 'Traffic Law Questionnaire ',
    link: '/study/courses/lesson-chapter',
  },
  {
    name: 'Prioritizations',
    link: '/study/courses/lesson-chapter',
  },
  {
    name: 'Traffic Signs',
    link: '/study/courses/lesson-chapter',
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
