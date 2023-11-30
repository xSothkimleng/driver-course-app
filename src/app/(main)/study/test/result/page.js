'use client';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import Card from '@/components/card';
import Link from 'next/link';

const ResultPage = () => {
  const router = useRouter();

  return (
    <div>
      <PageHeader>
        <div className='flex items-center justify-between p-[1rem]'>
          <div className=' text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>Test Result</p>
            <p className='text-xl text-white'>Practice make perfect!</p>
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
      <div className='p-[5%]'>
        <Card>
          <div className='p-2.5 text-center'>
            <span className='text-xl font-bold'>Test Completed</span>
            <br /> You have answered 4 questions correctly.
            <br /> <span className='font-bold text-2xl text-green-600'>Your score is 100%.</span>
          </div>
        </Card>
        <Link href='/study'>
          <Button className='w-full bg-[#4378DB] mt-3'>Confirm</Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
