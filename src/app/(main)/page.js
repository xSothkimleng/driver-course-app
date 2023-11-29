'use client';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import styled from 'styled-components';
import LessonTracker from '@/components/tracker/lesson-tracker';
import Link from 'next/link';

const Card = styled.div`
  background-color: #fff;
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export default function Home() {
  return (
    <main className='h-[100vh]'>
      <div>
        <PageHeader>
          <div className='flex items-center justify-between p-[1rem]'>
            <div className=' text-left md:text-center'>
              <p className='font-medium text-2xl text-white'>Hello User</p>
              <p className='text-xl text-white'>Welcome to the Gig Academy!</p>
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
      </div>
      <div className='p-[5%]'>
        <Card>
          <div className='flex items-center p-[0.2rem]'>
            <div className='w-[35%] h-[20vh]'>
              <Image
                src={'/assets/image/user.png'}
                width={100}
                height={100}
                alt='User_Image'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <LessonTracker />
            </div>
          </div>
        </Card>
        <div>
          <div className='flex justify-between items-end mt-5 mb-2'>
            <p className='font-bold text-2xl'>Quick Access</p>
            {/* <p style={{ fontSize: '13px' }}>see more</p> */}
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <Card className='p-2'>
              <Link href='/study/courses/traffic-law'>
                <div>
                  <div className='w-[100%] h-[10rem] flex items-center'>
                    <Image
                      src={'/assets/image/traffic.png'}
                      width={100}
                      height={100}
                      alt='User_Image'
                      style={{ width: '100%', height: '80%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </Link>
              <div>
                <p className='text-center text-[#F0A714] tracking-[0.05rem] font-medium'>
                  Traffic Law
                </p>
              </div>
            </Card>
            <Card className='p-2'>
              <Link href='/study/courses/customer-service'>
                <div>
                  <div className='w-[100%] h-[10rem] flex items-center'>
                    <Image
                      src={'/assets/image/driver.png'}
                      width={200}
                      height={200}
                      alt='User_Image'
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-center text-[#F0A714] tracking-[0.05rem] font-medium'>
                    Customer Service
                  </p>
                </div>
              </Link>
            </Card>
            <Card className='p-2'>
              <Link href='/study/test'>
                <div>
                  <div className='w-[100%] h-[10rem] flex items-center'>
                    <Image
                      src={'/assets/image/quiz.webp'}
                      width={200}
                      height={200}
                      alt='User_Image'
                      style={{ width: '100%', height: '80%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-center text-[#F0A714] tracking-[0.05rem] font-medium'>
                    Quick Quiz
                  </p>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
