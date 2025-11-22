import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  color: "cyan" | "pink" | "purple" | "green";
  icon: React.ReactNode;
  buttonText?: string;
  className?: string;
}

const colorClasses = {
  cyan: "bg-cyan text-cyan-foreground",
  pink: "bg-pink text-pink-foreground",
  purple: "bg-purple text-purple-foreground",
  green: "bg-green text-green-foreground",
};

export function ActivityCard({
  title,
  subtitle,
  color,
  icon,
  buttonText = "Start",
  className = "",
}: ActivityCardProps) {
  return (
    <Card className={`p-6 ${colorClasses[color]} ${className} relative overflow-hidden group hover:shadow-lg transition-all`}>
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90 mb-4">{subtitle}</p>
          <Button
            variant="secondary"
            className="bg-card text-card-foreground hover:bg-card/90 rounded-lg px-6 shadow-sm"
          >
            {buttonText}
          </Button>
        </div>
        <div className="w-12 h-12 flex items-center justify-center opacity-90">
          {icon}
        </div>
      </div>
    </Card>
  );
}
