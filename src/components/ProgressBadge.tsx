import { Card } from "./ui/card";
import { Lock, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProgressBadgeProps {
  locked?: boolean;
  icon?: LucideIcon;
  completed?: boolean;
}

export function ProgressBadge({ locked = false, icon: Icon, completed = false }: ProgressBadgeProps) {
  return (
    <Card className={`aspect-square p-6 flex items-center justify-center relative transition-all ${
      locked 
        ? "bg-muted border-border" 
        : completed
        ? "bg-primary text-primary-foreground shadow-md"
        : "bg-card border-primary/30 hover:border-primary hover:shadow-md"
    }`}>
      {locked ? (
        <Lock className="w-8 h-8 text-muted-foreground" />
      ) : Icon ? (
        <>
          <Icon className="w-8 h-8" />
          {completed && (
            <div className="absolute top-2 right-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          )}
        </>
      ) : null}
    </Card>
  );
}
