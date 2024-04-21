export default function SearchBar({ icon, link }) {
    return (
        <div className="flex items-center gap-[12px] bg-gray-100 p-[12px] rounded-[12px] h-[44px] duration-150 ease-in-out active:scale-95">
            <div className="flex items-center justify-center h-[20px] w-[20px] text-gray-400 rounded-full">
                {icon}
            </div>
            <input
                type="text"
                placeholder="Хайх"
                className="text-gray-400 font-regular bg-transparent border-none focus:outline-none flex-grow"
            />
        </div>
    );
}
