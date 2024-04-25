export default function Button({ icon, children, onClick, className, variant }) {
    let bgColor, textColor;

    // Determine background and text color based on the variant
    switch (variant) {
        case 1:
            bgColor = 'bg-orange-500';
            textColor = 'text-white';
            break;
        case 2:
            bgColor = 'bg-blue-500';
            textColor = 'text-white';
            break;
        case 3:
            bgColor = 'bg-gray-200';
            textColor = 'text-gray-950';
            break;
        default:
            bgColor = 'bg-orange-500';
            textColor = 'text-white';
    }

    return (
        <button className={`${bgColor} ${textColor} h-[48px] rounded-[48px] transition duration-150 ease-in-out active:scale-95 ${className}`} type="button" onClick={onClick}>
            {children}
            <div className={`${textColor} font-medium group-hover:text-orange-500`}>{icon}</div>
        </button>
    )
}
