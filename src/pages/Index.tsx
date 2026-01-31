import { useState } from "react";
import { videos, Video } from "@/data/videos";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerDialog } from "@/components/VideoPlayerDialog";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Fun Header */}
      <header className="bg-gradient-to-r from-kid-red via-kid-yellow to-kid-blue py-8 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          🎬 Fun Videos! 🎉
        </h1>
        <p className="mt-2 text-lg text-white/90 md:text-xl">
          Click on a video to watch!
        </p>
      </header>

      {/* Video Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              colorIndex={index}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </main>

      {/* Video Player Modal */}
      <VideoPlayerDialog
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default Index;
