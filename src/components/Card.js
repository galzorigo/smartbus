export default function Card({ title, description, image }) {
    return (
        <div className="p-4 bg-zinc-200 mt-2 rounded-lg inline-block">
            <img src={image} alt={title} className="object-cover rounded-lg" />
            <h2 className="text-lg font-semibold text-zinc-800">{title}</h2>
            <p>{description}</p>
        </div>
    )
}