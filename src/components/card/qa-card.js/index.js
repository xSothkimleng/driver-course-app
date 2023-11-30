'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AnswerCard from '../answer-card';

const QACard = ({ id, question, image, answers }) => {
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
          <AnswerCard key={index} answer={answer.option} />
        ))}
      </div>
    </div>
  );
};

export default QACard;
