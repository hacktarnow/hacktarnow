import { Sidebar } from "@/components/Sidebar";
import { ActivityCard } from "@/components/ActivityCard";
import { ProgressBadge } from "@/components/ProgressBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Headphones, BookOpen, FileText, Award, Star, Trophy, Zap, Brain, Globe } from "lucide-react";

const Index = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartData = [40, 50, 45, 60, 48, 35, 42];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-1">Welcome back, Alex</h2>
            <p className="text-sm text-muted-foreground">Continue your learning journey</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Level 12</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Star className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm">890 pts</span>
            </div>
            <Button variant="outline" className="rounded-lg">
              Profile
            </Button>
          </div>
        </header>

        {/* Today's Plan Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-semibold">Today's Lessons</h3>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <ActivityCard
              title="Advanced Listening"
              subtitle="Complete 15 exercises"
              color="cyan"
              icon={<Headphones className="w-8 h-8" />}
              className="md:col-span-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ActivityCard
              title="Reading Comprehension"
              subtitle="3 articles remaining"
              color="pink"
              icon={<BookOpen className="w-8 h-8" />}
            />
            <ActivityCard
              title="Vocabulary Builder"
              subtitle="25 new words"
              color="purple"
              icon={<FileText className="w-8 h-8" />}
            />
          </div>
        </div>

        {/* Progress and Training Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Progress */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Achievements</h3>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ProgressBadge completed={true} icon={Award} />
              <ProgressBadge completed={true} icon={Zap} />
              <ProgressBadge completed={false} icon={Brain} />
              <ProgressBadge locked={true} />
              <ProgressBadge locked={true} />
              <ProgressBadge locked={true} />
            </div>
          </div>

          {/* Training */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Continue Learning</h3>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <ActivityCard
              title="Advanced Grammar"
              subtitle="Complex sentence structures"
              color="green"
              buttonText="Continue"
              icon={<Globe className="w-8 h-8" />}
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-semibold">Weekly Activity</h3>
            <Button variant="ghost" size="sm">
              View Details <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <Card className="p-6 border-border">
            <div className="flex items-end justify-between h-64 gap-3">
              {chartData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full flex items-end justify-center flex-1">
                    <div
                      className={`w-full rounded-t-lg transition-all relative ${
                        index === 4
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                      style={{ height: `${value}%` }}
                    >
                      {index === 4 && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shadow-sm">
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
