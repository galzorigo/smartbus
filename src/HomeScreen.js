
import React from 'react';
import Button from './components/Button';
import NavSingle from './components/NavSingle';
import Line from './components/Line';


import { Home, Bus, Settings, Search, BellMinus ,BellRing, Accessibility} from 'lucide-react'

function HomeScreen() {
  return (

    /*Body*/
    <div className="py-[24px] px-[16px] space-y-[48px] h-[3000px] bg-[#FAFAFA]">
      
      {/*Wrapper */}
      <div className='space-y-[24px]'>

        {/*Text Wrapper*/}
        <div className='space-y-[8px]'>
          <h1 className='text-[20px] font-semibold leading-[120%]'>Сүүлд харсан</h1>
        </div>

        <div className='space-y-[4px]'>
          <Line lineCode="Ч:63" line="Зүрх Уул - Чингэлтэй - МУБИС" />
          <Line lineCode="Ч:48" line="Зайсан - Хайлааст" />
          <Line lineCode="M:2" line="4-р дэлгүүр - Цэцэг Төв" />
          <Line lineCode="ХО:2" line="Богд Уул - Зайсан - Цэцэг Төв" />
        </div>
      </div>

      <div className='space-y-[24px]'>

        {/*Text Wrapper*/}
        <div className='space-y-[8px]'>
          <h1 className='text-[20px] font-semibold leading-[120%]'>Сүүлд харсан</h1>
        </div>

        <div className='space-y-[4px]'>
          <Line lineCode="Ч:63" line="Зүрх Уул - Чингэлтэй - МУБИС" />
          <Line lineCode="Ч:48" line="Зайсан - Хайлааст" />
          <Line lineCode="M:2" line="4-р дэлгүүр - Цэцэг Төв" />
          <Line lineCode="ХО:2" line="Богд Уул - Зайсан - Цэцэг Төв" />
        </div>
      </div>
      
      {/*Nav Bar*/}
      <div className='grid grid-cols-4 fixed bottom-0 left-0 w-screen bg-white bg-opacity-50 backdrop-blur-sm border-t border-gray-100'>
        <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="/home" />
        <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Миний" link="/bus" />
        <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="/search" />
        <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="/settings" />
      </div>

      <div className='w-full'>
        <Button className='w-[150px]'>
          <p className='text-[16px] font-semibold' >Бүгдийг харах</p>
        </Button>
      </div>


    </div> /*End of Body*/
  );
}

export default HomeScreen;
