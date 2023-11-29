'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const QACard = ({ id, question, image, answers }) => {
  const [selected, setSelected] = useState(null);

  const handleOnClick = answer => {
    console.log('answer', answer);
  };

  return (
    <div className='bg-[#fff] rounded-[14px]'>
      <div className='p-2'>
        <p className='text-lg font-medium'>
          {id + 1}. {question}
        </p>
      </div>
      {image && (
        <div className='w-[100%] h-[20vh]'>
          <Image
            src={image}
            width={100}
            height={100}
            alt='User_Image'
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      )}
      <div className='p-2 grid grid-cols-1 gap-4'>
        {answers.map((answer, index) => (
          <div
            key={index}
            style={{ boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '14px' }}
            onClick={() => handleOnClick(answer.correct)}>
            <div className='flex items-center'>
              <label htmlFor={answer?.option} className='text-center p-2 text-[#21205A]'>
                {answer?.option}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QACard;
