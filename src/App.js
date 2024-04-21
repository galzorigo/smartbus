import React from 'react';
import Button from './components/Button';
import NavSingle from './components/NavSingle';

import { Home, Bus, Settings, Search } from 'lucide-react'

function App() {
  return (
    <div className="py-[24px] px-[16px]">
      <Button className='w-full max-w-[calc(100%-0.1rem)]'>
        <p className='text-[16px]'>Click me</p>
      </Button>

      <div className='grid grid-cols-4 fixed bottom-0 left-0 w-screen'>
        <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="/home" />
        <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Автобус" link="/bus" />
        <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="/search" />
        <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="/settings" />
      </div>
    </div>
  );
}

export default App;
