
import React from 'react';
import Button from './components/Button';
import NavSingle from './components/NavSingle';
import Line from './components/Line';
import Toggle from './components/Toggle';
import StopNotif from './components/StopNotif';
import RemoveNotif from './components/RemoveNotif';
import GetOffBus from './components/RemoveNotif';
import SearchBar from './components/SearchBar';
import BusStop from './components/BusStop';
import BusStopWithNotif from './components/BusStopWithNotif';
import GetOnBus from './components/GetOnBus';



import { Home, Bus, Settings, Search, BellMinus ,BellRing, Accessibility, ChevronLeft, Star} from 'lucide-react'
import { ReactComponent as StopNoNotif } from './customIcons/busty.svg';

import { ReactComponent as BellRingFilled } from './customIcons/BellRingFilled.svg';
import { ReactComponent as BellMinusFilled } from './customIcons/BellMinusFilled.svg';
import { ReactComponent as UserFilled } from './customIcons/UserFilled.svg';
import { ReactComponent as UserRedFilled } from './customIcons/UserRedFilled.svg';

import { ReactComponent as MapPinFilled } from './customIcons/MapPinFilled.svg';
import Return from './components/Return';

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
      
      
    </div> /*End of Body*/
  );
}

export default SeeBus;
