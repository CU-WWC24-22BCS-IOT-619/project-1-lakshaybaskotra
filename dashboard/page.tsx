import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Activity, Trophy } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, Athlete!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Sessions
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Performance
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Goals Achieved
            </CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Next Live Session</CardTitle>
            <CardDescription>
              Join your upcoming training session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold mb-2">Today at 3:00 PM</p>
            <p className="text-muted-foreground mb-4">
              Sprint Training with Coach John
            </p>
            <Button asChild>
              <Link href="/live-session">
                Join Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Latest Analysis</CardTitle>
            <CardDescription>
              View your recent performance feedback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold mb-2">85% Overall Score</p>
            <p className="text-muted-foreground mb-4">
              Last updated: 2 days ago
            </p>
            <Button asChild variant="outline">
              <Link href="/analysis">
                View Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Training Plan Progress</CardTitle>
          <CardDescription>
            Track your weekly goals and exercises
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Weekly Goal: Improve sprint speed
              </h3>
              <p className="text-sm text-muted-foreground">Progress: 60%</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                <span>Complete 3 sprint training sessions</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-gray-300 mr-2"></span>
                <span>Achieve personal best in 100m dash</span>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                <span>Perform 5 plyometric workouts</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/training-plan">
                View Full Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
