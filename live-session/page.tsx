"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Play,
  Square,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  MessageSquare,
} from "lucide-react";

export default function LiveSession() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const toggleStream = () => setIsStreaming(!isStreaming);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleCamera = () => setIsCameraOff(!isCameraOff);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Live Training Session</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 relative">
                {isStreaming ? (
                  <video className="w-full h-full" autoPlay muted playsInline>
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full text-white text-xl">
                    Click 'Start Session' to begin
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <Button
                    onClick={toggleStream}
                    className={
                      isStreaming
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    }
                  >
                    {isStreaming ? (
                      <>
                        <Square className="mr-2 h-4 w-4" /> End Session
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" /> Start Session
                      </>
                    )}
                  </Button>
                  <div className="space-x-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <MicOff className="h-4 w-4" />
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={toggleCamera}
                    >
                      {isCameraOff ? (
                        <CameraOff className="h-4 w-4" />
                      ) : (
                        <Camera className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Session Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-2 rounded-lg">
                  <p className="font-semibold">Coach John</p>
                  <p>
                    Great form on that last sprint! Let's try to maintain that
                    pace for the next set.
                  </p>
                </div>
                <div className="bg-muted p-2 rounded-lg">
                  <p className="font-semibold">You</p>
                  <p>Thanks, Coach! I'll do my best to keep it up.</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
                <Button className="rounded-l-none">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
