
import React from 'react';
import Line from './components/Line';
import Toggle from './components/Toggle';
import BusStop from './components/BusStop';
import BusStopWithNotif from './components/BusStopWithNotif';
import Return from './components/Return';
import NavSingle from './components/NavSingle';


import { Home, Bus, Settings, Search, ChevronLeft, Star} from 'lucide-react'

import { ReactComponent as BellRingFilled } from './customIcons/BellRingFilled.svg';
import { ReactComponent as MapPinFilled } from './customIcons/MapPinFilled.svg';

function SeeBus() {
  return (

    /*Body*/
    <div className="py-[24px] px-[16px] space-y-[20px] h-[3000px] bg-[#FAFAFA]">

      <div className="flex justify-between items-center w-full ">
        <Return icon={<ChevronLeft className="w-5 h-5" />} className="mr-2 additional-classes">
          Буцах
        </Return>

        <Star className="w-[20px] h-[20px] text-orange-500" />
      </div>

      <div className='space-y-[12px]'>
        <Line lineCode="Ч:63" line="Зүрх Уул - Чингэлтэй - МУБИС" />
        <Toggle/>
      </div>
      
      {/*Wrapper */}
      <div className='space-y-[4px]'>
        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<Bus className=''/>}
            time="12 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<busty className='w-[24px] h-[24px]'/>}
            time="24 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<Bus className=''/>}
            time="12 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<busty className='w-[24px] h-[24px]'/>}
            time="4 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<Bus className=''/>}
            time="27 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<busty className='w-[24px] h-[24px]'/>}
            time="31 мин"
        />

        <BusStopWithNotif 
            Stop="Цэцэг Төв"
            icon={<BellRingFilled className='w-[24px] h-[24px]' />}
            icon2={<Bus className=''/>}
            time="2 мин"
        />

        <BusStop 
            Stop="Цэцэг Төв"
            icon={<MapPinFilled className='' />}
            icon2={<busty className='w-[24px] h-[24px]'/>}
            time="24 мин"
        />

        
        
      </div>

      {/*Nav Bar*/}
      <div className='grid grid-cols-4 fixed bottom-0 left-0 w-screen bg-white bg-opacity-50 backdrop-blur-sm border-t border-gray-100'>
        <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="/home" />
        <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Миний" link="/bus" />
        <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="/search" />
        <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="/settings" />
      </div>
      
      
    </div> /*End of Body*/
  );
}

export default SeeBus;
