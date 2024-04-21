export default function Button({ children, onClick, className }) {
    return (
        <button className={`bg-orange-500 text-zinc-50 h-[48px] rounded-[48px] ${className}`} type="button" onClick={onClick}>
            {children}
        </button>
    )
}