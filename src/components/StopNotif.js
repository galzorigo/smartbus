export default function StopNotif({ icon, title, description, stop, button1, button2 }) {
    return (
        <div className="flex flex-col flex-grow bg-white p-[20px] space-y-[20px] shadow-xl rounded-[12px] border border-gray-200 ">
            <div className="text-blue-500 w-[64px] h-[64px] bg-blue-500 bg-opacity-10 rounded-[100px] flex justify-center items-center">
                {icon}
            </div>

            <div className="space-y-[8px]">
                <p className="font-medium text-[16px] leading-140">{title}</p>
                <p className="font-regular text-[16px] leading-160 text-gray-400">{description}</p>
            </div>

            <div className="flex items-center gap-[12px] bg-blue-500 bg-opacity-10 p-[12px] rounded-[12px]">
                <p className="text-blue-500">{stop.icon}</p>
                <p className="text-blue-500 font-medium">{stop.text}</p>
            </div>

            <div className="flex flex-grow gap-[8px] justify-center items-center">
                <div className="flex-grow h-[44px] bg-gray-200 flex justify-center items-center rounded-[100px]">
                    <p className="text-[16px] font-medium">{button1}</p>
                </div>

                <div className="flex-grow h-[44px] bg-blue-500 flex justify-center items-center rounded-[100px]">
                    <p className="text-[16px] text-white font-medium">{button2}</p>
                </div>
            </div>



            
        </div>

        
    )
}