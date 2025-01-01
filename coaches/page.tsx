"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Coach {
  id: number;
  name: string;
  specialty: string;
  price: number;
  rating: number;
  image: string;
}

export default function Coaches() {
  const [coaches, setCoaches] = useState<Coach[]>([]);

  useEffect(() => {
    // Simulating API call to fetch coaches
    const fetchCoaches = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCoaches([
        {
          id: 1,
          name: "John Doe",
          specialty: "Sprint Training",
          price: 50,
          rating: 4.8,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 2,
          name: "Jane Smith",
          specialty: "Strength & Conditioning",
          price: 60,
          rating: 4.9,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 3,
          name: "Mike Johnson",
          specialty: "Agility Training",
          price: 55,
          rating: 4.7,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 4,
          name: "Sarah Brown",
          specialty: "Endurance Training",
          price: 65,
          rating: 4.9,
          image: "/placeholder.svg?height=200&width=200",
        },
      ]);
    };
    fetchCoaches();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Find a Coach</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coaches.map((coach) => (
          <Card key={coach.id} className="overflow-hidden">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{coach.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Specialty: {coach.specialty}
              </p>
              <p className="font-semibold mb-2">${coach.price}/hour</p>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" />
                <span>{coach.rating}</span>
              </div>
              <Button className="w-full">Book Session</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
