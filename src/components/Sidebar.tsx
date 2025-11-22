import { Home, Award, TrendingUp, BarChart3, Settings } from "lucide-react";
import { NavLink } from "./NavLink";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Award, label: "Training", path: "/training" },
  { icon: TrendingUp, label: "Progress", path: "/progress" },
  { icon: BarChart3, label: "Statistics", path: "/statistics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-primary p-6 flex flex-col gap-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-full border-4 border-accent"></div>
        </div>
        <h1 className="text-2xl font-bold text-primary-foreground">Kiditorial</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-6 py-3 rounded-full text-primary-foreground/80 font-medium transition-all"
            activeClassName="bg-secondary text-secondary-foreground shadow-lg"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Today's Progress Card */}
      <Card className="mt-auto p-6 bg-card text-center">
        <h3 className="font-bold text-lg mb-4">Today's Progress</h3>
        
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${67 * 3.52} ${100 * 3.52}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">67%</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          Finish today's program and get
        </p>
        <div className="flex items-center justify-center gap-1 text-cyan font-bold">
          <span className="text-2xl">💎</span>
          <span className="text-xl">10</span>
        </div>
      </Card>
    </aside>
  );
}
