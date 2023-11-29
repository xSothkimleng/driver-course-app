'use client';
import Card from '@/components/card';
import PageHeader from '@/components/page-header';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LessonPage = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <PageHeader isRoute title='Traffic Law Theory' />
      </div>
      <div className='p-[5%]'>
        <Card className='p-2'>
          <div
            className='p-2.5'
            dangerouslySetInnerHTML={{
              __html: `
Staying updated on traffic laws is crucial for drivers, as ignorance is not a defense. The Highway Code, though not legally binding, carries weight in court, and operators must ensure drivers are well-informed, often through Driver CPC training. Key areas include mandatory seat belt use, the ban on handheld mobile phones while driving, motorway lane restrictions for goods vehicles, proper procedures at level crossings, adherence to rules at pedestrian crossings, restrictions on other vehicles in bus lanes, and the severe penalties for driving under the influence of alcohol or drugs. Compliance is essential, given the evolving nature of laws, and the last review was on July 6, 2022.`,
            }}></div>
        </Card>

        <Button className='w-full bg-[#4378DB] mt-4' onClick={() => router.back()}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default LessonPage;
