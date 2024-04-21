export default function Button({ children, onClick, className }) {
    return (
        <button className={`bg-indigo-500 text-zinc-50 p-3 ${className}`} type="button" onClick={onClick}>
            {children}
        </button>
    )
}