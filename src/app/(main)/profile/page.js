import PageHeader from '@/components/page-header';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div>
      <PageHeader>
        <div className='flex items-center justify-between p-[1rem]'>
          <div className='text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>User Profile</p>
            <p className='text-xl text-white'>{`Don't Worry, Be yourself`}</p>
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
        <div className='flex flex-col items-center p-[0.2rem]'>
          <div className='w-[12rem] h-[12rem] bg-white rounded-[50%]'>
            <Image
              src={'/assets/image/user.png'}
              width={100}
              height={100}
              alt='User_Image'
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className='w-full grid grid-cols-1 gap-2'>
            <div className='bg-white rounded-xl p-2'>
              <div className='flex justify-between'>
                <label className='text-sm'>Name</label>
              </div>
              <p className='font-medium text-sm '>Som Monin</p>
            </div>
            <div className='bg-white rounded-xl p-2'>
              <div className='flex justify-between'>
                <label className='text-sm'>Email</label>
              </div>
              <p className='font-medium text-sm '>smon@gmail.com</p>
            </div>
            <div className='bg-white rounded-xl p-2'>
              <div className='flex justify-between'>
                <label className='text-sm'>Contact</label>
              </div>
              <p className='font-medium text-sm '>012 964 520</p>
            </div>
            <div className='bg-white rounded-xl p-2'>
              <div className='flex justify-between'>
                <label className='text-sm'>Date of Birth</label>
              </div>
              <p className='font-medium text-sm '>8 March 2001</p>
            </div>
            <Link href='/profile/user-certificate'>
              <div className='bg-white rounded-xl p-2 flex justify-between'>
                <p>Certificate</p>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
