import PageHeader from '@/components/page-header';
import ImageDetailCard from '@/components/card/image-detail';

const Data = [
  {
    name: 'Chapter 1',
    link: '/study/courses/lesson-page',
  },
  {
    name: 'Chapter 2',
    link: '/study/courses/lesson-page',
  },
  {
    name: 'Chapter 3',
    link: '/study/courses/lesson-page',
  },
  {
    name: 'Chapter 4',
    link: '/study/courses/lesson-page',
  },
  {
    name: 'Chapter 5',
    link: '/study/courses/lesson-page',
  },
];

const LessonChapterPage = () => {
  return (
    <div>
      <div>
        <PageHeader isRoute title='Lesson Chapter' />
      </div>
      <div className='grid grid-cols-1 gap-4 p-[5%]'>
        {Data.map((item, index) => (
          <ImageDetailCard key={index} detail={item.name} url={item.link} arrowRight colorNormal />
        ))}
      </div>
    </div>
  );
};

export default LessonChapterPage;
