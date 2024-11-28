export default function ListItem({ puzzle }) {
    return (
        <li>
            <article className="flex items-start space-x-6 p-6">
                <img src={puzzle.image} alt="" width="300" height="300" className="flex-none rounded-md bg-slate-100" />
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{puzzle.name}</h2>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                        <div>
                            <dt className="sr-only">Rating</dt>
                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{puzzle.rating}</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Genre</dt>
                            <dd className="flex items-center">
                                <p>{puzzle.description}</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </article>
        </li>
    )
}
