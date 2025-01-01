"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle } from "lucide-react";

export default function TrainingPlan() {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch training plan
    const fetchPlan = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPlan({
        weeklyGoal: "Improve speed and agility",
        progress: 60,
        exercises: [
          {
            name: "High-Intensity Interval Training",
            duration: "30 minutes",
            completed: true,
          },
          {
            name: "Agility Ladder Drills",
            duration: "20 minutes",
            completed: true,
          },
          {
            name: "Plyometric Exercises",
            duration: "25 minutes",
            completed: false,
          },
          { name: "Sprint Training", duration: "15 minutes", completed: false },
          {
            name: "Cool-down and Stretching",
            duration: "15 minutes",
            completed: false,
          },
        ],
      });
    };
    fetchPlan();
  }, []);

  if (!plan)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Personalized Training Plan</h1>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Goal: {plan.weeklyGoal}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">
            {plan.progress}% Complete
          </div>
          <Progress value={plan.progress} className="w-full h-4" />
        </CardContent>
      </Card>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Today's Exercises</h2>
      <div className="space-y-4">
        {plan.exercises.map((exercise, index) => (
          <Card key={index} className={exercise.completed ? "bg-green-50" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                {exercise.completed ? (
                  <CheckCircle className="mr-2 text-green-500" />
                ) : (
                  <Circle className="mr-2 text-gray-300" />
                )}
                {exercise.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exercise.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
