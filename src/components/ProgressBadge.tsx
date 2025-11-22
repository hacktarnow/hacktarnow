interface ProgressBadgeProps {
  locked?: boolean;
  icon?: string;
}

export function ProgressBadge({ locked = true, icon = "🐧" }: ProgressBadgeProps) {
  return (
    <div className="relative">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all ${
          locked
            ? "bg-muted/50 opacity-50"
            : "bg-primary shadow-lg"
        }`}
      >
        {icon}
      </div>
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">❓</span>
        </div>
      )}
    </div>
  );
}
