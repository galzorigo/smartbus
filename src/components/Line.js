export default function Line({lineCode, line}) {
    return (
        <div className="flex flex-row items-center bg-gray-100 h-[60px] rounded-[12px] px-[12px] gap-[12px]">
            <div className="flex items-center justify-center bg-orange-500 h-[32px] inline-block rounded-[100px]">
                <p className="font-semibold text-[16px] text-gray-50 px-[8px]">{lineCode}</p>
            </div>

            <p className="font-semibold text-[16px] text-gray-950">{line}</p>
        </div>
    )
}