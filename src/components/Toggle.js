// Toggle.js
import React, { useState } from 'react';

export default function Toggle() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex">
      <button
        className={`flex-1 py-2 ${
          activeIndex === 0 ? 'bg-white' : 'bg-gray-300'
        }`}
        onClick={() => handleClick(0)}
      >
        Эхлэх цэг
      </button>
      <button
        className={`flex-1 py-2 ${
          activeIndex === 1 ? 'bg-white' : 'bg-gray-300'
        }`}
        onClick={() => handleClick(1)}
      >
        Төгсгөлийн цэг
      </button>
    </div>
  );
}

