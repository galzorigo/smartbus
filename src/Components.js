
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


import { Home, Bus, Settings, Search, BellMinus ,BellRing, Accessibility} from 'lucide-react'
import { ReactComponent as StopNoNotif } from './customIcons/busty.svg';

import { ReactComponent as BellRingFilled } from './customIcons/BellRingFilled.svg';
import { ReactComponent as BellMinusFilled } from './customIcons/BellMinusFilled.svg';
import { ReactComponent as UserFilled } from './customIcons/UserFilled.svg';
import { ReactComponent as UserRedFilled } from './customIcons/UserRedFilled.svg';

import { ReactComponent as MapPinFilled } from './customIcons/MapPinFilled.svg';

function Components() {
  return (

    /*Body*/
    <div className="py-[24px] px-[16px] space-y-[48px] h-[7000px] bg-[#FAFAFA]">
      
      {/*Wrapper */}
      <div className='space-y-[24px]'>

        <h1 className='text-[20px] font-semibold leading-[120%]'>Товчлуур</h1>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Улбар шар товч</p>
          
          <Button variant={1}>
            Намайг дар
          </Button>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Хөх товч</p>
          
          <Button variant={2}>
            Намайг дар
          </Button>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Саарал товч</p>
          
          <Button variant={3}>
            Намайг дар
          </Button>
        </div>

      </div>

      <div className='space-y-[12px]'>

        <h1 className='text-[20px] font-semibold leading-[120%]'>'Navigation' хэсэг</h1>

        <p className='text-gray-400 leading-[140%]'>Navigation</p>

        <div className='grid grid-cols-4 left-0 w-full bg-white bg-opacity-50 backdrop-blur-sm border-t border-gray-100'>
          <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="#" />
          <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Миний" link="#" />
          <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="#" />
          <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="#" />
        </div>

      </div>

      

      <div className='space-y-[24px]'>
        <h1 className='text-[20px] font-semibold leading-[120%]'>Автобус</h1>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Автобусны чиглэлүүд</p>
          
          <div className='space-y-[4px]'>
            <Line lineCode="Ч:63" line="Зүрх Уул - Чингэлтэй - МУБИС" />
            <Line lineCode="Ч:48" line="Зайсан - Хайлааст" />
            <Line lineCode="M:2" line="4-р дэлгүүр - Цэцэг Төв" />
            <Line lineCode="ХО:2" line="Богд Уул - Зайсан - Цэцэг Төв" />
          </div>
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Автобусны буудлууд</p>
          
          <div className='space-y-[4px]'>
            <BusStop
              Stop="Цэцэг Төв"
              icon={<MapPinFilled className='' />}
              icon2={<Bus className=''/>}
              time="12 мин"
            />

            <BusStopWithNotif
              Stop="Цэцэг Төв"
              icon={<BellRing className='' />}
              icon2={<StopNoNotif className=''/>}
              time="12 мин"
            />

            <BusStop
              Stop="Цэцэг Төв"
              icon={<MapPinFilled className='' />}
              icon2={<Accessibility className=''/>}
              time="12 мин"
            />
          </div>
        </div>
      </div>
      
      <div className='space-y-[24px]'>
        <h1 className='text-[20px] font-semibold leading-[120%]'>Хайх хэсэг, Toggle хэсэг</h1>

        <div className='space-y-[8px]'>
          <Toggle/>
          <SearchBar icon={<Search />} />
        </div>
      </div>
      
      {/*Nav Bar*/}
      <div className='grid grid-cols-4 fixed pb-[20px] bottom-0 left-0 w-screen bg-white bg-opacity-50 backdrop-blur-sm border-t border-gray-100'>
        <NavSingle icon={<Home className="w-[32px] h-[32px]"/>} title="Нүүр" link="/home" />
        <NavSingle icon={<Bus className="w-[32px] h-[32px]"/>} title="Миний" link="/bus" />
        <NavSingle icon={<Search className="w-[32px] h-[32px]"/>} title="Хайх" link="/search" />
        <NavSingle icon={<Settings className="w-[32px] h-[32px]"/>} title="Тохиргоо" link="/settings" />
      </div>

      <div className='space-y-[32px]'>
        <h1 className='text-[20px] font-semibold leading-[120%]'>Модалууд</h1>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Буудал дээр мэдэгдэл тохируулах</p>
          
          <StopNotif
            icon={<BellRingFilled className='w-[36px] h-[36px]' />}
            title="Мэдэгдэл ирүүлэх"
            description="Уг буудал дээр автобус ирэхээр мэдэгдэл ирүүлэхийг хүсч байна уу? "
            stop={{
              icon: <BellRingFilled className='w-[24px] h-[24px]' />,
              text: 'Цэцэг төв',
            }}
            
            button1="Үгүй"
            button2="Тийм"
          />
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Буудал дээрх мэдэгдлээ болиулах</p>
          
          <RemoveNotif
            icon={<BellMinusFilled className='w-[36px] h-[36px]' />}
            title="Мэдэгдэл болиулах"
            description="Уг буудал дээр автобус ирэхээр мэдэгдэл ирүүлэхийг болих уу? "
            stop={{
              icon: <BellMinus className='w-[24px] h-[24px]' />,
              text: 'Цэцэг төв',
            }}
                  
            button1="Үгүй"
            button2="Тийм"
          />
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Автобусанд суух</p>
          
          <GetOnBus
            icon={<UserFilled className='w-[36px] h-[36px]' />}
            title="Уг автобусанд суусанд тооцох уу?"
            description="Тийм гэснээр та буух буудлаа сонгоод буух дөхөхөөр тань танд сануулах болно."
            stop={{
              icon: <Bus className='w-[24px] h-[24px]' />,
              text: 'Хайлааст - Цэцэг Төв',
            }}
                  
            button1="Үгүй"
            button2="Тийм"
          />
        </div>

        <div className='flex flex-col gap-[12px]'>
          <p className='text-gray-400 leading-[140%]'>Автобуснаас буух</p>
          
          <GetOffBus
            icon={<UserRedFilled className='w-[36px] h-[36px]' />}
            title="Автобуснаас буух"
            description="Та автобуснаас буухдаа итгэлтэй байна уу?"
            stop={{
              icon: <Bus className='w-[24px] h-[24px]' />,
              text: 'Хайлааст - Цэцэг Төв',
            }}
                  
            button1="Үгүй"
            button2="Тийм"
          />
        </div>
      </div>

      


      

    </div> /*End of Body*/
  );
}

export default Components;
