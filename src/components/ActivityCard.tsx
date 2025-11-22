import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  color: "cyan" | "pink" | "purple" | "lightpink";
  icon?: React.ReactNode;
  buttonText?: string;
  className?: string;
}

const colorClasses = {
  cyan: "bg-cyan text-cyan-foreground",
  pink: "bg-pink text-pink-foreground",
  purple: "bg-purple text-purple-foreground",
  lightpink: "bg-lightpink text-lightpink-foreground",
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
    <Card className={`p-6 ${colorClasses[color]} ${className} relative overflow-hidden`}>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90 mb-4">{subtitle}</p>
        <Button
          variant="secondary"
          className="bg-card text-card-foreground hover:bg-card/90 rounded-full px-8 shadow-md"
        >
          {buttonText}
        </Button>
      </div>
      {icon && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 text-8xl">
          {icon}
        </div>
      )}
    </Card>
  );
}
