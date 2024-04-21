import React from 'react';
import Button from './components/Button';
import NavSingle from './components/NavSingle';
import Line from './components/Line';
import Toggle from './components/Toggle';
import StopNotif from './components/StopNotif';
import RemoveNotif from './components/RemoveNotif';


import { Home, Bus, Settings, Search, BellMinus ,BellRing} from 'lucide-react'

function App() {
  return (
    <div className="py-[24px] px-[16px] space-y-[48px] h-[2000px]">

      <div className='space-y-[24px]'>
        <div className='space-y-[8px]'>
          <h1 className='text-[20px] font-medium leading-[120%]'>Сүүлд харсан</h1>
          <p className='text-gray-400 leading-[140%]'>Та хараахан ямар ч чиглэл сонгоогүй байна.</p>
        </div>
        
        <Button className='w-full max-w-[calc(100%-0.1rem)]'>
          <p className='text-[16px] font-medium'>Чиглэл нэмэх</p>
        </Button>
      </div>

      <div className='space-y-[24px]'>
        <div className='space-y-[8px]'>
          <h1 className='text-[20px] font-medium leading-[120%]' >Миний чиглэлүүд </h1>
          <p className='text-gray-400 leading-[140%]'>Та хараахан ямар ч чиглэл нэмээгүй байна.</p>
        </div>
        
        <Button className='w-full max-w-[calc(100%-0.1rem)]'>
          <p className='text-[16px] font-medium' >Чиглэл нэмэх</p>
        </Button>
      </div>


      
      <div className='grid grid-cols-4 fixed bottom-0 left-0 w-screen bg-white backdrop-blur- border-t border-gray-100'>
        <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="/home" />
        <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Миний" link="/bus" />
        <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="/search" />
        <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="/settings" />
      </div>

      <div className='space-y-[4px]'>
        <Line lineCode="Ч:63" line="Зүрх Уул - Чингэлтэй - МУБИС" />
        <Line lineCode="Ч:48" line="Зайсан - Хайлааст" />
        <Line lineCode="M:2" line="4-р дэлгүүр - Цэцэг Төв" />
        <Line lineCode="ХО:2" line="Богд Уул - Зайсан - Цэцэг Төв" />
      </div>

      <Toggle/>

      <StopNotif
        icon={<BellRing className='w-8 h-8' />} // Adjust the size of the icon as needed
        title="Мэдэгдэл ирүүлэх"
        description="Уг буудал дээр автобус ирэхээр мэдэгдэл ирүүлэхийг хүсч байна уу? "
        stop={{
          icon: <BellRing className='w-[24px] h-[24px]' />, // Adjust the size of the icon as needed
          text: 'Цэцэг төв', // Text for the stop section
        }}
        
        button1="Үгүй"
        button2="Тийм"
      />

      <RemoveNotif
        icon={<BellMinus className='w-8 h-8' />} // Adjust the size of the icon as needed
        title="Мэдэгдэл болиулах"
        description="Уг буудал дээр автобус ирүүлэхээ болих уу? "
        stop={{
          icon: <BellMinus className='w-[24px] h-[24px]' />, // Adjust the size of the icon as needed
          text: 'Цэцэг төв', // Text for the stop section
        }}
              
        button1="Үгүй"
        button2="Тийм"
      />

    </div>
  );
}

export default App;
