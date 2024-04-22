export default function BusStopWithNotif({Stop, icon, icon2, time}) {
    return (
        <div className="flex justify-between rounded-[12px] items-center px-[12px] ">
            <div className="flex items-center">
                <div className="text-blue-500 h-[24px] w-[24px]">
                    {icon}
                </div>

                <div className="flex items-center justify-center h-[54px] rounded-[12px] ml-[8px]">
                    <p className="font-medium text-[16px] text-blue-500 px-[8px]">{Stop}</p>
                </div>
            </div>

            <div className="flex items-center gap-[4px]">
                <div className="text-[12px] font-medium text-gray-400">
                    {time}
                </div>

                <div className="text-orange-500 h-[24px] w-[24px] ml-[8px]">
                    {icon2}
                </div>
            </div>
        </div>

    )
}