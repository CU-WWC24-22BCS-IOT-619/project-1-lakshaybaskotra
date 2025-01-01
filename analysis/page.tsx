"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { date: "2023-05-01", speed: 75, accuracy: 80, stamina: 70 },
  { date: "2023-05-08", speed: 78, accuracy: 82, stamina: 73 },
  { date: "2023-05-15", speed: 80, accuracy: 85, stamina: 75 },
  { date: "2023-05-22", speed: 82, accuracy: 88, stamina: 78 },
  { date: "2023-05-29", speed: 85, accuracy: 90, stamina: 80 },
];

export default function Analysis() {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch performance data
    const fetchPerformance = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPerformance({
        overallScore: 85,
        metrics: [
          { name: "Speed", score: 85 },
          { name: "Accuracy", score: 90 },
          { name: "Stamina", score: 80 },
        ],
        feedback:
          "Excellent progress! Your speed and accuracy have shown significant improvement. Focus on building stamina in the coming weeks to achieve a more balanced performance.",
      });
    };
    fetchPerformance();
  }, []);

  if (!performance)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-bold text-center mb-4">
            {performance.overallScore}%
          </div>
          <Progress value={performance.overallScore} className="w-full h-4" />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performance.metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{metric.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-center mb-2">
                {metric.score}%
              </div>
              <Progress value={metric.score} className="w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="speed" stroke="#8884d8" />
                <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" />
                <Line type="monotone" dataKey="stamina" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AI Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{performance.feedback}</p>
        </CardContent>
      </Card>
    </div>
  );
}
