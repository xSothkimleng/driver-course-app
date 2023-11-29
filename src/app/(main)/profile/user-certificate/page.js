import PageHeader from '@/components/page-header';
import Image from 'next/image';
import Card from '@/components/card';

const UserCertificatePage = () => {
  return (
    <div>
      <PageHeader>
        <div className='flex items-center justify-between p-[1rem]'>
          <div className='text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>Som Monin</p>
            <p className='text-xl text-white'>User Certificate Detail</p>
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
                <label className='text-sm'>Certificate Status</label>
              </div>
              <p className='font-medium text-sm text-red-500'>Not Yet obtain</p>
            </div>
            <div className='bg-white rounded-xl '>
              <div className='w-full  bg-white rounded-[50%] '>
                <Image
                  src={'/assets/image/certificate.png'}
                  width={200}
                  height={200}
                  alt='User_Image'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(50%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCertificatePage;
