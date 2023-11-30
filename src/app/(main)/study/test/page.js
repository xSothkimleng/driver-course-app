'use client';
import { QAData } from '@/utils/database/qa-data';
import PageHeader from '@/components/page-header';
import QACard from '@/components/card/qa-card.js';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

const TestPage = () => {
  const router = useRouter();

  const onSubmit = () => {
    router.push('/study/test/result');
  };

  return (
    <div className='pb-[9vh] bg-[#EDF3FF]'>
      <div>
        <PageHeader isRoute title='Test' />
      </div>
      <div>
        <div className='grid grid-cols-1 gap-4 p-[5%]'>
          {QAData.map((item, index) => (
            <QACard
              key={index}
              id={index}
              question={item?.question}
              image={item?.image}
              answers={item?.answers}
            />
          ))}
          <Button onClick={() => onSubmit()} className='w-full bg-[#4378DB]'>
            Submit
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TestPage;
