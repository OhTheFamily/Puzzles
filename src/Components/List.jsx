export default function List({ children }) {
    return (
        <ul className="divide-y grid grid-cols-2 gap-4 divide-slate-100">
            {children}
        </ul>
    )
}
