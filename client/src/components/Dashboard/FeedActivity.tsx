type Props = {
    Activities?: activity[];
};

type activity = {
    title: string;
    detail: string;
    time: string;
    status: string;
    tone: string;
}

const activityStyles = {
  success: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  alert: {
    dot: "bg-accent-red",
    badge: "bg-red-100 text-red-700",
  },
  info: {
    dot: "bg-sky-500",
    badge: "bg-sky-100 text-sky-700",
  },
  warning: {
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
} as const;

export const FeedActivity = ({ Activities }: Props) => (
    <div className="w-full space-y-3">
        {(Activities || []).map((activity) => {
            const styles = activityStyles[activity.tone];

            return (
                <div
                    key={`${activity.title}-${activity.time}`}
                    className="flex items-start gap-3 border-b border-primary-dark/10 pb-3 last:border-b-0 last:pb-0"
                >
                    <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot}`}
                    />

                    <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                        <p className="text-sm font-semibold text-primary-dark">
                            {activity.title}
                        </p>
                        <p className="mt-1 text-xs text-primary-dark/70">
                            {activity.detail}
                        </p>
                        </div>

                        <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
                        >
                        {activity.status}
                        </span>
                    </div>

                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-primary-dark/45">
                        {activity.time}
                    </p>
                    </div>
                </div>
            );
        })}
    </div>
)