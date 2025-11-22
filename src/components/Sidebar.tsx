import { Home, BookOpen, TrendingUp, BarChart3, Settings, Target } from "lucide-react";
import { NavLink } from "./NavLink";
import { Card } from "./ui/card";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Lessons", path: "/lessons" },
  { icon: TrendingUp, label: "Progress", path: "/progress" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-sidebar-bg p-6 flex flex-col gap-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Target className="w-6 h-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-semibold text-card">LearnHub</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-text font-medium transition-all hover:bg-card/5"
            activeClassName="bg-sidebar-active text-primary-foreground"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Today's Progress Card */}
      <Card className="mt-auto p-5 bg-card/5 border-card/10 text-center">
        <h3 className="font-semibold text-base mb-4 text-card">Daily Goal</h3>
        
        <div className="relative w-28 h-28 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="hsl(var(--card) / 0.2)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${67 * 3.14} ${100 * 3.14}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-card">67%</span>
          </div>
        </div>

        <p className="text-xs text-sidebar-text mb-3">
          Complete today's lessons
        </p>
        <div className="flex items-center justify-center gap-2 text-primary font-semibold">
          <Target className="w-4 h-4" />
          <span className="text-sm">3 of 5 completed</span>
        </div>
      </Card>
    </aside>
  );
}
