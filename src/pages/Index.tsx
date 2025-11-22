import { Sidebar } from "@/components/Sidebar";
import { ActivityCard } from "@/components/ActivityCard";
import { ProgressBadge } from "@/components/ProgressBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartData = [40, 50, 45, 60, 48, 35, 42];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
              👦
            </div>
            <h2 className="text-3xl font-bold text-foreground">Hi Danish!</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow">
              <span className="text-xl">🏆</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow">
              <span className="text-xl">💎</span>
              <span className="font-bold">90</span>
            </div>
            <Button variant="outline" className="rounded-full">
              Danish Colt
            </Button>
          </div>
        </header>

        {/* Today's Plan Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Your today's plan</h3>
            <Button variant="ghost" size="sm">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ActivityCard
              title="Listening"
              subtitle="785 Words"
              color="cyan"
              icon="🎧"
              className="md:col-span-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActivityCard
              title="Reading"
              subtitle="1290 Characters"
              color="pink"
              icon="📚"
            />
            <ActivityCard
              title="Learn words"
              subtitle="17 Words"
              color="purple"
              icon="📝"
            />
          </div>
        </div>

        {/* Progress and Training Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Progress */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Progress</h3>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ProgressBadge locked={false} icon="🎮" />
              <ProgressBadge locked={false} icon="☁️" />
              <ProgressBadge locked={true} />
              <ProgressBadge locked={true} />
              <ProgressBadge locked={true} />
              <ProgressBadge locked={true} />
            </div>
          </div>

          {/* Training */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Training</h3>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <ActivityCard
              title="Grammar training"
              subtitle="Present Simple"
              color="lightpink"
              buttonText="Continue"
              icon="✏️"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Statistics</h3>
            <Button variant="ghost" size="sm">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <Card className="p-6">
            <div className="flex items-end justify-between h-64 gap-4">
              {chartData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center flex-1">
                    <div
                      className={`w-full rounded-t-xl transition-all relative ${
                        index === 4
                          ? "bg-secondary"
                          : "bg-primary/30"
                      }`}
                      style={{ height: `${value}%` }}
                    >
                      {index === 4 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                          48 min
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    {weekDays[index]}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
