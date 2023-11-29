'use client';
import { Button } from '@material-tailwind/react';
import styled from 'styled-components';

const LessonTracker = () => {
  return (
    <div>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <p className='text-[#0043CE] font-medium tracking-[0.01rem]' style={{ fontSize: '13px' }}>
            Continue Where you left off
          </p>
          <p className='text-[rgba(0,0,0,0.8)] font-medium' style={{ fontSize: '20px' }}>
            Traffic Law Chapter 3
          </p>
        </div>
        <div>
          <Button className='bg-[green]  p-2'>Continues</Button>
        </div>
      </div>
    </div>
  );
};

export default LessonTracker;
