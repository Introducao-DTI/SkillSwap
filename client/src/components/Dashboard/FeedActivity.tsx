type Props = {
    Activities?: activity[];
};

type activity = {
    title: string;
    detail: string;
    time: string;
    status: string;
}

export const FeedActivity = ({ Activities }: Props) => (
    <div className="w-full space-y-3">
        {(Activities || []).map((activity) => {
            return (
                <div
                    key={`${activity.title}-${activity.time}`}
                    className="flex items-start gap-3 border-b px-2 border-primary-dark/10 pb-3 last:border-b-0 last:pb-0"
                >
                    <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <span className="shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white bg-accent-red"
                                >
                                    {activity.status}
                                </span>

                                <p className="text-sm mt-2 font-semibold text-primary-dark">
                                    {activity.title}
                                </p>

                                <p className="mt-1 text-xs text-primary-dark/70">
                                    {activity.detail}
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full px-2 py-1 text-[10px] text-primary-light font-semibold uppercase tracking-[0.14em]">
                                <span className="inline-flex mr-1.5 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-light" />
                                {activity.time}
                            </span>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
)