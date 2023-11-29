'use client';
import styled from 'styled-components';
import { IconLogo } from '@/utils/icon';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Wrapper = styled.div`
  background-color: #0048a8;
  width: 100%;
`;

const PageHeader = ({ children, isRoute, title }) => {
  const router = useRouter();

  return (
    <Wrapper>
      {children && children}
      {isRoute && (
        <div className='flex items-center p-3 text-white'>
          <div className='w-7 h-7 flex' onClick={() => router.back()}>
            {IconLogo.arrowLeft}
          </div>
          <div className='w-[100%] text-center'>
            <h1 className='text-xl mr-7 font-normal'>{title}</h1>
          </div>
          <div className='w-[2rem] h-[2rem] flex items-center'>
            <Image
              src={'/assets/image/logo/logo.png'}
              alt='logo'
              width={100}
              height={100}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default PageHeader;
