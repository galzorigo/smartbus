export default function Return({ icon, children, onClick, className }) {
    return (
        <button className={`flex items-center justify-center gap-[4px] text-orange-500 transition duration-150 ease-in-out active:scale-95 ${className}`} type="button" onClick={onClick}>
            <div className="text-orange-500 font-medium h-[20px] w-[20px]">{icon}</div>
            <div>{children}</div>
        </button>
    )
}
