'use client';
import React, { useState } from 'react';

const AnswerCard = ({ answer }) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      style={{
        boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '14px',
      }}
      onClick={() => handleOnClick()}>
      <div
        className='flex items-center'
        style={{ background: selected ? 'rgb(173, 216, 230,0.5)' : '' }}>
        <label className='text-center p-2 text-[#21205A]'>{answer}</label>
      </div>
    </div>
  );
};

export default AnswerCard;
