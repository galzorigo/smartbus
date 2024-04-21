// Toggle.js
import React, { useState } from 'react';

export default function Toggle() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex p-[4px] bg-gray-100 rounded-[12px] gap-[12px]">
        <button
            className={`flex-1 py-2 rounded-[8px] ${
            activeIndex === 0 ? 'bg-white' : ''}`}
            onClick={() => handleClick(0)}>
            <p className='font-medium text-[16px]'>Эхлэх цэг</p>
        </button>

        <button
            className={`flex-1 py-2 rounded-[8px] ${
            activeIndex === 1 ? 'bg-white' : ''}`}
            onClick={() => handleClick(1)}>
            <p className='font-medium text-[16px]'>Төгсгөлийн цэг</p>
        </button>
    </div>

  );
}

