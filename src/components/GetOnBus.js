export default function GetOnBus({ icon, title, description, stop, button1, button2 }) {
    return (
        <div className="flex flex-col flex-grow bg-white p-[20px] space-y-[20px] shadow-xl rounded-[24px] border border-gray-100 ">
            <div className="text-orange-500 w-[64px] h-[64px] bg-orange-500 bg-opacity-10 rounded-[100px] flex justify-center items-center">
                {icon}
            </div>

            <div className="space-y-[8px]">
                <p className="font-medium text-[16px] leading-140">{title}</p>
                <p className="font-regular text-[16px] leading-160 text-gray-400">{description}</p>
            </div>

            <div className="flex items-center gap-[12px] bg-orange-500 bg-opacity-10 p-[12px] rounded-[12px]">
                <p className="text-orange-500">{stop.icon}</p>
                <p className="text-orange-500 font-medium">{stop.text}</p>
            </div>

            <div className="flex flex-grow gap-[8px] justify-center items-center">
                <div className="flex-grow h-[44px] bg-gray-100 flex justify-center items-center rounded-[100px] duration-150 ease-in-out active:scale-95">
                    <p className="text-[16px] font-medium">{button1}</p>
                </div>

                <div className="flex-grow h-[44px] bg-orange-500 flex justify-center items-center rounded-[100px] duration-150 ease-in-out active:scale-95">
                    <p className="text-[16px] text-white font-medium">{button2}</p>
                </div>
            </div>



            
        </div>

        
    )
}