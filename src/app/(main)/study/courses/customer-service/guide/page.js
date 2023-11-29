'use client';
import Card from '@/components/card';
import PageHeader from '@/components/page-header';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CustomerServiceGuidePage = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <PageHeader isRoute title='Traffic Law Theory' />
      </div>
      <div className='p-[5%]'>
        <Card className='p-2'>
          <div className='p-2.5'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <div className='text-[#4378DB] font-bold text-lg'>Customer Service Guide</div>
                  <div className='text-xs text-gray-500'>Read Time: 20 min</div>
                  <div className='text-xs text-gray-500'>By: John Doe</div>
                </div>
              </div>
              <div className='text-sm  mt-2'>
                Effective customer service is pivotal for a company success, influencing 60% of
                consumers to choose one brand over another based on expected service quality.
                Unhappy customers, experiencing negative interactions, can lead to a significant
                loss of business, with 73% willing to switch brands after multiple bad experiences.
                Customer service, often viewed as a revenue driver by 40% of organizations, plays a
                crucial role in building relationships. While customer service is reactive, customer
                success takes a proactive approach, focusing on strategy and goal-setting with
                customers, distinguishing the two functions.
              </div>
            </div>
          </div>
        </Card>

        <Button className='w-full bg-[#4378DB] mt-4' onClick={() => router.back()}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CustomerServiceGuidePage;
