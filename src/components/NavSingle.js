export default function NavSingle({ icon, title, link }) {
    return (
        <div>
            <a href={link} className="flex flex-col items-center gap-1 p-3 group hover:bg-orange-100">
                <div className="text-zinc-500 group-hover:text-orange-500">{icon}</div>   
                <span className="font-medium font-[12px] text-zinc-500 group-hover:text-orange-500">{title}</span>
            </a>
        </div>
    )
}