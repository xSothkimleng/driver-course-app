'use client';
import styled from 'styled-components';
import { IconLogo } from '@/utils/icon';
import { useRouter } from 'next/navigation';

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
          <div className='w-7 h-7 ' onClick={() => router.back()}>
            {IconLogo.arrowLeft}
          </div>
          <div className='w-[100%] text-center'>
            <h1 className='text-xl mr-7 font-normal'>{title}</h1>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default PageHeader;
