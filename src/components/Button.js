export default function Button({ icon, children, onClick, className }) {
    return (
        <button className={`bg-orange-500 text-zinc-50 h-[48px] rounded-[48px] ${className}`} type="button" onClick={onClick}>
            {children}
            <div className="text-zinc-500 font-medium group-hover:text-orange-500">{icon}</div>
        </button>
    )
}