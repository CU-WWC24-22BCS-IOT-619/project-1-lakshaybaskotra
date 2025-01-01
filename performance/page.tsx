"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";

export default function PerformanceAnalysis() {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const fetchPerformance = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPerformance({
        overallScore: 85,
        metrics: [
          { name: "Speed", score: 80 },
          { name: "Accuracy", score: 90 },
          { name: "Stamina", score: 85 },
        ],
        feedback:
          "Great improvement in accuracy. Focus on increasing your speed in the next session.",
      });
    };
    fetchPerformance();
  }, []);

  if (!performance)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">
          Performance Analysis
        </h1>
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-700">
              Overall Performance
            </CardTitle>
            <CardDescription>Your overall performance score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative pt-1">
              <Progress value={performance.overallScore} className="h-4" />
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-lg font-semibold text-indigo-800">
                {performance.overallScore}%
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {performance.metrics.map((metric, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-700">
                  {metric.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative pt-1">
                  <Progress value={metric.score} className="h-3" />
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-sm font-semibold text-indigo-800">
                    {metric.score}%
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-700">
              AI Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">{performance.feedback}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
